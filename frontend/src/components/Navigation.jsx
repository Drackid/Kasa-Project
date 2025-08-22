import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="nav-menu">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation