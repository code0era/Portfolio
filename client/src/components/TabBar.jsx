const TABS = [
  { id: 'all', label: 'All', icon: '🔍' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'skills', label: 'Skills', icon: '🛠️' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'contact', label: 'Contact', icon: '📞' },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <div className="tab-bar">
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-icon">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
