import React from "react";
import "./Intro.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation();
  return (
    <div className="intro">
      <video loop muted autoPlay playsInline>
        <source src="/assets/dokumVideo.mp4" type="video/mp4" />
      </video>
      <h1>{t("intro_title")}</h1>
      <div class="mouse"></div>
    </div>
  );
}

export default Intro;
