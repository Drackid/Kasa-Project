import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../styles/Navigation.css'

function Navigation() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo selon Figma */}
                <div className="header-logo">
                    <Logo width={120} height={40} />
                </div>
                
                {/* Navigation selon Figma */}
                <nav className="header-nav">
                    <Link to="/" className="nav-link">Accueil</Link>
                    <Link to="/about" className="nav-link">A Propos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navigation