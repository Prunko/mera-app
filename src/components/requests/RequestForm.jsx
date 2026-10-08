import FormField from '../common/FormField';
import Button from '../ui/Button';

export default function RequestForm({ draft, onPurposeChange, onNeedsHelpChange, onReset }) {
    return (
        <form className="request-form" onSubmit={(e) => e.preventDefault()}>
            <FormField label="Примітка / Бажані сусіди" htmlFor="purpose">
                <textarea
                    id="purpose"
                    className="form-input"
                    rows={3}
                    value={draft.purpose}
                    onChange={(e) => onPurposeChange(e.target.value)}
                />
            </FormField>

            <label className="checkbox-field">
                <input
                    type="checkbox"
                    checked={draft.needsHelp}
                    onChange={(e) => onNeedsHelpChange(e.target.checked)}
                />
                <span>Потрібен пільговий супровід / допомога</span>
            </label>

            <Button variant="outline" type="button" onClick={onReset}>
                Очистити форму
            </Button>
        </form>
    );
}
