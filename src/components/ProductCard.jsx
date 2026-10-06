// src/components/ProductCard.jsx 
export default function ProductCard({ item }) {
    return (
        <article className="room-card">
            <h3>{item.name}</h3>

            <p>
                <strong>Тип:</strong> {item.type}
            </p>

            <p>
                <strong>Вартість:</strong> {item.price} грн/місяць
            </p>

            <p>
                <strong>Статус:</strong> {item.statusLabel}
            </p>

            <p>{item.description}</p>
        </article>
    );
}