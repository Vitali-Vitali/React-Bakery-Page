import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className={styles.hero} id = 'home'>
            <div className={styles.container}>
                <h1>Award winning bakery</h1>
            </div>
        </div>
    )
}

export default HeroSection;