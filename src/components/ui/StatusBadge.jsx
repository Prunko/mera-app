export default function StatusBadge({ status, label }) {
    const isAvailable = status === 'available';
    const badgeClass = isAvailable ? 'badge-available' : 'badge-soldout';
    const displayLabel = label || (isAvailable ? 'Є вільні місця' : 'Немає місць');

    return (
        <span className={`status-badge ${badgeClass}`}>
            <span className="badge-dot"></span>
            {displayLabel}
        </span>
    );
}
