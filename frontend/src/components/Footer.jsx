    import React from 'react'
 
import { FaHeart } from 'react-icons/fa';
import Socials from './Socials';
    
    function Footer() {
      return (
        <div className='footer'>
        
        <Socials />
        <div style={{order: "100"}} className='footer-date'><p style={{order:"100"}}>© 2023-{new Date().getFullYear()} Made with <FaHeart color = "red"/> </p></div>
       
        
        <div className='nav-footer'>
            <a>Home</a>
            <a>about</a>
            <a>skills</a>
            <a>contact</a>
        </div>

        </div>
       
      )
    }
    
    export default Footer;