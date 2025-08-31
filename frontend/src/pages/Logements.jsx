import ThumbCard from '../components/ThumbCard'
import '../styles/Logements.css'

function Logements() {
    // Données des logements (comme dans ThumbCardDemo)
    const logements = [
        {
            id: 1,
            title: "Appartement cosy Paris 17e",
            location: "Ile de France - Paris 17e",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        },
        {
            id: 2,
            title: "Studio Montmartre",
            location: "Ile de France - Paris 18e",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
        },
        {
            id: 3,
            title: "Loft moderne République",
            location: "Ile de France - Paris 10e",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"
        },
        {
            id: 4,
            title: "Appartement de charme",
            location: "Ile de France - Paris 11e",
            imageUrl: null // Sans image pour tester le dégradé uniquement
        }
    ];

    return (
        <div className="logements-page">
            <h1>🏠 Nos Logements Disponibles</h1>
            <p>Découvrez notre sélection d'appartements exceptionnels</p>
            
            {/* Grille de cartes */}
            <div className="logements-grid">
                {logements.map((logement) => (
                    <ThumbCard 
                        key={logement.id}
                        title={logement.title}
                        location={logement.location}
                        imageUrl={logement.imageUrl}
                    />
                ))}
            </div>
            
            {/* Section d'information */}
            <div className="info-section">
                <h2>Comment réserver ?</h2>
                <p>Contactez-nous pour réserver votre logement de rêve !</p>
            </div>
        </div>
    )
}

export default Logements
