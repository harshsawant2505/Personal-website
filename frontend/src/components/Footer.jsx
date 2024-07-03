    import React from 'react'
 
import { FaHeart } from 'react-icons/fa';
import Socials from './Socials';
import ElementHeader from './ElementHeader';
    
    function Footer() {
      return (
        <div className='footer'>
        
        <Socials />
        <div style={{order: "100"}} className='footer-date'><p style={{order:"100"}}>© 2023-{new Date().getFullYear()} Made with <FaHeart color = "red"/> </p></div>
       
        
        <div className='nav-footer'>
                    <ElementHeader classname ="" href = "/" style = {{}} content = "Home"   />
                    <ElementHeader classname ="" href = "/about" style = {{}} content = "about"  />
                    <ElementHeader classname ="" href = "/skills" style ={{}}  content = "skills"  />
                    <ElementHeader classname ="" href = "/contact" style ={{}}  content = "contact"  />
        </div>

        </div>
       
      )
    }
    
    export default Footer;