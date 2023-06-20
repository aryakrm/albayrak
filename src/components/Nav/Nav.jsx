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

function Nav() {
  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  return (
    <nav>
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
                  <h1 style={{ fontWeight: "700" }}>Anasayfa</h1>
                </Link>
              </li>
              <li>
                <h1 style={{ fontWeight: "700" }}>Hizmetler</h1>
              </li>
              <li>
                <Link onClick={menuTogglerHandler} to={"/Sfero"}>
                  <h1>Sfero Döküm</h1>
                </Link>
              </li>
              <li>
                <Link onClick={menuTogglerHandler} to={"/Pik"}>
                  <h1>Pik Döküm</h1>
                </Link>
              </li>
              <li style={{ borderBottom: "1px dotted #ff5714" }}>
                <Link onClick={menuTogglerHandler} to={"/Celik"}>
                  <h1>Çelik Döküm</h1>
                </Link>
              </li>

              <li>
                <Link onClick={menuTogglerHandler} to={"/About"}>
                  <h1 style={{ fontWeight: "700" }}>Hakkımızda</h1>
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
