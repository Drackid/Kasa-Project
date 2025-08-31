import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import ApartmentDropdownDemo from './pages/ApartmentDropdownDemo'
import './App.css'
import ComponentsTest from './pages/ComponentsTest'
import AccommodationDetail from './pages/AccommodationDetail'

function App() {
    return (
        <BrowserRouter>
            {/* Notre header de navigation */}
            <Navigation />
            
            {/* Le contenu principal */}
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/apartment-dropdown" element={<ApartmentDropdownDemo />} />
                    <Route path="/components-test" element={<ComponentsTest />} />
                    <Route path="/accommodation/:id" element={<AccommodationDetail />} />
                    {/* On peut ajouter d'autres routes plus tard ! */}
                </Routes>
            </main>

            {/* Footer selon Figma */}
            <Footer />
        </BrowserRouter>
    )
}

export default App