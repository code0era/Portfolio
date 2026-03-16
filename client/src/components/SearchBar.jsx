import { useState, useEffect, useRef } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function SearchBar({ value, onChange, onSearch, compact = false, autoFocus = false }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!value || value.length < 2) { setSuggestions([]); return; }
      try {
        const res = await fetch(`${API}/api/suggest?q=${encodeURIComponent(value)}`);
        const data = await res.json();
        setSuggestions(data.suggestions || []);
      } catch { setSuggestions([]); }
    };
    const t = setTimeout(fetchSuggestions, 200);
    return () => clearTimeout(t);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { onSearch(value); setShowDropdown(false); }
    if (e.key === 'Escape') setShowDropdown(false);
  };

  const handleSuggestionClick = (s) => {
    onChange(s);
    onSearch(s);
    setShowDropdown(false);
  };

  return (
    <div className="search-bar-container" ref={dropdownRef}>
      <div className={`search-bar-wrap ${focused ? 'focused' : ''}`}>
        <span className="search-icon">🔍</span>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          value={value}
          placeholder={compact ? 'Search Shubham Yadav...' : 'Search Jai Shree Krishna – Developer Portfolio'}
          onChange={e => { onChange(e.target.value); setShowDropdown(true); }}
          onFocus={() => { setFocused(true); setShowDropdown(true); }}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
        />
        {value && (
          <button className="search-clear-btn" onClick={() => { onChange(''); setSuggestions([]); inputRef.current?.focus(); }}>✕</button>
        )}
        {compact && (
          <button
            onClick={() => onSearch(value)}
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '16px', padding: '2px 4px' }}
          >🔎</button>
        )}
      </div>

      {showDropdown && suggestions.length > 0 && (
        <div className="autocomplete-dropdown">
          {suggestions.map((s, i) => (
            <div key={i} className="autocomplete-item" onMouseDown={() => handleSuggestionClick(s)}>
              <span className="autocomplete-item-icon">🔍</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
