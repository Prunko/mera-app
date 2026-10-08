import FormField from '../common/FormField';
import Button from '../ui/Button';

export default function RoomFilters({
    query,
    availableOnly,
    onQueryChange,
    onAvailableOnlyChange,
    onReset,
}) {
    return (
        <div className="catalog-filters">
            <FormField label="Пошук кімнати" htmlFor="room-search">
                <input
                    id="room-search"
                    type="text"
                    className="form-input"
                    placeholder="Введіть номер або тип..."
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                />
            </FormField>

            <label className="checkbox-field">
                <input
                    type="checkbox"
                    checked={availableOnly}
                    onChange={(e) => onAvailableOnlyChange(e.target.checked)}
                />
                <span>Показувати лише вільні кімнати</span>
            </label>

            <Button variant="outline" onClick={onReset}>
                Скинути фільтри
            </Button>
        </div>
    );
}
