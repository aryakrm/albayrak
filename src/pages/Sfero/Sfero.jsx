import React from "react";
import "./Sfero.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Sfero() {
  const { t } = useTranslation();
  return (
    <div className="Sfero">
      <div className="title">
        {/* <img src="/assets/bg3.jpg" alt="" /> */}
        <div className="text">
          <img src="./assets/dokumler/sferoDokum.jpg" alt="" />
          <h1> {t("sfero")} </h1>
          <h2>{t("sfero_title")}</h2>
          <p>{t("sfero_text")}</p>
        </div>
      </div>
    </div>
  );
}

export default Sfero;
