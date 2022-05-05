import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-scroll/modules';
import { useState } from 'react';

const Nav = () => {
  const [state, setState] = React.useState(true);
  const [nav,setNav]=useState(false)
  const handleClick = ()=> setNav(!nav)
  return (
    <nav className="navbar">
        
        
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img className="nav-1" src="/images/logo.jpg" alt="logo" />
            </div>
        
          </ul>
         
          
          {state ? (
            <ul className="navbar__right">

                
            <li>
     <Link onClick={handleClick} to="header" smooth={true} duration={500}>
          HOME
        </Link>
     </li>

     <li>
     <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          ABOUT
        </Link>
     </li>
     <li>
     <Link onClick={handleClick} to="services" smooth={true} duration={500}>
          SKILLS
        </Link>
     </li>
     {/* <li>
     <Link  to="work" smooth={true} duration={500}>
          Work
        </Link>
     </li> */}
     <li>
     <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
         CONTACT
        </Link>
     </li>

               
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
      
        <FaAlignJustify />
        
      </div>
    </nav>
  );
};

export default Nav;
// import React from 'react';
// import {ReactNavbar} from "overlay-navbar";
// import logo from "../../Images/logo.jpg";
// import {FaUserAlt} from "react-icons/fa";




// const Nav = () => {

// return<ReactNavbar 
// navColor1="white" 
// navColor2="hsl(219, 48%, 8%)"
// burgerColor="hsl(250, 100%, 75%)"
// burgerColorHover="hsl(250, 100%, 75%)"
// logo={logo}
// nav2justifyContent="space-around"
// nav3justifyContent="space-around"
// link1Text="Home"
// link2Text="About"
// link3Text="Projects"
// link4Text="Contact"
// link1Url="/"
// link2Url="/About"
// link3Url="/Services"
// link4Url="/Contact"
// link1ColorHover="white"
// link1Color="HSL(250, 100%, 75%)"
// link1Size="1.5rem"
// link1Padding="3vmax"

// profileIcon={true}
// ProfileIconElement={FaUserAlt}
// profileIconColor="HSL(250, 100%, 75%)"
// profileIconColorHover="white"
// />
// };

// export default Nav;