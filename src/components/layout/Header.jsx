export default function Header({ currentTab, onTabChange }) {
    return (
        <header className="main-header">
            <div className="header-container">
                <div className="brand">
                    <span className="brand-icon">🏢</span>
                    <span className="brand-title">Гуртожиток №1</span>
                </div>
                <nav className="main-nav">
                    <button
                        className={`nav-link ${currentTab === 'catalog' ? 'active' : ''}`}
                        onClick={() => onTabChange('catalog')}
                    >
                        Каталог кімнат
                    </button>
                    <button
                        className={`nav-link ${currentTab === 'request' ? 'active' : ''}`}
                        onClick={() => onTabChange('request')}
                    >
                        Подати заявку
                    </button>
                </nav>
            </div>
        </header>
    );
}
