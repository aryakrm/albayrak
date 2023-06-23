import React from "react";
import "./Sfero.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Sfero() {
  const { t } = useTranslation();
  return (
    <div className="Sfero">
      <div className="sfero_title">
        <img src="/assets/sfero/sferoTitle.jpg" alt="Sfero" />
        <div>
          <h1>{t("sfero")}</h1>
          <h2>{t("sfero_title")}</h2>
          <a href="#sfero_text">
            <p>{t("devami")}</p>
          </a>
        </div>
      </div>
      <div className="sfero_text" id="sfero_text">
        <div>
          <h1>{t("sfero")}</h1>
          <p>
            <img src="/assets/sfero/sferoText.jpg" alt="sfero" />
            <span>
              {t("sfero_text1")} <br />{" "}
            </span>{" "}
            <br />
            <span>
              {t("sfero_text2")}
              <br />
            </span>
            <br />
            <span>
              {t("sfero_text3")}
              <br />
            </span>
            <br />
            <span>
              {t("sfero_text4")}
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sfero;
