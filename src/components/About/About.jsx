import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <div className="about-text">
        <img src="/assets/albayrakLogo.png" width="100px" alt="" />

        <h2> {t("hakkimizda")}</h2>
        <div>
          <p>{t("hakkimizda_home")}</p>{" "}
        </div>
        <Link to={"/aboutUs"}>
          <h3> {t("devami")} </h3>
        </Link>
      </div>
      <div className="about-video">
        <iframe
          src="https://www.youtube.com/embed/MxUMyxZsUFs?modestbranding=0&controls=0&autoplay=1&loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
