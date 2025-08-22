import '../styles/About.css'  // Mon CSS pour la page À propos

function About() {
    return (
        <div className="about-page">
            <h1>À propos de Kasa</h1>
            <p>Kasa est une entreprise de location d'appartements entre particuliers depuis plus de 10 ans.</p>
            
            {/* La section avec nos valeurs */}
            <div className="about-section">
                <h2>Nos valeurs</h2>
                <ul>
                    {/* Première valeur */}
                    <li className="value-item">
                        <h3>Fiabilité</h3>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
                    </li>
                    {/* Deuxième valeur */}
                    <li className="value-item">
                        <h3>Respect</h3>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa.</p>
                    </li>
                    {/* Troisième valeur */}
                    <li className="value-item">
                        <h3>Service</h3>
                        <p>Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About