import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import Feature from './components/Feature/Feature';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Story from './components/Story/Story';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <React.Fragment>
                <Menu />
                <HeroSection />
                <About />
                <Feature />
                <Story />
                <Contact />
                <Footer />
            </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App;