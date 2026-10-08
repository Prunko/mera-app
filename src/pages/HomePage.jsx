import Section from '../components/layout/Section';
import RoomList from '../components/rooms/RoomList';
import { roomItems } from '../data/items';

export default function HomePage({ onSelectRoom }) {
    return (
        <main className="page-container">
            <Section
                title="Студентський гуртожиток №1"
                description="Комфортне та доступне проживання для студентів."
            >
                <div className="info-box">
                    <h3>ℹ️ Важлива інформація</h3>
                    <p>Поселення здійснюється відповідно до поданих заявок.</p>
                </div>
            </Section>

            <Section
                title="Доступні кімнати"
                description="Актуальний перелік кімнат гуртожитку та їхній статус поселення."
            >
                <RoomList rooms={roomItems} onSelectRoom={onSelectRoom} />
            </Section>
        </main>
    );
}