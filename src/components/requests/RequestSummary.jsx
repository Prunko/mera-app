export default function RequestSummary({ roomName, draft = {} }) {
    const purposeText = draft?.purpose || 'Не вказано';
    const needsHelpText = draft?.needsHelp ? 'Так' : 'Ні';

    return (
        <div className="request-summary card">
            <h3>Підсумок заявки</h3>
            <p><strong>Обрана кімната:</strong> {roomName || 'Не обрано'}</p>
            <p><strong>Мета проживання:</strong> {purposeText}</p>      <p><strong>Потребує сторонньої допомоги:</strong> {needsHelpText}</p>
        </div>
    );
}