import React from "react";
import Nav from "../Nav/Nav.jsx";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Nav />
      <div className="intro">
        <video loop muted autoPlay playsInline>
          <source src="/assets/dokumVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
}

export default Header;
