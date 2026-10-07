export default function EmptyState({
    title = 'Дані відсутні',
    message = 'Наразі немає інформації для відображення.',
    actionButton = null
}) {
    return (
        <div className="empty-state">
            <div className="empty-icon">📂</div>
            <h3 className="empty-title">{title}</h3>
            <p className="empty-message">{message}</p>
            {actionButton && <div className="empty-action">{actionButton}</div>}
        </div>
    );
}
