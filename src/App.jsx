import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import RequestPreviewPage from './pages/RequestPreviewPage.jsx';

export default function App() {
    const [currentTab, setCurrentTab] = useState('catalog');
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleSelectRoom = (room) => {
        setSelectedRoom(room);
        setCurrentTab('request'); 
    };

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    return (
        <div className="app-layout">
            <Header currentTab={currentTab} onTabChange={handleTabChange} />

            <main className="app-content">
                {currentTab === 'catalog' ? (
                    <HomePage onSelectRoom={handleSelectRoom} />
                ) : (
                    <RequestPreviewPage
                        selectedRoom={selectedRoom}
                        onBackToCatalog={() => setCurrentTab('catalog')}
                    />
                )}
            </main>

            <footer className="main-footer">
                <p>© 2026 Студентський гуртожиток №1 ІФНТУНГ. Усі права захищено.</p>
            </footer>
        </div>
    );
}