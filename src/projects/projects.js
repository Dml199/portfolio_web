import {useState,useEffect} from "react";
import "./projects.css"
import api from "../resources/api.svg"
import graphic_design from  "../resources/graphic-design-svgrepo-com.svg"
import microservises from "../resources/smartpack-kernel-manager.svg"
import Anim from "./anim.background.js"

let counter=true;
let counter_1=true;
let counter_2=true;

export default function Projects () {



    const [state,setState] = useState(true)
    const [state1,setState1] = useState(true)
    const [state2,setState2] = useState(true)

    function setToggleOnTimer () {
        if(counter)
        {setState(false)
        setTimeout(()=>{setState(true)},3000);counter=false ;}
        else{return}
    }
    function setToggleOnTimer_1 () {
        if(counter_1)
       { setState1(false)
        setTimeout(()=>{setState1(true)},3000);counter_1=false}
        else{return}
    }
    function setToggleOnTimer_2 () {
        if(counter_2)
        {setState2(false)
        setTimeout(()=>{setState2(true)},3000);counter_2=false}
        else{return}

    }



    return (<div id= "projects">
        <div className="card" onMouseEnter={()=>{setToggleOnTimer()}}><Anim /><div className={state?"dont_display":"display_message"} >Click on me to get to GitHub repository</div><img className="img" src={api}></img><h2 className="cardHeader">API integrattion</h2><h4 className="card_description">Building applications using wide variety of API availiable.</h4></div>
        <div className="card" onMouseEnter={()=>{setToggleOnTimer_1()}}><Anim /><div className={state1?"dont_display":"display_message"}>Click on me to get to GitHub repository</div><img className="img" src={graphic_design}></img><h2 className="cardHeader">Graphic design</h2><h4 className="card_description">Graphical design & aniamtions skills to make your website breathtaking</h4></div>
        <div className="card" onMouseEnter={()=>{setToggleOnTimer_2()}}><Anim /><div className={state2?"dont_display":"display_message"}>Click on me to get to GitHub repository</div><img className="img" src={microservises}></img><h2 className="cardHeader">Microservices</h2><h4 className="card_description">Architecturial approach to application development using microservices. </h4></div>
    </div>)
}