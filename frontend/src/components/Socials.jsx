import React from "react";
import { SocialIcon } from "react-social-icons";

import { isMobile } from "./main";

function Socials() {
  return (
    <div className="socials-container">
      {isMobile?null:<p style={{fontSize: "1rem"}}>Let's connect: </p>}
      
      <SocialIcon style={{width: "40px", height: "40px"}} bgColor="white" fgColor="black" className="socials-icon" url="https://github.com/harshsawant2505" />
      <SocialIcon style={{width: "40px", height: "40px"}} bgColor="white" fgColor="black" className="socials-icon" url="https://twitter.com/HarshSawan70605" />
      <SocialIcon style={{width: "40px", height: "40px"}} bgColor="white" fgColor="black" className="socials-icon" url="https://www.instagram.com/its_harshsaw" />
      <SocialIcon style={{width: "40px", height: "40px"}} bgColor="white" fgColor="black" className="socials-icon" url="whatsapp" href="https://wa.me/7350567389" />
    </div>
  );
}

export default Socials;
