import "./contact.css";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import github from "../resources/github-svgrepo-com.svg";
import twitter from "../resources/twitter-circle.svg";
import viber from "../resources/viber.svg";
import whatsapp from "../resources/whatsapp.svg";

export default function ContactMe() {
  useEffect(() => {
    emailjs.init();
  }, []);

  const [templateParams, setData] = useState({
    from_name: "",
    to_name: "Dmitrij",
    message: "",
    reply_to: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (templateParams.message && templateParams.reply_to) {
      emailjs
        .send(
          "service_lqhoxqc",
          "template_7m4i3ir",
          templateParams,
          "rrB_VcxLkM98ngbiX"
        )
        .then((e) => {
          console.log(e);
        });
    } else {
      console.log(templateParams.message || templateParams.reply_to);
      alert("Email address: & Message: are necessary fields");
      return;
    }
  };

  return (
    <div>
      <div id="contact_me">
        <div className="input_addr">
          <div className="contact_me_header">
            <h2>
              Contact me
              </h2>
              <div>
                <img className="svg" src={github}></img>
                <img className="svg" src={whatsapp}></img>
                <img className="svg" src={viber}></img>
                <img className="svg" src={twitter}></img>
              </div>
            
          </div>

          <form onSubmit={handleSubmit}>
            <div id="pass"></div>
            <label for="email">Your name:</label>
            <input
              onChange={(e) => {
                setData({ ...templateParams, from_name: e.target.value });
              }}
            ></input>
            <label for="email">Your email:</label>
            <input
              type="email"
              onChange={(e) => {
                setData({ ...templateParams, reply_to: e.target.value });
              }}
              id="email"
            ></input>

            <div id="msg">
              <label>Your message:</label>
              <input
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
