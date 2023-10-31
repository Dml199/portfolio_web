import "./contact.css";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import github from "../resources/github-svgrepo-com.svg";
import twitter from "../resources/twitter-circle.svg";
import whatsapp from "../resources/whatsapp.svg";


export default function ContactMe() {
  useEffect(() => {
    emailjs.init();
  }, []);

const ref1=useRef(null);
const ref2=useRef(null);
const ref3=useRef(null);

  function setToggleOnTimer () {
    
    setState(true)
    setTimeout(()=>{setState(false)},3000);
    
}


  const [state,setState] = useState(false);



  const [templateParams, setData] = useState({
    from_name: "",
    to_name: "Dmitrij",
    message: "",
    reply_to: "",
  });

  const handleSubmit = async (e) => {
    console.log(state)
    e.preventDefault();

    if (templateParams.message && templateParams.reply_to) {
      setToggleOnTimer()
      ref1.current.value=""
      ref2.current.value=""
      ref3.current.value=""
      emailjs
        .send(
          "service_lqhoxqc",
          "template_7m4i3ir",
          templateParams,
          "rrB_VcxLkM98ngbiX"
        );
    } else {
      alert("Email address: & Message: are necessary fields");
      return;
    }
  };

  return (
    <div>
      <div id="sent_msg_container" style={{display:state?"flex":"none"}}><div id="centered_container">Email is sent.</div></div>
      <div id="contact_me">
        <div className="input_addr">
          <div className="contact_me_header">
            <h2>
              Contact me
              </h2>
              <div>
               <a href="https://github.com/Dml199"> <img className="svg" src={github}></img></a>
               <a href="https://wa.me/+79068384528"><img className="svg" src={whatsapp}></img></a>
               <a href="https://twitter.com/sentagotai13232"><img className="svg" src={twitter}></img></a>
              </div>
            
          </div>
          
          <form onSubmit={handleSubmit}>
            <div id="pass">
            <label for="email">Your name:</label>
            <input ref={ref1}
              onChange={(e) => {
                setData({ ...templateParams, from_name: e.target.value });
              }}
            ></input>
            <label for="email">Your email:</label>
            <input  ref={ref2}
              type="email"
              onChange={(e) => {
                setData({ ...templateParams, reply_to: e.target.value });
              }}
              id="email"
            ></input>
              </div>
            <div id="msg">
              <label>Your message:</label>
              <input ref={ref3}
              id="inpt_msg"
                onChange={(e) => {
                  setData({ ...templateParams, message: e.target.value });
                }}
              ></input>
            </div>
            <button id="email_btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div id="contact_section"></div>
    </div>
  );
}
