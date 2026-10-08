import { Link } from 'react-router';
import PageHeading from '../components/ui/PageHeading.jsx';

export default function NotFoundPage({
    title = '404: Сторінку не знайдено',
    message = 'Перевірте введену адресу або поверніться до каталогу.',
}) {
    return (
        <div className="not-found-container card">
            <PageHeading title={title} />
            <p>{message}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Link to="/rooms" className="btn btn-primary">Відкрити каталог</Link>
                <Link to="/" className="btn btn-outline">На головну</Link>
            </div>
        </div>
    );
}
