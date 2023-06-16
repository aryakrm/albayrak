import React from "react";
import Nav from "../Nav/Nav.jsx";
import "./Header.scss";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function Header() {
  return (
    <header>
      <Nav />
      <div className="intro">
        <video loop muted autoPlay playsInline>
          <source src="/assets/dokumVideo.mp4" type="video/mp4" />
        </video>
        <h1>Yeni Nesil Dökümcü.</h1>
        <div class="mouse"></div>
      </div>
      <div className="contact-menu">
        <a
          href="https://instagram.com/metalcastingturkey?igshid=ZDc4ODBmNjlmNQ=="
          target="_blank"
        >
          <AiFillInstagram />
        </a>
        <a href="https://www.youtube.com/@ALBAYRAKDOKUM" target="_blank">
          <AiFillYoutube />
        </a>
        <a href="mailto:info@albamtl.com" target="_blank">
          <AiFillMail />
        </a>
        <a href="https://wa.me/905534513885" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
    </header>
  );
}

export default Header;
