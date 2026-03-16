import { useState, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import ChatBot from './components/ChatBot';
import './index.css';

export default function App() {
  const [page, setPage] = useState('home'); // 'home' | 'results'
  const [query, setQuery] = useState('');
  const [luckyResult, setLuckyResult] = useState(null);
  const [chatbotTab, setChatbotTab] = useState(null);

  const handleSearch = (q, lucky = null) => {
    setQuery(q || 'Shubham Yadav');
    setLuckyResult(lucky);
    setPage('results');
  };

  const handleHome = () => {
    setPage('home');
    setLuckyResult(null);
    setChatbotTab(null);
  };

  const handleChatbotNavigate = (tab) => {
    if (page !== 'results') {
      setQuery('Shubham Yadav');
      setPage('results');
    }
    setChatbotTab({ tab, ts: Date.now() });
  };

  return (
    <ThemeProvider>
      {page === 'home' ? (
        <HomePage onSearch={handleSearch} />
      ) : (
        <SearchResults
          initialQuery={query}
          luckyResult={luckyResult}
          onHome={handleHome}
          onNavigateTab={chatbotTab}
        />
      )}
      <ChatBot onNavigate={handleChatbotNavigate} />
    </ThemeProvider>
  );
}
