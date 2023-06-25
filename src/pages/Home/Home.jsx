import React from "react";
import Sec1 from "../../components/Sec1/Sec1";
import Gallery from "../../components/Gallery/Gallery";
import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";

function Home() {
  return (
    <div className="Home">
      <Intro />
      <Sec1 />
      <About />
      <Gallery />
      {/* <video src="/assets/altKisim.mp4"></video> */}
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
        <source src="/assets/altKisim.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Home;
