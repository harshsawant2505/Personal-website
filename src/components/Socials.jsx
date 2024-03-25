import React from "react";
import { SocialIcon } from "react-social-icons";
import './styles/social.css'

function Socials() {
  return (
    <div className="socials-container">
      <SocialIcon style={{width: "40px", height: "40px"}} className="socials-icon" url="https://github.com/harshsawant2505" />
      <SocialIcon style={{width: "40px", height: "40px"}} className="socials-icon" url="https://twitter.com/HarshSawan70605" />
      <SocialIcon style={{width: "40px", height: "40px"}}className="socials-icon" url="https://www.instagram.com/its_harshsaw" />
      <SocialIcon style={{width: "40px", height: "40px"}} className="socials-icon" url="whatsapp" href="https://wa.me/7350567389" />
    </div>
  );
}

export default Socials;
