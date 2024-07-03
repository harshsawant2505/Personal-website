///importing////////////////

import React, { useRef,useState } from "react";
import { FaTimes,FaBars, FaFileContract, FaMobile, FaHeart, FaHome, FaCode, FaReact } from "react-icons/fa";
import {isMobile} from "./main"
import ElementHeader from "./ElementHeader";

//////////////////////////////

function Header(){


   

    ////// code for highlighting current location ///
    const styleHome ={
        color: "white"
    }
    const styleAbout ={
        color: "white"
    }
    const styleContact ={
        color: "white"
    }
    const styleSkills ={
        color: "white"
    }


    switch(window.location.pathname){
        case "/":
            styleHome.color = "violet"
            break;
        case "/about":
            styleAbout.color = "violet"
            break;
        case "/skills":
            styleSkills.color = "violet"
            break;
        case "/contact":
            styleContact.color = "violet"
            break;
    }
/////////////////////////////////////////////////////////

//react hooks///
    const navRef = useRef();
    const [active,setActive] = useState(false);



    ///code for toggeling res_nav class when button is clicked//////
    const showNavBar = () => {
            navRef.current.classList.toggle("res_nav");
            
            if(active === true){
                setActive(false)
            }else{setActive(true)};
            
            
    }
 ///////////////////////////////////////////////


 ////code for the header component////
    return(
        <div className="header">
            <a href="#"><h2>Portfolio Website</h2></a>
        
            <nav ref={navRef}> 
                
                    <ElementHeader classname ={active?"res_but1": null} href = "/" style = {styleHome} content = "Home"   icon = <FaHome />/>
                    <ElementHeader classname ={active?"res_but1": null} href = "/about" style = {styleAbout} content = "about"  icon = <FaHeart/> />
                    <ElementHeader classname ={active?"res_but1": null} href = "/skills" style = {styleSkills} content = "skills"  icon = <FaReact/> />
                    <ElementHeader classname ={active?"res_but1": null} href = "/contact" style = {styleContact} content = "contact"  icon = <FaMobile/> />
                   {/* <a className={active?"res_but1": null} style={styleHome}  href="/"> {isMobile?<FaHome/>: <FaHome/>}<li>home</li>  </a>
                   <a className={active?"res_but2": null} style={styleAbout}   href="/about"> {isMobile?<FaHeart/>: <FaHeart/>} <li>about</li></a>
                   <a className={active?"res_but3": null} style={styleSkills}   href="/skills">{isMobile?<FaReact/>: <FaReact/>} <li>skills</li></a>
                   <a className={active?"res_but4": null} style={styleContact}   href="/contact"> {isMobile?<FaMobile/>: <FaMobile/>} <li>contact</li></a> */}
                    <button className= "nav-btn nav-close-btn" onClick={showNavBar}><FaTimes /></button>
                    
                   
            </nav>
            <button className= "nav-btn nav-open-btn" onClick={showNavBar}><FaBars /></button>

        </div>
    );

}

export default Header; // exporting the Header component