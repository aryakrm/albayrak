import React from "react";
import "./Celik.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Celik() {
  const { t } = useTranslation();
  return (
    <div className="Celik">
      <div className="title">
        {/* <img src="/assets/bg3.jpg" alt="" /> */}
        <div className="text">
          <img src="./assets/dokumler/CelikDokum.jpg" alt="" />
          <h1>{t("celik")}</h1>
          <h2>{t("celik_title")}</h2>
          <p>{t("celik_text")}</p>
        </div>
      </div>
    </div>
  );
}

export default Celik;
