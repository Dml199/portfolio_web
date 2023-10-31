import React from 'react';
import "./introCss.css"
import {useEffect,useState} from "react"








function IntroSection (){
    
    let [state,setState]=useState(true);





    function toggleTimeStyle() {
    
        setTimeout(() =>{setState(!state);
        },1000)
        
     }


    useEffect (()=>{
  
      toggleTimeStyle()
      
     
    },[state])
        return (
            <div id="intro_sec">
                <div id="descript">
                    <div id="left-top"></div>
                    <p id = "name">Hi, i'm Dmitry 
                    <h4>UI<h4 className={state? "toggleColor":"toggleColor_2"}> | </h4> UX Designer & Web developer</h4>
                     </p>
                     
                    <div id="separ"></div>
                    <div id ="exp_sect"><h4 id="welcome">Welcome.<br/><p id="intro_paragr">
                        My name is Dmitry and i am junior frontend/backend developer with 1 year of experience. Here you can  learn about my projects, technologies i'm familiar with and <a href="#contact_me" className='link'>contact</a> me. </p>
                    </h4></div>
                    <div id="bottom-right"></div>
                </div>
            </div>
        );
    
}

export default IntroSection;
