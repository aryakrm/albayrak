import React from "react";
import "./Pik.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Pik() {
  const { t } = useTranslation();
  return (
    <div className="Pik">
      <div className="title">
        {/* <img src="/assets/bg3.jpg" alt="" /> */}
        <div className="text">
          <img src="./assets/dokumler/pikDokum.jpg" alt="" />
          <h1>{t("pik")}</h1>
          <h2>{t("pik_title")}</h2>
          <p>{t("pik_text")}</p>
        </div>
      </div>
    </div>
  );
}

export default Pik;
