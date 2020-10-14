import React from 'react';
import styles from './HeroSection.module.css';
import {HashLink} from 'react-router-hash-link';

const HeroSection = () => {
    return (
        <div className = {styles.hero} id = 'home'>
            <div className = {styles.container}>
                <div className = {styles.paragraph}>
                    <h1>Good bread for a good day.</h1>
                    <button className = {styles.button}><HashLink to = '#about'>Find out more</HashLink></button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;