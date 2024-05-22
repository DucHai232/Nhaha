import React from "react";
import HeaderAbout from "../components/about/HeaderAbout";
import ContentAbout from "../components/about/ContentAbout";
import { Container } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
import OurCompany from "../components/about/OurCompany";

const About = () => {
  return (
    <div className="my-14 px-10">
      <Container>
        <HeaderAbout />
        <Routes>
          <Route path="/" element={<ContentAbout />} />
          <Route path="/our-company" element={<OurCompany />} />
        </Routes>
        <Outlet />
      </Container>
    </div>
  );
};

export default About;
