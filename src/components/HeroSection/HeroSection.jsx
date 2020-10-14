import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className = {styles.hero} id = 'home'>
            <div className = {styles.container}>
                <div className = {styles.paragraph}>
                    <h1>Good bread for a good day.</h1>
                    <p>Even though we are constantly faced with the rush of modern life, we can still experience precious moments in which we feel as if the time stopped. These moments are dedicated to small everyday things, such as enjoying the smell and taste of freshly baked bread. </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;