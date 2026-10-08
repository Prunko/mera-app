export default function RequestSummary({ roomName, draft }) {
    return (
        <div className="request-summary">
            <h4>Чернетка вашої заявки</h4>
            <p><strong>Обрана кімната:</strong> {roomName}</p>
            <p><strong>Примітка:</strong> {draft.purpose.trim() || '—'}</p>
            <p><strong>Супровід:</strong> {draft.needsHelp ? 'Так' : 'Ні'}</p>
        </div>
    );
}
