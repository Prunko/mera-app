import StatusBadge from '../ui/StatusBadge';
import Button from '../ui/Button';

export default function RoomCard({ item, onSelect }) {
    const isAvailable = item.status === 'available';

    return (
        <article className="room-card">
            <div className="room-card-header">
                <h3 className="room-title">{item.name}</h3>
                <StatusBadge status={item.status} label={item.statusLabel} />
            </div>

            <div className="room-details">
                <p className="room-info">
                    <strong>Тип:</strong> {item.type}
                </p>
                <p className="room-price">
                    <strong>Вартість:</strong> <span>{item.price} грн/міс</span>
                </p>
                <p className="room-description">{item.description}</p>
            </div>

            <div className="room-card-footer">
                <Button
                    variant={isAvailable ? 'primary' : 'secondary'}
                    disabled={!isAvailable}
                    onClick={() => onSelect && onSelect(item)}
                >
                    {isAvailable ? 'Обрати для поселення' : 'Месць немає'}
                </Button>
            </div>
        </article>
    );
}
