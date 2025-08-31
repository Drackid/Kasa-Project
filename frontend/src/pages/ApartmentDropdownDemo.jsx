import { useState, useEffect } from 'react'
import ApartmentDropdown from '../components/ApartmentDropdown'
import '../styles/ApartmentDropdownDemo.css'

function ApartmentDropdownDemo() {
    const [logements, setLogements] = useState([])
    const [loading, setLoading] = useState(true)

    // Récupérer les données depuis votre backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/properties')
                const data = await response.json()
                setLogements(data)
                setLoading(false)
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <div className="demo-page"><h1>Chargement...</h1></div>
    }

    // Utiliser les équipements du premier logement
    const sampleEquipments = logements.length > 0 ? logements[0].equipments : [
        "Climatisation",
        "Wi-Fi", 
        "Cuisine",
        "Espace de travail",
        "Fer à repasser",
        "Sèche-cheveux",
        "Cintres"
    ]

    return (
        <div className="demo-page">
            <h1>🏠 Démonstration ApartmentDropdown</h1>
            <p>Composant en taille Large (1023×52px) avec responsive automatique</p>
            
            <div className="dropdown-container">
                <ApartmentDropdown
                    equipments={sampleEquipments}
                    title="Équipements"
                />
            </div>

            {/* Informations sur le composant */}
            <div className="info-section">
                <h2>Caractéristiques du composant :</h2>
                <ul>
                    <li>🎨 <strong>Design Figma exact</strong> - Couleurs, dimensions et polices</li>
                    <li>📏 <strong>Taille par défaut</strong> - Large (1023×52px → 1023×272px)</li>
                    <li>📱 <strong>Responsive automatique</strong> - Medium (768px) et Small (480px)</li>
                    <li>🔄 <strong>États dynamiques</strong> - Fermé/ouvert avec animations</li>
                    <li>🔴 <strong>Header rouge</strong> - Couleur #FF6060 selon Figma</li>
                    <li>⚡ <strong>Données dynamiques</strong> - Équipements depuis le backend</li>
                </ul>
                
                <h3>📱 Test du responsive :</h3>
                <p>Redimensionnez votre navigateur pour voir le composant s'adapter automatiquement :</p>
                <ul>
                    <li><strong>Desktop</strong> : Large (1023px) - Police 24px</li>
                    <li><strong>Tablet</strong> : Medium (582px) - Police 18px</li>
                    <li><strong>Mobile</strong> : Small (335px) - Police 13px</li>
                </ul>
            </div>
        </div>
    )
}

export default ApartmentDropdownDemo
