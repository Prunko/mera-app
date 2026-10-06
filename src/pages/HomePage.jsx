// src/pages/HomePage.jsx
import ProductCard from '../components/ProductCard';
import { roomItems } from '../data/items';

export default function HomePage() {
    return (
        <main>
            <h1>Студентський гуртожиток №1</h1>

            <p>
                Комфортне та доступне проживання для студентів.
                Обирайте кімнату та подавайте заявку онлайн!
            </p>

            <h2>Доступні кімнати</h2>

            {roomItems.length === 0 ? (
                <p>Наразі немає доступних кімнат для відображення.</p>
            ) : (
                <div className="rooms-grid">
                    {roomItems.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </main>
    );
}