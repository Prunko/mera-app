export default function PageHeading({ title }) {
    return (
        <div className="page-heading" style={{ marginBottom: '1.5rem' }}>
            <h1>{title}</h1>
        </div>
    );
}