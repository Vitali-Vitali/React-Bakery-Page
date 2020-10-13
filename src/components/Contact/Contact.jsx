import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styles from './Contact.module.css';

const Contact = (props) => {
    return ( 
        <section className = {styles.contact} id = 'contact'>
            <div className = {styles.container}>
                <div className = {styles.image}>
                    <Map className = {styles.map} google={props.google} zoom={10} style={{width:'100%', height: '100%', margin:'auto'}}/>
                </div>
            </div>
        </section>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCODpwtC7p1x4sIgP4RqM-8dnQW_QqWbjI')
   })(Contact);