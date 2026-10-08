import { Outlet } from 'react-router';
import SiteHeader from './SiteHeader.jsx';
import RoomSelectionProvider from '../../providers/RoomSelectionProvider.jsx';

const navigationLinks = [
    { to: '/', label: 'Головна', end: true },
    { to: '/rooms', label: 'Каталог кімнат' },
    { to: '/requests', label: 'Заявки' },
];

export default function AppLayout({ items }) {
    return (
        <RoomSelectionProvider items={items}>
            <div className="app-layout">
                <SiteHeader title="Гуртожиток №1" links={navigationLinks} />
                <main className="app-content">
                    <Outlet />
                </main>
                <footer className="main-footer">
                    <p>© 2026 Студентський гуртожиток №1 ІФНТУНГ</p>
                </footer>
            </div>
        </RoomSelectionProvider>
    );
}