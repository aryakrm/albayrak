import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="About">
      <div className="about-text">
        <img src="/assets/albayrakLogo.png" width="100px" alt="" />

        <h2>Hakkımızda</h2>
        <div>
          <p>
            Albayrak Döküm ve Metal Sanayi, 2021 yılında kurulan bir döküm
            firmasıdır. Genç ve dinamik yapımızla, döküm sektöründe hızla
            büyümeyi hedefliyoruz. Uzman kadromuz ve deneyimli çalışanlarımızla,
            en kaliteli döküm ürünlerini üretmek ve müşterilerimize üstün hizmet
            sunmak için çaba gösteriyoruz. Teknolojik gelişmeleri yakından takip
            ederek, modern döküm tekniklerini en iyi şekilde uyguluyor ve
            müşteri beklentilerini karşılamayı amaçlıyoruz.
          </p>{" "}
          <p>
            Pik döküm, Sfero döküm ve Çelik döküm hizmetlerimizle geniş bir ürün
            yelpazesine sahibiz. Müşteri odaklı yaklaşımımız, güvenilirlik ve
            kalite ilkelerimizle sektörde güçlü bir marka olmayı hedefliyoruz.
            Albayrak Döküm ve Metal Sanayi olarak, işimize olan tutkumuz ve
            müşteri memnuniyetine verdiğimiz önemle sektördeki başarı hikayemizi
            yazmaya devam ediyoruz.
          </p>
        </div>
        <h3>Devamı...</h3>
      </div>
      <div className="about-video">
        <iframe
          src="https://www.youtube.com/embed/MxUMyxZsUFs?modestbranding=0&controls=0&autoplay=1&loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
