import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Nav.scss";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Nav() {
  const [active, setActive] = useState(false);
  const { t } = useTranslation();

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  function selectEn() {
    let loc = "/";
    window.location.replace(loc + "?lng=en");
  }
  function selectIt() {
    let loc = "/";
    window.location.replace(loc + "?lng=it");
  }
  function selectDe() {
    let loc = "/";
    window.location.replace(loc + "?lng=de");
  }
  function selectRu() {
    let loc = "/";
    window.location.replace(loc + "?lng=ru");
  }
  function selectFr() {
    let loc = "/";
    window.location.replace(loc + "?lng=fr");
  }
  function selectAr() {
    let loc = "/";
    window.location.replace(loc + "?lng=ar");
  }
  function selectTr() {
    let loc = "/";
    window.location.replace(loc + "?lng=tr");
  }

  return (
    <nav>
      <div className="flags">
        <span onClick={selectEn} className="fi fi-gb"></span>
        <span onClick={selectIt} className="fi fi-it"></span>
        <span onClick={selectDe} className="fi fi-de"></span>
        <span onClick={selectRu} className="fi fi-ru"></span>
        <span onClick={selectFr} className="fi fi-fr"></span>
        <span onClick={selectAr} className="fi fi-sa"></span>
        <span onClick={selectTr} className="fi fi-tr"></span>
      </div>
      <div className="nav-left">
        <img src="/assets/albayrakLogo.png" alt="" />
      </div>
      <div onClick={menuTogglerHandler} className="hamburger">
        {active ? (
          <AiOutlineClose className="_icon" />
        ) : (
          <GiHamburgerMenu className="_icon" />
        )}
      </div>
      {active ? (
        <motion.div
          className="side-menu"
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <img src="/assets/albayrakLogo.png" alt="" />
          <div className="menu-list">
            <ul>
              <li>
                <Link onClick={menuTogglerHandler} to={"/home"}>
                  <h1 style={{ fontWeight: "700" }}> {t("anasayfa")}</h1>
                </Link>
              </li>
              <li>
                <h1 style={{ fontWeight: "700" }}>{t("hizmetler")}</h1>
              </li>
              <li>
                <Link onClick={menuTogglerHandler} to={"/Sfero"}>
                  <h1>{t("sfero")}</h1>
                </Link>
              </li>
              <li>
                <Link onClick={menuTogglerHandler} to={"/Pik"}>
                  <h1>{t("pik")}</h1>
                </Link>
              </li>
              <li style={{ borderBottom: "1px dotted #ff5714" }}>
                <Link onClick={menuTogglerHandler} to={"/Celik"}>
                  <h1>{t("celik")}</h1>
                </Link>
              </li>

              <li>
                <Link onClick={menuTogglerHandler} to={"/AboutUs"}>
                  <h1 style={{ fontWeight: "700" }}>{t("hakkimizda")}</h1>
                </Link>
              </li>
            </ul>
            <div className="menu-list-contact">
              <a
                href="https://instagram.com/metalcastingturkey?igshid=ZDc4ODBmNjlmNQ=="
                target="_blank"
              >
                <AiFillInstagram />
              </a>
              <a href="https://www.youtube.com/@ALBAYRAKDOKUM" target="_blank">
                <AiFillYoutube />
              </a>
              <a href="mailto:info@albamtl.com" target="_blank">
                <AiFillMail />
              </a>
              <a href="https://wa.me/905534513885" target="_blank">
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
          <div onClick={menuTogglerHandler} className="hamburger">
            {active ? (
              <AiOutlineClose className="_icon" />
            ) : (
              <GiHamburgerMenu className="_icon" />
            )}
          </div>
        </motion.div>
      ) : null}
    </nav>
  );
}

export default Nav;
