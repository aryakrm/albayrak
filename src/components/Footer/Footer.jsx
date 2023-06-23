import React from "react";
import "./Footer.scss";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

function Footer() {
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
    <div className="Footer">
      <div className="top-footer">
        <img src="/assets/logo5.png" alt="Logo" />
        <div className="flags">
          <span onClick={selectEn} className="fi fi-gb"></span>
          <span onClick={selectIt} className="fi fi-it"></span>
          <span onClick={selectDe} className="fi fi-de"></span>
          <span onClick={selectRu} className="fi fi-ru"></span>
          <span onClick={selectFr} className="fi fi-fr"></span>
          <span onClick={selectAr} className="fi fi-sa"></span>
          <span onClick={selectTr} className="fi fi-tr"></span>
        </div>
      </div>
      <div className="adress">
        <p>
          <span>
            <ImLocation />
          </span>{" "}
          Cevat Dündar Cd. Kavacıklı İş Merkezi <br /> 17/32 OSTİM OSB
          YENİMAHALLE/ANKARA <br /> <br />
          <span>info@albamtl.com</span> <br />
          <span>+90 553 451 38 85</span>
        </p>
      </div>
      <div className="footer_contact">
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
  );
}

export default Footer;
