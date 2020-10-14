import React from 'react';
import styles from './Menu.module.css';
// import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import { ReactComponent } from '*.svg';




class Menu extends React.Component {
    state = {
        mainNav: styles.mainnav
    }
    
render() {
    
    let mainNavDefault = styles.mainnav;
    let active = styles.active;
    let navToggled = mainNavDefault + ' ' + active;

    this.toggleNavBarHandler = () => {
        if (this.state.mainNav.includes("active")) {
            this.setState({
                mainNav : mainNavDefault 
            })
        }
        else {
            this.setState({
                mainNav: navToggled
            })
        }
    }

    this.navDefaultStyle = () => {
        this.setState({
            mainNav: mainNavDefault
        })
    }

    return (
        <div className = {styles.menu}>
            <div className = {styles.container}>
                <nav className={styles.navbar}>
                    <span className={styles.navbartoggle} id="js-navbar-toggle">
                        <div onClick={this.toggleNavBarHandler} style={{width: '40px', padding: '5px'}}>
                            <div style={{height: '2px', backgroundColor:'pink', margin: '7px 0'}}></div>
                            <div style={{height: '2px', backgroundColor:'pink', margin: '7px 0'}}></div>
                            <div style={{height: '2px', backgroundColor:'pink', margin: '7px 0'}}></div>
                        </div>
                    </span>
                    <a href="/" className={styles.logo}>Sweet bakery</a>
                    <ul className={this.state.mainNav} id="js-menu">
                        <li>
                            <HashLink to = '#home'  className = {styles.navlinks} onClick = {this.navDefaultStyle}>Home</HashLink>
                        </li>
                        <li>
                            <HashLink to = '#about'  className = {styles.navlinks} onClick = {this.navDefaultStyle}>About</HashLink>
                        </li>
                        <li>
                            <HashLink to = '#feature'  className = {styles.navlinks} onClick = {this.navDefaultStyle}>Traditions</HashLink>
                        </li>
                        <li>
                            <HashLink to = '#story'  className = {styles.navlinks} onClick = {this.navDefaultStyle}>Story</HashLink>
                        </li>
                        <li>
                            <HashLink to = '#contact'  className = {styles.navlinks} onClick = {this.navDefaultStyle}>Contact</HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
}

    export default Menu;