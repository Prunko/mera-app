import { useState } from 'react';
import Button from '../ui/Button';

export default function RoomCard({ item, isSelected, onSelect }) {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <div className={`room-card ${isSelected ? 'is-selected' : ''}`}>
            <h3>{item.name}</h3>
            <p>Статус: <strong>{item.status === 'available' ? 'Вільна' : 'Зайнята'}</strong></p>

            <div className="card-actions">
                <Button variant="outline" onClick={() => setDetailsOpen((prev) => !prev)}>
                    {detailsOpen ? 'Сховати деталі' : 'Детальніше'}
                </Button>
                <Button
                    variant="primary"
                    disabled={item.status !== 'available'}
                    onClick={() => onSelect(item.id)}
                >
                    {isSelected ? 'Обрано' : 'Обрати для заявки'}
                </Button>
            </div>

            {detailsOpen && (
                <div className="card-details">
                    <p>{item.description}</p>
                    <p>Поверх: {item.floor} | Місць: {item.capacity}</p>
                </div>
            )}
        </div>
    );
}
