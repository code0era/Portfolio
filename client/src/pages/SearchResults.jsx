import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from '../components/SearchBar';
import TabBar from '../components/TabBar';
import ResultCard from '../components/ResultCard';
import Modal from '../components/Modal';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function SkeletonCard() {
  return (
    <div style={{ padding: '20px 0', borderBottom: '1px solid var(--divider)' }}>
      <div className="skeleton skeleton-url" />
      <div className="skeleton skeleton-title" style={{ marginTop: 8 }} />
      <div className="skeleton skeleton-desc" style={{ marginTop: 8 }} />
      <div className="skeleton skeleton-desc short" style={{ marginTop: 6 }} />
    </div>
  );
}

export default function SearchResults({ initialQuery, initialTab = 'all', luckyResult, onHome, onNavigateTab }) {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState(initialQuery || 'Shubham Yadav');
  const [activeTab, setActiveTab] = useState(initialTab);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedResult, setSelectedResult] = useState(luckyResult || null);

  const fetchResults = useCallback(async (q, tab) => {
    setLoading(true);
    try {
      const cat = tab === 'all' ? '' : tab;
      const url = `${API}/api/results?q=${encodeURIComponent(q || '')}&category=${cat}`;
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.results || []);
      setTotal(data.total || 0);
    } catch { setResults([]); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchResults(query, activeTab); }, [activeTab]);

  useEffect(() => {
    if (onNavigateTab) {
      const orig = onNavigateTab;
      return;
    }
  }, []);

  // Allow chatbot to navigate tabs
  useEffect(() => {
    if (onNavigateTab?.tab) {
      setActiveTab(onNavigateTab.tab === 'about' ? 'all' : onNavigateTab.tab);
    }
  }, [onNavigateTab]);

  const handleSearch = (q) => {
    setQuery(q);
    fetchResults(q, activeTab);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // When clicking a tab (like "Skills" or "Projects"), we want to see ALL items in that category, 
    // rather than filtering the category by the current search query (unless the user explicitly searches while on the tab).
    // By clearing the query on tab change (or passing empty string if we don't clear the visual query), 
    // it acts like clicking a section link on an actual portfolio.
    fetchResults('', tab);
  };

  return (
    <div className="results-page">
      {/* Header */}
      <div className="google-header">
        <button onClick={onHome} className="header-logo" title="Go Home">
          <span className="logo-g">S</span><span className="logo-o1">h</span><span className="logo-o2">u</span>
          <span className="logo-g2">b</span><span className="logo-l">h</span><span className="logo-e">a</span><span className="logo-g">m</span>
        </button>

        <div className="header-search-wrap">
          <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} compact />
        </div>

        <div className="header-actions">
          <a href="https://github.com/code0era" target="_blank" rel="noreferrer"
            style={{ fontSize: 20, textDecoration: 'none' }} title="GitHub">🐙</a>
          <a href="https://www.linkedin.com/in/shubham-yadav-38a467267/" target="_blank" rel="noreferrer"
            style={{ fontSize: 20, textDecoration: 'none' }} title="LinkedIn">💼</a>
          <a href="https://drive.google.com/file/d/13J1OG6DiY0zAWbcjClhruDMAlgYVEaUr/view?usp=sharing" target="_blank" rel="noreferrer"
            style={{ fontSize: 20, textDecoration: 'none' }} title="Resume">📄</a>
          <button className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme} title="Toggle theme">
            <div className="theme-toggle-knob">{theme === 'dark' ? '🌙' : '☀️'}</div>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Content */}
      <div className="results-content">
        {!loading && (
          <div className="results-info">
            About {total.toLocaleString()} results for "<strong>{query}</strong>"
          </div>
        )}

        {loading ? (
          [1,2,3,4].map(i => <SkeletonCard key={i} />)
        ) : results.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <div className="empty-state-title">No results found</div>
            <div className="empty-state-sub">Try a different search or tab</div>
          </div>
        ) : (
          results.map((r, i) => (
            <ResultCard key={r.id} result={r} index={i} onClick={setSelectedResult} />
          ))
        )}
      </div>

      {/* Modal */}
      {selectedResult && <Modal result={selectedResult} onClose={() => setSelectedResult(null)} />}
    </div>
  );
}
