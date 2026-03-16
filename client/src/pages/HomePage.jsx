import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from '../components/SearchBar';

const RECENT_SEARCHES = ['Shubham Yadav', 'MERN developer', 'AI/ML projects', 'VAANI chat app'];

export default function HomePage({ onSearch }) {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');

  const handleLucky = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/lucky`);
      const data = await res.json();
      if (data?.id) onSearch('projects', data);
    } catch { onSearch('projects'); }
  };

  return (
    <div className="homepage">
      {/* Ambient orbs */}
      <div className="homepage-bg-orb orb1" />
      <div className="homepage-bg-orb orb2" />
      <div className="homepage-bg-orb orb3" />

      {/* Theme toggle top-right */}
      <div style={{ position: 'fixed', top: 20, right: 24, zIndex: 100 }}>
        <button className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme} title="Toggle theme">
          <div className="theme-toggle-knob">{theme === 'dark' ? '🌙' : '☀️'}</div>
        </button>
      </div>

      {/* Logo */}
      <div className="homepage-logo">
        <span className="logo-g">S</span>
        <span className="logo-o1">h</span>
        <span className="logo-o2">u</span>
        <span className="logo-g2">b</span>
        <span className="logo-l">h</span>
        <span className="logo-e">a</span>
        <span className="logo-g">m</span>
      </div>

      {/* Search */}
      <div className="homepage-search-wrap">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={(q) => onSearch(q)}
          autoFocus
        />
      </div>

      {/* Buttons */}
      <div className="homepage-buttons">
        <button className="google-btn" onClick={() => onSearch(query || 'Shubham Yadav')}>🔍 Search Portfolio</button>
        <button className="google-btn btn-lucky" onClick={handleLucky}>🎲 I'm Feeling Lucky</button>
      </div>

      {/* Recent searches */}
      <div className="homepage-recent">
        {RECENT_SEARCHES.map((s, i) => (
          <button key={i} className="recent-tag" onClick={() => onSearch(s)}>⏱ {s}</button>
        ))}
      </div>

      {/* Footer */}
      <div className="homepage-footer">
        <span>📍 Jaunpur, UP · IIIT Kalyani 2026</span>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="https://github.com/code0era" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/shubham-yadav-38a467267/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          <a href="https://leetcode.com/u/Code0Era/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>LeetCode</a>
        </div>
      </div>
    </div>
  );
}
