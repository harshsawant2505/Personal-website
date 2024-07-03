import React from "react";

function Curly({type}){

    if(type == "left"){
        return (<i class="fa-solid fa-chevron-left"></i>);
    }else if("right"){
        return (<i class="fa-solid fa-chevron-right"></i>);
    }

  
   
}

export default Curly;