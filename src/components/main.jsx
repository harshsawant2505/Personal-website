import React,{useState} from "react";
import Curly from "./curly";
import {useTypewriter, Cursor} from "react-simple-typewriter"


 

function Main(){
        const [text] =useTypewriter({
            words: ["Web Developer", "Video Editor","Graphic Designer"],
            loop: {}
        })

 
    return(
        <div className="main">
                    <div className="left-main">   
                        <div className="intro">
                        <h1> Hey this is, <br /> Harsh Sawant </h1>
                        </div>

                        <div className="typing">
                        <p>I am a <span>{text}</span><Cursor /></p>
                        
                        </div>
                        
                    </div>


                    <div className="outer-blob">
                            <div className="blob"> </div>
                    </div>
        </div>
        

    );      
}

export default Main;