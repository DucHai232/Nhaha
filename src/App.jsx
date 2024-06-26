import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Service from "./pages/service/Service";
import Recruitment from "./pages/recruitment/Recruitment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
