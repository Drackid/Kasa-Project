import React from 'react'
import styles from './Home.module.css'
import { useEffect } from 'react'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Page d'accueil</h1>
      <p className={styles.welcomeText}>Bienvenue sur notre site !</p>
    </div>
  )
}

export default Home