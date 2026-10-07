export default function Section({ title, description, children, className = '' }) {
    return (
        <section className={`page-section ${className}`.trim()}>
            {(title || description) && (
                <header className="section-header">
                    {title && <h2 className="section-title">{title}</h2>}
                    {description && <p className="section-description">{description}</p>}
                </header>
            )}
            <div className="section-content">
                {children}
            </div>
        </section>
    );
}
