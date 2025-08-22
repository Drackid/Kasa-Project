import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            {/* Notre menu de navigation */}
            <Navigation />
            
            {/* Le contenu principal */}
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* On peut ajouter d'autres routes plus tard ! */}
                </Routes>
            </main>

            {/* Un petit footer */}
            <footer className="footer">
                <p>Mon premier site React - 2024</p>
            </footer>
        </BrowserRouter>
    )
}

export default App