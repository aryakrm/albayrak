import React from "react";
import "./AboutUs.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="AboutUs">
      <div className="title">
        {/* <img src="/assets/bg3.jpg" alt="" /> */}
        <div className="text">
          <img src="./assets/al.png" alt="" />
          <h1> {t("hakkimizda")} </h1>
          <p>{t("hakkimizda_text")}</p>
          <h1> {t("misyon")} </h1>
          <p>{t("misyon_text")}</p>
          <h1>{t("vizyon")}</h1>
          <p>{t("vizyon_text")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
