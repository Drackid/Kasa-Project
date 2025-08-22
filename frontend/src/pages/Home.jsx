import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.homePage}>
            <h1>Bienvenue chez Kasa</h1>
            <p>Trouvez le logement de vos rêves parmi notre sélection d'appartements de qualité.</p>
            
            <div className={styles.featuredSection}>
                <h2>Nos derniers logements</h2>
                <div className={styles.placeholderApartments}>
                    {/* On simulera les appartements avec des placeholders pour l'instant */}
                    <div className={styles.apartmentCard}>
                        <div className={styles.apartmentImage}></div>
                        <h3>Bel appartement Paris 11e</h3>
                        <p>À partir de 150€/nuit</p>
                    </div>
                    <div className={styles.apartmentCard}>
                        <div className={styles.apartmentImage}></div>
                        <h3>Studio cosy Montmartre</h3>
                        <p>À partir de 95€/nuit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home