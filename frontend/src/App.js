import React,{useEffect, useState} from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import axios from "axios";




function App() {

  const [backendData,setbackendData] =useState("");

  const getData = async()=>{
    const response = await axios.get("http://192.168.1.4:5500/");
    setbackendData(response.data);
  }


  




  

  return (
    <div>
      
      <Header />
        <Main user = {backendData}/> 
       <Skills />
      <Footer />  
    </div>
  );
}

export default App;
