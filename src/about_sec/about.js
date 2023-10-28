import "./about.css";
import {useState,useEffect,useRef} from "react";

function About () {

useEffect(()=>{

    const obj= new IntersectionObserver(entries=>{
        entries.forEach(entry=>{if (entry.isIntersecting){setState(true)}
                                     else{setState(false)}})
      })

      obj.observe(ref.current)
},[])

const ref=useRef(null)
const [state,setState] =useState(true);



        return (<div id="about_sec">
            <div id="about_int_text"> SKILLS AND PROJECT REFERENCE</div>
            <div id ="about_int_text_2"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ut, dignissimos dolorum cupiditate fugit beatae minima vel enim quia vero. Mollitia sit nobis quisquam error obcaecati repellat nesciunt laboriosam</p> </div>
            <div id = "about">
               <div id="descr_text" ref= {ref} className={state?"translate":"notranslate"}><h1>About me</h1><p>Bachelor in electrical engineering, switched to programming for a better perspectives and growth opportunities. I enjoy taking challanges, learning new things and creating new applications for myself and others. <br/><br/><br/><br/></p>
               <button id="btn">Contact me</button></div>
               
               <div id="descr_text_2" className={state?"translate_1":"notranslate_1"}>
               <h4 className="pr_bar_desc">Javascript</h4>
               <progress className="pr_bar" max="100" value="70"></progress>
               <h4 className="pr_bar_desc">HTML</h4>
               <progress className="pr_bar" max="100" value="80"></progress>
               <h4 className="pr_bar_desc">CSS</h4>
               <progress className="pr_bar" max="100" value="70"></progress>
               <h4 className="pr_bar_desc">React</h4>
               <progress className="pr_bar" max="100" value="50"></progress>
               <h4 className="pr_bar_desc">Node</h4>
               <progress className="pr_bar" max="100" value="40"></progress></div>
            </div>
            </div>
        );
    
}

export default About;
