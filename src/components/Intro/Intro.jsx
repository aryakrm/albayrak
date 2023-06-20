import React from "react";
import "./Intro.scss";

function Intro() {
  return (
    <div className="intro">
      <video loop muted autoPlay playsInline>
        <source src="/assets/dokumVideo.mp4" type="video/mp4" />
      </video>
      <h1>Yeni Nesil Dökümcü</h1>
      <div class="mouse"></div>
    </div>
  );
}

export default Intro;
