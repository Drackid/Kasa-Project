import React from 'react'
import styles from './About.module.css'
import { useEffect } from 'react'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>À propos</h1>
      <p className={styles.description}>Cette page parle de nous !</p>
    </div>
  )
}

export default About