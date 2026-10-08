import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import RequestPreviewPage from './pages/RequestPreviewPage.jsx';
import RoomSelectionProvider from './providers/RoomSelectionProvider.jsx';
import { roomItems } from './data/items.js';

export default function App() {
    const [currentTab, setCurrentTab] = useState('catalog');

    return (
        <RoomSelectionProvider items={roomItems}>
            <div className="app-layout">
                <Header currentTab={currentTab} onTabChange={setCurrentTab} />

                <main className="app-content">
                    {currentTab === 'catalog' ? (
                        <HomePage
                            items={roomItems}
                            onNavigateToRequest={() => setCurrentTab('request')}
                        />
                    ) : (
                        <RequestPreviewPage />
                    )}
                </main>

                <footer className="main-footer">
                    <p>© 2026 Студентський гуртожиток №1 ІФНТУНГ. Усі права захищено.</p>
                </footer>
            </div>
        </RoomSelectionProvider>
    );
}