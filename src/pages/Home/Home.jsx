import React from "react";
import Sec1 from "../../components/Sec1/Sec1";
import Gallery from "../../components/Gallery/Gallery";
import About from "../../components/About/About";

function Home() {
  return (
    <div className="Home">
      <Sec1 />
      <About />
      <Gallery />
    </div>
  );
}

export default Home;
