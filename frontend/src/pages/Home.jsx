import '../styles/Home.css'

function Home() {
    return (
        <div className="home-page">
            <h1>Bienvenue sur notre site !</h1>
            <p>C'est ma première page React 😊</p>
            
            {/* Un peu d'interaction simple */}
            <button onClick={() => alert('Merci de votre visite !')}>
                Cliquez-moi !
            </button>
        </div>
    )
}

export default Home