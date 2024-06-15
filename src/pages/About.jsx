import React from "react";
import HeaderAbout from "../components/about/HeaderAbout";
import ContentAbout from "../components/about/ContentAbout";
import { Container } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
import OurCompany from "../components/about/OurCompany";
import OurVision from "../components/about/OurVision";
import OurPhilosophy from "../components/about/OurPhilosophy";

const About = () => {
  return (
    <div className="my-14 px-10">
      <Container>
        <HeaderAbout />
        <Routes>
          <Route path="/" element={<ContentAbout />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/our-philosophy" element={<OurPhilosophy />} />
        </Routes>
        <Outlet />
      </Container>
    </div>
  );
};

export default About;
