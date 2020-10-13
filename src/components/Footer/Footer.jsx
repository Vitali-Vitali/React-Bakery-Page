import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className = {styles.container}>
        <footer className = {styles.footer}>
            <div className = {styles.container}>
            <div className={styles.footer__addr}>

    <address> 
      <a className={styles.footer__btn} href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className={styles.footer__nav}>
    <li className={styles.nav__item}>
      <h2 className={styles.nav__title}>Media</h2>

      <ul className={styles.nav__ul}>
        <li>
          <a href="/">Instagram</a>
        </li>

        <li>
          <a href="/">Youtube</a>
        </li>
            
        <li>
          <a href="/">Twitter</a>
        </li>
      </ul>
    </li>
    
    <li className={styles.nav__item}>
      <h2 className={styles.nav__title}>Our stores</h2>
      
      <ul className={styles.nav__ul}>
        <li>
          <a href="/">4900 Fulton St</a>
        </li>
        
        <li>
          <a href="/">345 California Center</a>
        </li>
        
        <li>
          <a href="/">425 North Point St</a>
        </li>
      </ul>
    </li>
    
    <li className={styles.nav__item}>
      <h2 className={styles.nav__title}>Legal</h2>
      
      <ul className={styles.nav__ul}>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        
        <li>
          <a href="/">Terms of Use</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className={styles.legal}>
    <p>&copy; 2020 Vitalii. All rights reserved.</p>

  </div>
 
            </div>
        </footer>
        </div>
    )
}

export default Footer;