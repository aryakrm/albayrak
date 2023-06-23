import React from "react";
import "./Pik.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Pik() {
  const { t } = useTranslation();
  return (
    <div className="Pik">
      <div className="pik_title">
        <img src="/assets/pik/pikTitle.jpg" alt="pik" />
        <div>
          <h1>{t("pik")}</h1>
          <h2>{t("pik_title")}</h2>
          <a href="#pik_text">
            <p>{t("devami")}</p>
          </a>
        </div>
      </div>
      <div className="pik_text" id="pik_text">
        <div>
          <h1>{t("pik")}</h1>
          <p>
            <img src="/assets/pik/pikText.jpg" alt="pik" />
            <span>
              {t("pik_text1")} <br />{" "}
            </span>{" "}
            <br />
            <span>
              {t("pik_text2")}
              <br />
            </span>
            <br />
            <span>
              {t("pik_text3")}
              <br />
            </span>
            <br />
            <span>
              {t("pik_text4")}
              <br />
            </span>
            <br />
            <span>
              {t("pik_text5")}
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pik;
