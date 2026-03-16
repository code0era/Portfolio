import { useState, useRef, useEffect } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const SUGGESTIONS = ['Who is Shubham?', 'Show projects', 'Skills & tech', 'Contact info', 'Achievements', 'Work experience'];

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatBot({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi there! 👋 I'm Shubham's portfolio assistant.\n\nAsk me anything about his skills, projects, experience, or how to contact him!",
      time: formatTime(),
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) { setShowBadge(false); bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); inputRef.current?.focus(); }
  }, [open, messages]);

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput('');
    setMessages(prev => [...prev, { from: 'user', text: msg, time: formatTime() }]);
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { from: 'bot', text: data.response, time: formatTime() }]);
      if (data.action?.type === 'navigate' && onNavigate) onNavigate(data.action.tab);
      if (data.action?.type === 'openLink') window.open(data.action.url, '_blank');
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: 'Sorry, I had trouble connecting. Please try again!', time: formatTime() }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="chatbot-fab">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <div className="chatbot-header-info">
              <div className="chatbot-name">Portfolio Assistant</div>
              <div className="chatbot-status"><span className="status-dot" /> Online — Ask me anything!</div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                <div className="chat-bubble">{msg.text}</div>
                <div className="chat-time">{msg.time}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-typing">
                <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chatbot-suggestions">
            {SUGGESTIONS.map((s, i) => (
              <button key={i} className="suggestion-chip" onClick={() => sendMessage(s)}>{s}</button>
            ))}
          </div>

          <div className="chatbot-input-row">
            <input
              ref={inputRef}
              className="chatbot-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about Shubham..."
            />
            <button className="chatbot-send" onClick={() => sendMessage()} disabled={!input.trim() || loading}>➤</button>
          </div>
        </div>
      )}

      <button className="chatbot-toggle" onClick={() => setOpen(o => !o)} title="Chat with Portfolio Assistant">
        {open ? '✕' : '🤖'}
        {showBadge && !open && <span className="chatbot-badge" />}
      </button>
    </div>
  );
}
