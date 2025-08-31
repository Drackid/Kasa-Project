import { useState, useEffect } from 'react'
import '../styles/Home.css'
import ThumbCard from '../components/ThumbCard'
import EquipmentDropdown from '../components/EquipmentDropdown'
import Logo from '../components/Logo'

function ComponentsTest() {
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
        return <div className="home-page"><h1>Chargement...</h1></div>
    }

    return (
        <div className="home-page">
            <div className="logo-section">
                <Logo width={150} height={50} />
                <h1>Components Test avec Données Réelles</h1>
            </div>
            
            {/* Test ThumbCard avec données réelles */}
            {logements.length > 0 && (
                <div>
                    <h2>Test ThumbCard</h2>
                    <ThumbCard
                        title={logements[0].title}
                        location={logements[0].location}
                        imageUrl={logements[0].cover}
                    />
                </div>
            )}

            {/* Test EquipmentDropdown avec équipements réels */}
            {logements.length > 0 && (
                <div>
                    <h2>Test EquipmentDropdown</h2>
                    <EquipmentDropdown
                        equipments={logements[0].equipments}
                        title="Équipements de l'appartement"
                    />
                </div>
            )}

            {/* Afficher tous les logements disponibles */}
            <div>
                <h2>Logements disponibles dans la base :</h2>
                <ul>
                    {logements.map((logement, index) => (
                        <li key={logement.id || index}>
                            <strong>{logement.title}</strong> - {logement.location}
                            <br />
                            <small>Équipements : {logement.equipments?.join(', ') || 'Aucun'}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ComponentsTest