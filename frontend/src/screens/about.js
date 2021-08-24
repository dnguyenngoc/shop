

import GitIcon from "../assets/img/contact-me/git.png"
import EmailIcon from "../assets/img/contact-me/email.png"
import InIcon from "../assets/img/contact-me/in.png"
import YoutubeIcon from "../assets/img/contact-me/youtube.png"
import { auto } from "@popperjs/core";
import React, { useState } from 'react';



export default () => {
  const [select, setSelect] = useState("about")

  return (
    <>
    <div className="about-us">
      <div className="profile">
        <h className="profile-heading">
          <a href="/#/about-us">DUY NGUYEN</a>
        </h>
        <p className="profile-content">
          I specialize in making beautiful software and user interfaces. I have a passion for all things science and chess AI. When not coding, I love reading, writing, listening to music or working out at the gym. Follow my journey as a developer or just send me a message to connect. 
        </p>
        <ul className='profile-menu'>
            <li>
              <a href="/#/">Home</a>
            </li>
            <li>
              <a href="/#/about-us">About</a>
            </li>
            <li>
              <a onClick={() => setSelect("getInTouch")}>Get in touch</a>
            </li>
        </ul>
        <p className="profile-social">
          <a className="profile-social-email" href="mailto:duynguyenngoc@hotmail.com">
            <img src={EmailIcon} style={{height: "75%", width: auto, marginBottom: "2px"}}></img>
          </a>
          <a className="profile-social-linkin" href="https://www.linkedin.com/in/dan00pot/">
            <img src={InIcon} style={{height: "55%", width: auto, marginBottom: "7px"}}></img>
          </a>
          <a className="profile-social-github" href="https://github.com/dnguyenngoc">
            <img src={GitIcon} style={{height: "85%", width: auto, marginBottom: "7px"}}></img>
          </a>
          <a className="profile-social-youtube" href="https://www.youtube.com/channel/UC5wtpUbbXg55Ru2dw9tqTPw">
            <img src={YoutubeIcon} style={{height: "100%", width: auto, marginBottom: "7px"}}></img>
          </a>
        </p>
        <div className="profile-copy">
          <p>
            ©2021 Duy Nguyen
          </p>
        </div>
      </div>
      <div className="content">
          here
      </div>
    </div>

    </>
  );
};
