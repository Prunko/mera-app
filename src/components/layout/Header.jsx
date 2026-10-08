import { Link, NavLink } from 'react-router';

export default function Header({ title, links }) {
    return (
        <header className="main-header">
            <Link to="/" className="site-title-link">
                <h2 className="site-title">{title}</h2>
            </Link>
            <nav className="main-nav">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.end}
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}
