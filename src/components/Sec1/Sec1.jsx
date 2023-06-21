import React from "react";
import { Link } from "react-router-dom";
import "./Sec1.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Sec1() {
  const { t } = useTranslation();
  return (
    <div className="Sec1">
      <div>
        <Link to={"/sfero"}>
          <img
            className="dokumlerImg"
            src="assets/dokumler/sferoDokum.jpg"
            alt="sferoDokum"
          />
          <h2>{t("sfero")}</h2>
        </Link>
      </div>
      <div>
        <Link to={"/pik"}>
          <img
            className="dokumlerImg"
            src="assets/dokumler/pikDokum.jpg"
            alt="pikDokum"
          />

          <h2> {t("pik")} </h2>
        </Link>
      </div>

      <div>
        <Link to={"/celik"}>
          <img
            className="dokumlerImg"
            src="assets/dokumler/celikDokum.jpg"
            alt="celikDokum"
          />

          <h2> {t("celik")} </h2>
        </Link>
      </div>
    </div>
  );
}

export default Sec1;
