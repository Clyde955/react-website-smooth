import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSections';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSections/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const home = () => {
    const [isOpen, setIsOpen]= useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer />
            
        </>
    )
}

export default home;