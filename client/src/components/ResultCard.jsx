export default function ResultCard({ result, onClick, index = 0 }) {
  const getCategoryEmoji = (cat) => {
    const map = { about: '👤', skills: '🛠️', projects: '🚀', experience: '💼', education: '🎓', achievements: '🏆', contact: '📞' };
    return map[cat] || '📄';
  };

  const getTags = (result) => {
    if (result.category === 'projects' && result.details?.stack) return result.details.stack.slice(0, 4);
    if (result.category === 'skills') return ['MERN', 'AI/ML', 'TypeScript', 'Python'];
    if (result.category === 'experience') return result.details?.stack?.slice(0, 3) || [];
    return [];
  };

  const tags = getTags(result);

  return (
    <div
      className={`result-card ${result.featured ? 'result-featured' : ''}`}
      onClick={() => onClick(result)}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="result-url-row">
        <div className="result-favicon">{getCategoryEmoji(result.category)}</div>
        <span className="result-url">
          <span style={{ color: 'var(--text-secondary)' }}>portfolio.dev</span>
          &nbsp;›&nbsp;
          {result.url.replace('portfolio.dev/', '')}
        </span>
      </div>
      <div className="result-title">{result.title}</div>
      <div className="result-description">{result.description}</div>
      {tags.length > 0 && (
        <div className="result-tags">
          {tags.map((tag, i) => (
            <span key={i} className="result-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
