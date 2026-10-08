import { Link, useNavigate, useParams } from 'react-router';
import PageHeading from '../components/ui/PageHeading.jsx';
import useRoomSelection from '../hooks/useRoomSelection.js';
import NotFoundPage from './NotFoundPage.jsx';

export default function RoomDetailsPage({ items }) {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const { selectRoom } = useRoomSelection();

    const item = items.find((entry) => String(entry.id) === String(roomId));

    if (!item) {
        return <NotFoundPage title="Кімнату не знайдено" message={`Ідентифікатор: ${roomId}`} />;
    }

    function handlePrepareRequest() {
        selectRoom(item.id);
        navigate(`/requests/new?roomId=${item.id}`);
    }

    return (
        <div className="room-details-page">
            <PageHeading title={`Кімната ${item.name}`} />
            <div className="card">
                <p><strong>Опис:</strong> {item.description}</p>
                <button type="button" className="btn btn-primary" onClick={handlePrepareRequest}>
                    Оформити заявку
                </button>
                <Link to="/rooms" className="btn btn-outline">До каталогу</Link>
            </div>
        </div>
    );
}
