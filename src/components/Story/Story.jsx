import React from 'react';
import styles from './Story.module.css';


const Story = () => {
    return(
        <section className = {styles.story} id = 'story'>
            <div className = {styles.container}>
                <div className = {styles.image}></div>
                <div  className = {styles.storyParagraph}>
                    <h2>Our story</h2>
                    <p>In order to know where you are headed, you need to know where you came from. We went a long way from a small family business to a contemporary company known for successfully linking tradition with contemporary baking trends. Everything that we have accomplished and that we yet have to accomplish, is thanks to our guiding principle - deep and true passion for baking.</p>
                </div>
            </div>
        </section>
    )
}

export default Story;
