import React from "react";
import { Link } from "react-router-dom";
import "./Sec1.scss";
// import { t } from "i18next";
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";

function Sec1() {
  const { t } = useTranslation();
  return (
    <div className="Sec1">
      <div>
        <Link to={"/sfero"}>
          <LazyLoad className="dokumlerImg" style={{ width: "30%" }}>
            <img
              className="dokumlerImg"
              src="assets/dokumler/sferoDokum.jpg"
              alt="sferoDokum"
            />
          </LazyLoad>

          <h2>{t("sfero")}</h2>
        </Link>
      </div>
      <div>
        <Link to={"/pik"}>
          <LazyLoad className="dokumlerImg" style={{ width: "30%" }}>
            <img
              className="dokumlerImg"
              src="assets/dokumler/pikDokum.jpg"
              alt="pikDokum"
            />
          </LazyLoad>

          <h2> {t("pik")} </h2>
        </Link>
      </div>

      <div>
        <Link to={"/celik"}>
          <LazyLoad className="dokumlerImg" style={{ width: "30%" }}>
            <img
              className="dokumlerImg"
              src="assets/dokumler/celikDokum.jpg"
              alt="celikDokum"
            />
          </LazyLoad>

          <h2> {t("celik")} </h2>
        </Link>
      </div>
    </div>
  );
}

export default Sec1;
