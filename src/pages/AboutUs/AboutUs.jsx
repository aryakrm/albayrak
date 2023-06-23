import React from "react";
import "./AboutUs.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <motion.div className="AboutUs">
      <img src="/assets/hakkimizda.jpg" alt="about us" />
      <div className="hakkimizda">
        <h1>{t("hakkimizda")}</h1> <br />
        <p>{t("hakkimizda_text")}</p>
      </div>
      <div className="misyon">
        <div>
          <h1>{t("misyon")}</h1>
          <p>{t("misyon_text")}</p>
        </div>
        <img src="/assets/misyon.jpg" alt="misyon" />
      </div>
      <div className="vizyon">
        <img src="/assets/vizyon.jpg" alt="misyon" />
        <div>
          <h1>{t("vizyon")}</h1>
          <p>{t("vizyon_text")}</p>
        </div>
        <img className="vizyon_img" src="/assets/vizyon.jpg" alt="misyon" />
      </div>
    </motion.div>
  );
}

export default AboutUs;
