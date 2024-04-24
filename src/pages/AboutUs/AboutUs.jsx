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
        <h4>{t("hakkimizda_text1")}</h4> <br /> <br />
        <p>{t("hakkimizda_text2")}</p>
        <br />
        <p>{t("hakkimizda_text3")}</p> <br />
        <p>{t("hakkimizda_text4")}</p> <br />
        <p>{t("hakkimizda_text5")}</p> <br />
        <p>{t("hakkimizda_text6")}</p> <br />
        <p>{t("hakkimizda_text7")}</p> <br />
        <p>{t("hakkimizda_text8")}</p>
      </div>
      <div className="misyon">
        <div>
          <h1>{t("misyon")}</h1>
          <p>Müşterilerimize yüksek kaliteli döküm ürünleri sunmak ve ihtiyaçlarını en iyi şekilde karşılamaktır.
Müşteri memnuniyetini ön planda tutarak, sürekli olarak yenilikçi üretim yöntemlerini ve
teknolojilerini takip ederek, sektördeki lider konumumuzu sürdürmek ve güçlendirmek için
çalışıyoruz. Müşterilerimizin beklentilerini aşmak için kalite, esneklik ve zamanında teslimat
konularında mükemmelliği hedefliyoruz.</p>
        </div>
        <img src="/assets/misyon.jpg" alt="misyon" />
      </div>
      <div className="vizyon">
        <img src="/assets/vizyon.jpg" alt="misyon" />
        <div>
          <h1>{t("vizyon")}</h1>
          <p>Döküm sektöründe önde gelen bir firma olarak tanınmak ve müşterilerimize mükemmellik
sağlamaktır. Sürekli olarak yenilikçi üretim tekniklerini benimseyerek, ürünlerimizin kalitesini artırıyor
ve müşterilerimize en iyi çözümleri sunmak için çaba gösteriyoruz. Sürdürülebilirlik ilkelerini
benimseyerek, çevreye duyarlı bir yaklaşımla çalışıyor ve sektörde örnek bir marka olmayı
hedefliyoruz. Müşterilerimize değer veren, uzman kadromuzla birlikte büyümeyi ve başarıyı
sürdürmek istiyoruz.</p>
        </div>
        <img className="vizyon_img" src="/assets/vizyon.jpg" alt="misyon" />
      </div>
      <video
        className="altKisim"
        width={"90%"}
        style={{
          marginBottom: "10rem",
          marginLeft: "5%",
        }}
        muted
        autoPlay={"autoplay"}
      >
        <source src="/assets/altKisim2.mp4" type="video/mp4"></source>
      </video>
    </motion.div>
  );
}

export default AboutUs;
