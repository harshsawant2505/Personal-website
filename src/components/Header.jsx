import React, { useRef } from "react";
import { FaTimes,FaBars } from "react-icons/fa";

function Header(){



    const navRef = useRef();

    const showNavBar = () => {
            navRef.current.classList.toggle("res_nav")
    }

    return(
        <div className="header">
            <a href="#"><h2>Portfolio Website</h2></a>
        
            <nav ref={navRef}> 
                
                
                   <a href="/"> <li>home</li>  </a>
                   <a href="/contact"> <li>about</li></a>
                   <a href="/skills"> <li>skills</li></a>
                   <a href="/contact">  <li>contact</li></a>
                   <button className= "nav-btn nav-close-btn" onClick={showNavBar}><FaTimes /></button>
                    
                   
            </nav>
            <button className= "nav-btn nav-open-btn" onClick={showNavBar}><FaBars /></button>

        </div>
    );

}

export default Header;