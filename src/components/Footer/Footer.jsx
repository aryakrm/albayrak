import React from "react";
import "./Footer.scss";

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
        <div>
          <p>
            Adres: Cevat Dündar Cd. Kavacıklı İş Merkezi <br /> 17/32 OSTİM OSB
            ANKARA/YENİMAHALLE
          </p>
        </div>
      </div>
      <p>© 2023 ALbayrak Döküm ve Metal Sanayi. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
