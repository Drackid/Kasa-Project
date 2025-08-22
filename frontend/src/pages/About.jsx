import '../styles/About.css'

function About() {
    return (
        <div className="about-page">
            <h1>À propos de nous</h1>
            <p>Je suis en train d'apprendre React !</p>
            
            {/* Une petite liste pour pratiquer */}
            <h2>Ce que j'ai appris :</h2>
            <ul>
                <li>Les composants React</li>
                <li>React Router</li>
                <li>Le CSS en React</li>
            </ul>
        </div>
    )
}

export default About