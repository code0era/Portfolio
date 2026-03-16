export default function Modal({ result, onClose }) {
  if (!result) return null;

  const { title, url, description, category, details } = result;

  const getLinkUrl = () => {
    if (category === 'contact') return `mailto:${details?.email}`;
    if (category === 'about') return details?.resume;
    if (category === 'projects') return details?.github;
    return null;
  };

  const renderDetails = () => {
    switch (category) {
      case 'about':
        return (
          <>
            <div className="modal-section">
              <div className="modal-section-title">📋 Summary</div>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>{details?.summary}</p>
            </div>
            <div className="modal-section">
              <div className="modal-section-title">📬 Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                <div>📧 <a href={`mailto:${details?.email}`} style={{ color: 'var(--text-link)' }}>{details?.email}</a></div>
                <div>📞 {details?.phone}</div>
                <div>📍 {details?.location}</div>
              </div>
            </div>
            <div className="modal-links">
              <a href={details?.resume} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-primary">📄 View Resume</a>
              <a href={details?.github} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-secondary">🐙 GitHub</a>
              <a href={details?.linkedin} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-secondary">💼 LinkedIn</a>
              <a href={details?.leetcode} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-secondary">⚡ LeetCode</a>
            </div>
          </>
        );

      case 'projects':
        return (
          <>
            <div className="modal-section">
              <div className="modal-section-title">🎯 Highlights</div>
              {details?.highlights?.map((h, i) => (
                <div key={i} className="modal-highlight">{h}</div>
              ))}
            </div>
            <div className="modal-section">
              <div className="modal-section-title">🛠️ Tech Stack</div>
              <div className="modal-stack-tags">
                {details?.stack?.map((s, i) => <span key={i} className="modal-stack-tag">{s}</span>)}
              </div>
            </div>
            {details?.duration && (
              <div className="modal-section">
                <div className="modal-section-title">📅 Duration</div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{details.duration}</p>
              </div>
            )}
            <div className="modal-links">
              <a href={details?.github} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-primary">🐙 View on GitHub</a>
            </div>
          </>
        );

      case 'skills':
        return (
          <>
            {[
              { label: '💻 Languages', items: details?.languages },
              { label: '🌐 Full Stack', items: details?.fullStack },
              { label: '🤖 AI / ML', items: details?.aiMl },
              { label: '🗄️ Databases', items: details?.databases },
              { label: '🔧 Tools & Frameworks', items: details?.tools },
            ].map(({ label, items }) => items?.length ? (
              <div className="modal-section" key={label}>
                <div className="modal-section-title">{label}</div>
                <div className="modal-stack-tags">
                  {items.map((s, i) => <span key={i} className="modal-stack-tag">{s}</span>)}
                </div>
              </div>
            ) : null)}
          </>
        );

      case 'experience':
        return (
          <>
            <div className="modal-section">
              <div className="modal-section-title">🏢 Company</div>
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{details?.company} — {details?.role}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: 4 }}>{details?.duration} · {details?.type}</p>
            </div>
            <div className="modal-section">
              <div className="modal-section-title">🎯 Key Contributions</div>
              {details?.highlights?.map((h, i) => <div key={i} className="modal-highlight">{h}</div>)}
            </div>
            <div className="modal-section">
              <div className="modal-section-title">🛠️ Tech Stack</div>
              <div className="modal-stack-tags">
                {details?.stack?.map((s, i) => <span key={i} className="modal-stack-tag">{s}</span>)}
              </div>
            </div>
          </>
        );

      case 'education':
        return (
          <>
            <div className="modal-section">
              <div className="modal-section-title">🏫 Institution</div>
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{details?.institute}</p>
              {details?.degree && <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: 4 }}>{details.degree}</p>}
              {details?.cgpa && <p style={{ fontSize: '14px', marginTop: 4 }}>CGPA: <strong>{details.cgpa}</strong></p>}
              {details?.percentage && <p style={{ fontSize: '14px', marginTop: 4 }}>Score: <strong>{details.percentage}</strong></p>}
              {details?.duration && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: 4 }}>{details.duration}</p>}
              {details?.year && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: 4 }}>Year: {details.year}</p>}
            </div>
            {details?.coursework && (
              <div className="modal-section">
                <div className="modal-section-title">📚 Coursework</div>
                <div className="modal-stack-tags">
                  {details.coursework.map((c, i) => <span key={i} className="modal-stack-tag">{c}</span>)}
                </div>
              </div>
            )}
          </>
        );

      case 'achievements':
        return (
          <>
            <div className="modal-section">
              {details?.platform && <p style={{ fontSize: '14px' }}>Platform: <strong>{details.platform}</strong></p>}
              {details?.rating && <p style={{ fontSize: '14px', marginTop: 4 }}>Rating: <strong style={{ color: 'var(--accent)' }}>{details.rating}</strong></p>}
              {details?.codechef && <p style={{ fontSize: '14px', marginTop: 4 }}>CodeChef: <strong>{details.codechef}</strong></p>}
              {details?.problems && <p style={{ fontSize: '14px', marginTop: 4 }}>Problems: <strong>{details.problems}</strong></p>}
              {details?.event && <p style={{ fontSize: '14px' }}>Event: <strong>{details.event}</strong></p>}
              {details?.role && <p style={{ fontSize: '14px', marginTop: 4 }}>Role: <strong>{details.role}</strong></p>}
              {details?.certification && <p style={{ fontSize: '14px' }}>Certification: <strong>{details.certification}</strong></p>}
              {details?.issuer && <p style={{ fontSize: '14px', marginTop: 4 }}>Issuer: {details.issuer}</p>}
            </div>
            {details?.link && (
              <div className="modal-links">
                <a href={details.link} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-primary">View Profile ⚡</a>
              </div>
            )}
          </>
        );

      case 'contact':
        return (
          <>
            <div className="modal-section">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '14px' }}>
                <div>📧 <a href={`mailto:${details?.email}`} style={{ color: 'var(--text-link)' }}>{details?.email}</a></div>
                <div>📞 {details?.phone}</div>
                <div>📍 {details?.location}</div>
              </div>
            </div>
            <div className="modal-links">
              <a href={details?.linkedin} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-primary">💼 LinkedIn</a>
              <a href={details?.github} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-secondary">🐙 GitHub</a>
              <a href={`mailto:${details?.email}`} className="modal-link-btn modal-link-secondary">📧 Email</a>
              <a href={details?.resume} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-secondary">📄 Resume</a>
            </div>
          </>
        );

      default:
        return <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{description}</p>;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="modal-url">portfolio.dev › {url.replace('portfolio.dev/', '')}</div>
            <div className="modal-title">{title}</div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{renderDetails()}</div>
      </div>
    </div>
  );
}
