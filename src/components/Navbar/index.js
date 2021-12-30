import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import {
  Nav, 
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)

  },[]);

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (

    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Clyde</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='About' 
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Project Experience</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Discover'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}

                    >Work Experience</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Services'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Sign Up'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Qualifications</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  );
    
  
};

export default Navbar;
