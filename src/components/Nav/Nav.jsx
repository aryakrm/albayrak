import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Nav.scss";

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
        <div className="side-menu">
          <img src="/assets/albayrakLogo.png" alt="" />
          <div className="menu-list">
            <ul>
              <li>
                <h1>Anasayfa</h1>
              </li>
              <li>
                <ul className="services">
                  <li>
                    {" "}
                    <h1>Hizmetler</h1>
                  </li>
                  <li>
                    <h2>Sfero Döküm</h2>
                  </li>
                  <li>
                    <h2>Pik Döküm</h2>
                  </li>
                  <li>
                    <h2>Çelik Döküm</h2>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div onClick={menuTogglerHandler} className="hamburger">
            {active ? (
              <AiOutlineClose className="_icon" />
            ) : (
              <GiHamburgerMenu className="_icon" />
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Nav;
