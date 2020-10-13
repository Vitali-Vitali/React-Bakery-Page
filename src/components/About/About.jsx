import React from 'react';
import styles from './About.module.css'

const About = () => {
    return (
        <section className = {styles.about} id = 'about' >
            <div className = {styles.container}>
                <div className = {styles.image}></div>
                <div className = {styles.aboutParagraph}>
                    <h2>About us</h2>
                    <p>Even today, we still cherish the recipes and methods of bread baking which our founder Franjo Mikelec conceived more than 50 years ago and we constantly upgrade them according to new knowledge on nutrition and customer demand. In a specially arranged small bakery we knead and bake samples of bread and pastry in order to improve some of the existing products or to develop completely new ones. This is how we came to produce our unique and innovative products such as whole grain delicacy bread, bacon rolls, hot sandwiches...</p>
                </div>
            </div>
        </section>
    )
}

export default About;