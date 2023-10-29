import './App.css';
import {useEffect,useState} from "react"
import "./loader.css"
import Introsec from "./introPage/intro_section.js"
import About from "./about_sec/about.js"
import ProjectSec from "./projects/projects.js"
import ContactMe from "./contact/contact.js"
function App() {
  const [state,setState]=useState(true);

  useEffect (()=>{

    setTimeout(() =>{setState(false)},3000)

  },[])

  if(state)
  {return <div id ="loader_container"><div id="loader"></div></div>}

  return (
    <div className="App">

       <Introsec/>
        <About/>
        <ProjectSec/>
        <ContactMe/>
    </div>
  );
}

export default App;
