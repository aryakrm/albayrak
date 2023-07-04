import React from "react";
import "./Celik.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Celik() {
  const { t } = useTranslation();
  return (
    <div className="Celik">
      <div className="celik_title">
        <img src="/assets/celik/celikTitle.jpg" alt="celik" />
        <div>
          <h1>{t("celik")}</h1>
          <h2>{t("celik_title")}</h2>
          <a href="#celik_text">
            <p>{t("devami")}</p>
          </a>
        </div>
      </div>
      <div className="celik_text" id="celik_text">
        <div>
          <h1>{t("celik")}</h1>
          <p>
            <img src="/assets/celik/celikText.jpg" alt="celik" />
            <span>
              {t("celik_text1")} <br />{" "}
            </span>{" "}
            <br />
            <span>
              {t("celik_text2")}
              <br />
            </span>
            <br />
            <span>
              {t("celik_text3")}
              <br />
            </span>
            <br />
            <span>
              {t("celik_text4")}
              <br />
            </span>
            <br />
            <span>
              {t("celik_text5")}
              <br />
            </span>
            <br />
            <span>
              {t("celik_text6")}
              <br />
            </span>
          </p>
        </div>
      </div>
      <video
        className="altKisim"
        width={"90%"}
        style={{
          marginBottom: "10rem",
          marginLeft: "5%",
        }}
        muted
        autoPlay={"autoplay"}
      >
        <source src="/assets/altKisim2.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Celik;
