import { Route, Routes } from 'react-router';
import AppLayout from './components/layout/AppLayout.jsx';
import RequestsLayout from './components/layout/RequestsLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import RoomListPage from './pages/RoomListPage.jsx';
import RoomDetailsPage from './pages/RoomDetailsPage.jsx';
import RequestsPage from './pages/RequestsPage.jsx';
import RequestCreatePage from './pages/RequestCreatePage.jsx';
import RequestEditPage from './pages/RequestEditPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import { roomItems } from './data/items.js';
import { requests } from './data/requests.js';

export default function App() {
    return (
        <Routes>
            <Route element={<AppLayout items={roomItems} />}>
                <Route index element={<HomePage />} />

                <Route path="rooms" element={<RoomListPage items={roomItems} />} />
                <Route path="rooms/:roomId" element={<RoomDetailsPage items={roomItems} />} />

                <Route path="requests" element={<RequestsLayout />}>
                    <Route index element={<RequestsPage requests={requests} items={roomItems} />} />
                    <Route path="new" element={<RequestCreatePage items={roomItems} />} />
                    <Route path=":requestId/edit" element={<RequestEditPage requests={requests} items={roomItems} />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}