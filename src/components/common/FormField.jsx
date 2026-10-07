export default function FormField({ label, htmlFor, error, children, required = false }) {
    return (
        <div className="form-field">
            {label && (
                <label htmlFor={htmlFor} className="form-label">
                    {label} {required && <span className="required-star">*</span>}
                </label>
            )}
            {children}
            {error && <span className="form-error-text">{error}</span>}
        </div>
    );
}
