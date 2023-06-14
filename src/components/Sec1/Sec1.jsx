import React from "react";
import "./Sec1.scss";

function Sec1() {
  return (
    <div className="Sec1">
       <div>
        <img
          className="dokumlerImg"
          src="assets/dokumler/sferoDokum.jpg"
          alt="sferoDokum"
        />
        <h2>Sfero Döküm</h2>
      </div>
      <div>
        <img
          className="dokumlerImg"
          src="assets/dokumler/pikDokum.jpg"
          alt="pikDokum"
        />
        <h2>Pik Döküm</h2>
      </div>
     
      <div>
        <img
          className="dokumlerImg"
          src="assets/dokumler/celikDokum.jpg"
          alt="celikDokum"
        />
        <h2>Çelik Döküm</h2>
      </div>
    </div>
  );
}

export default Sec1;
