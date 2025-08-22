import '../styles/Home.css'  // J'importe mon fichier CSS

function Home() {
    return (
        <div className="home-page">
            <h1>Bienvenue chez Kasa</h1>
            <p>Trouvez le logement de vos rêves parmi notre sélection d'appartements de qualité.</p>
            
            {/* Ma première section avec des appartements */}
            <div className="featured-section">
                <h2>Nos derniers logements</h2>
                <div className="apartments-list">
                    {/* Je crée une carte d'appartement */}
                    <div className="apartment-card">
                        <div className="apartment-image"></div>
                        <h3>Bel appartement Paris 11e</h3>
                        <p>À partir de 150€/nuit</p>
                    </div>
                    {/* Je copie-colle pour un deuxième appartement */}
                    <div className="apartment-card">
                        <div className="apartment-image"></div>
                        <h3>Studio cosy Montmartre</h3>
                        <p>À partir de 95€/nuit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home