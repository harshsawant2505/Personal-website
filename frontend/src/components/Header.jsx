import React, { useRef,useState } from "react";
import { FaTimes,FaBars, FaFileContract, FaMobile, FaHeart, FaHome, FaCode, FaReact } from "react-icons/fa";
import {isMobile} from "./main"

function Header(){


    
    const navRef = useRef();
    const [active,setActive] = useState(false);

    
    const showNavBar = () => {
            navRef.current.classList.toggle("res_nav");
            
            if(active === true){
                setActive(false)
            }else{setActive(true)};
            
            
    }
 

    return(
        <div className="header">
            <a href="#"><h2>Portfolio Website</h2></a>
        
            <nav ref={navRef}> 
                
                
                   <a className={active?"res_but1": null}  href="/"> {isMobile?<FaHome/>: <FaHome/>}<li>home</li>  </a>
                   <a className={active?"res_but2": null}  href="/about"> {isMobile?<FaHeart/>: <FaHeart/>} <li>about</li></a>
                   <a className={active?"res_but3": null}  href="/skills">{isMobile?<FaReact/>: <FaReact/>} <li>skills</li></a>
                   <a className={active?"res_but4": null} href="/contact"> {isMobile?<FaMobile/>: <FaMobile/>} <li>contact</li></a>
                   <button className= "nav-btn nav-close-btn" onClick={showNavBar}><FaTimes /></button>
                    
                   
            </nav>
            <button className= "nav-btn nav-open-btn" onClick={showNavBar}><FaBars /></button>

        </div>
    );

}

export default Header;