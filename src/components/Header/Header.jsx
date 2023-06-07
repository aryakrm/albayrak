import React from "react";
import Nav from "../Nav/Nav.jsx";
import "./Header.scss";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function Header() {
  return (
    <header>
      <Nav />
      <div className="intro">
        <video loop muted autoPlay playsInline>
          <source src="/assets/dokumVideo.mp4" type="video/mp4" />
        </video>
        <h1>Yeni Nesil Dökümcü</h1>
      </div>
      <div className="contact-menu">
        <AiFillInstagram />
        <AiFillYoutube />
      </div>
    </header>
  );
}

export default Header;
