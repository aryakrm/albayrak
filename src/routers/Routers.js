import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Sfero from "../pages/Sfero/Sfero.jsx";
import Pik from "../pages/Pik/Pik.jsx";
import Celik from "../pages/Celik/Celik.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="sfero" element={<Sfero />} />
      <Route path="pik" element={<Pik />} />
      <Route path="celik" element={<Celik />} />
      <Route path="Aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default Routers;
