import React, { useState } from "react";

function Header(){

    const [name, setName] = useState("");
    const [status,setStatus] = useState("")
    const clients = ["harsh", "ved"];



    return(
        <div className="header">

        
            <nav> 
                <a href="#"><h2>Porfolio Website</h2></a>
                <ul>
                   <a href=""> <li>home</li>  </a>
                   <a href=""> <li>about</li></a>
                   <a href="">  <li>contact</li></a>
                    
                    <input type="text" onChange={(e)=>{

                        setName(e.target.value)

                    }}></input>
                    {status != ""?<li>{status}</li>:null}

                   <button onClick={()=>{
                        if(name == ""){
                            setStatus("");
                        }else if(clients.includes(name) ){
                            setStatus("found")
                        }else{
                            setStatus("not found")
                        }

                   }}><i class="fa-solid fa-magnifying-glass"></i></button> 
                    
                </ul>
            </nav>

        </div>
    );

}

export default Header;