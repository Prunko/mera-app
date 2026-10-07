import Section from '../components/layout/Section';
import FormField from '../components/common/FormField';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';

export default function RequestPreviewPage({ selectedRoom, onBackToCatalog }) {
    return (
        <main className="page-container">
            <Section
                title="Оформлення заявки на поселення"
                description="Заповніть персональні дані студентського квитка для бронювання місця."
            >
                <div className="selected-room-summary">
                    <h4>Обрана кімната:</h4>
                    {selectedRoom ? (
                        <div className="summary-card">
                            <span className="summary-name">{selectedRoom.name}</span>
                            <span className="summary-price">{selectedRoom.price} грн/міс</span>
                            <StatusBadge status={selectedRoom.status} label={selectedRoom.statusLabel} />
                        </div>
                    ) : (
                        <p className="no-selection-text">Кімнату не обрано. Заявка буде загальною.</p>
                    )}
                </div>

                <form className="request-form" onSubmit={(e) => e.preventDefault()}>
                    <FormField label="ПІБ Студента" htmlFor="fullName" required>
                        <input
                            type="text"
                            id="fullName"
                            className="form-input"
                            placeholder="Штокал Вадим Ігорович"
                        />
                    </FormField>

                    <FormField label="Факультет / Інститут" htmlFor="faculty" required>
                        <input
                            type="text"
                            id="faculty"
                            className="form-input"
                            placeholder="Інститут інформаційних технологій"
                        />
                    </FormField>

                    <FormField label="Курс" htmlFor="course" required>
                        <select id="course" className="form-select">
                            <option value="1">1 курс</option>
                            <option value="2">2 курс</option>
                            <option value="3">3 курс</option>
                            <option value="4">4 курс</option>
                        </select>
                    </FormField>

                    <FormField label="Контактний телефон" htmlFor="phone" required>
                        <input
                            type="tel"
                            id="phone"
                            className="form-input"
                            placeholder="+380 (97) 000-00-00"
                        />
                    </FormField>

                    <div className="form-actions">
                        <Button variant="primary" type="submit">
                            Надіслати заявку
                        </Button>
                        <Button variant="outline" onClick={onBackToCatalog}>
                            Повернутися до каталогу
                        </Button>
                    </div>
                </form>
            </Section>
        </main>
    );
}
