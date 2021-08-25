

import GitIcon from "../assets/img/contact-me/git.png"
import EmailIcon from "../assets/img/contact-me/email.png"
import InIcon from "../assets/img/contact-me/in.png"
import YoutubeIcon from "../assets/img/contact-me/youtube.png"
import { auto } from "@popperjs/core";
import React, { useState } from 'react';
import Poster from "../components/poster/poster"
import ChessLogo from "../assets/img/project/chess.jpg"
import Test2 from "../assets/img/project/test2.jpg"
import Test3 from "../assets/img/project/test3.JPG"


import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';


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
      <Row className="justify-content-md-center">
        <Col xs={12}  sm={6} xl={3} className="mb-4">
         <Poster 
            url = {"/#/games/chess"} 
            pictureUrl = {ChessLogo} 
            title = {"React-Chess"} 
            playUrl = {"/#/games/chess/demo"}
            description="born from the love of the game. This is going to be under constant development as I learn to optimize the AI, get better at the game and just build beautiful UI. If you have the love for chess or programming in general, I'd love to chat!"/>
        </Col>
        <Col xs={12} sm={6} xl={3} className="mb-4">
         <Poster 
            url = {"/#/games/chess"} 
            pictureUrl = {Test2} 
            title = {"Cargo"} 
            playUrl = {"/#/games/chess/demo"}
            description="A React Native carpool application used to connect users and enable them to create carpools by location and time"/>
        </Col>
        <Col xs={12} sm={6} xl={3}  className="mb-4">
         <Poster 
            url = {"/#/games/chess"} 
            pictureUrl = {Test3} 
            title = {"React-Chess"} 
            playUrl = {"/#/games/chess/demo"}
            description="is a service used to shorten URLs. Built on the idea of bit.ly, this basic application is light weight, can easily be deployed on a shorter domain name to achieve better usage."/>
        </Col>
        <Col xs={12} sm={6} xl={3}  className="mb-4">
         <Poster 
            url = {"/#/games/chess"} 
            pictureUrl = {ChessLogo} 
            title = {"React-Chess"} 
            playUrl = {"/#/games/chess/demo"}
            description="is a service used to shorten URLs. Built on the idea of bit.ly, this basic application is light weight, can easily be deployed on a shorter domain name to achieve better usage."/>
        </Col>
      </Row>
      
     

      </div>
    </div>
    </>
  );
};
