import React,{useState} from "react";

import {useTypewriter, Cursor} from "react-simple-typewriter"
import Socials from "./Socials"
import { useMediaQuery } from 'react-responsive';


 

function Main(){
        const [text] =useTypewriter({
            words: ["Web Developer", "Video Editor","Graphic Designer"],
            loop: {}
        })
        const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
   

 
    return(
        <div className="main">
                    <div className="left-main">   
                        <div className="intro">
                        <h1> Hey this is, <br /> Harsh Sawant </h1>
                        </div>

                        <div className="typing">
                        <p>I am a <span>{text}</span><Cursor /></p>
                        {!isMobile?   <Socials className="social-tag"/> : null}
                        
                        
                        </div>
                       
                        
                    </div>


                    <div className="outer-blob">
                            <div className="blob"> </div>
                    </div>
                    {isMobile?   <Socials className="social-tag"/> : null}
                    
                   
        </div>
        

    );      
}

export default Main;