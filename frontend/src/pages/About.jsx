import styles from './About.module.css'

function About() {
    return (
        <div className={styles.aboutPage}>
            <h1>À propos de Kasa</h1>
            <p>Kasa est une entreprise de location d'appartements entre particuliers depuis plus de 10 ans.</p>
            
            <div className={styles.aboutSection}>
                <h2>Nos valeurs</h2>
                <ul>
                    <li>
                        <h3>Fiabilité</h3>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
                    </li>
                    <li>
                        <h3>Respect</h3>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa.</p>
                    </li>
                    <li>
                        <h3>Service</h3>
                        <p>Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About