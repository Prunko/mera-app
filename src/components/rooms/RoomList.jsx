import RoomCard from './RoomCard';
import EmptyState from '../common/EmptyState';
import Button from '../ui/Button';

export default function RoomList({ rooms = [], onSelectRoom, onResetFilters }) {
    if (!rooms || rooms.length === 0) {
        return (
            <EmptyState
                title="Кімнат не знайдено"
                message="За вашим запитом або у базі даних наразі немає доступних кімнат."
                actionButton={
                    onResetFilters && (
                        <Button variant="outline" onClick={onResetFilters}>
                            Скинути фільтри
                        </Button>
                    )
                }
            />
        );
    }

    return (
        <div className="rooms-grid">
            {rooms.map((room) => (
                <RoomCard key={room.id} item={room} onSelect={onSelectRoom} />
            ))}
        </div>
    );
}
