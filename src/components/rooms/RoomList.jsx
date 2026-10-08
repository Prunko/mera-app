import RoomCard from './RoomCard';

export default function RoomList({ items = [], selectedId, onSelectRoom }) {
    if (items.length === 0) {
        return <p className="empty-msg">За вашим запитом кімнат не знайдено.</p>;
    }

    return (
        <div className="room-grid">
            {items.map((room) => (
                <RoomCard
                    key={room.id}
                    item={room}
                    isSelected={room.id === selectedId}
                    onSelect={onSelectRoom}
                />
            ))}
        </div>
    );
}