import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <div className='min-h-screen' id='home'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;