import React from 'react';
import styles from './Feature.module.css';

const Feature = () => {
    return (
        <section className = {styles.feature} id = 'feature' >
            <div className = {styles.container}>
                <div className = {styles.featureParagraph}>
                    <h2>Traditions</h2>
                    <p>Our bread and pastry are made according to the authenticated recipe with local ingredients and preparation that includes a lot of effort and manual work of our diligent bakers. In addition to that, we also use the traditional fired clay ovens which give our products a unique taste which we all remember from our childhood. And only by respecting the knowledge and experience of the former generations we can make bread that would make our ancestors proud.</p>
                </div>
                <div className = {styles.image}></div>
            </div>
        </section>
    )
}

export default Feature;