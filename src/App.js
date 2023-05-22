import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Nav";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Terms from "./pages/terms&condition/Index";
import Privacy from "./pages/privacy/Index";
import LazyChatBot from "../src/components/whatsapp/index";
import LazyFooter from "./components/Footer/Footer";

function App() {
  const logo =
    "https://ik.imagekit.io/aq3ybtarw/gauge/logo_gauge_red.png?updatedAt=1683741657958";
  const redlogo =
    "https://ik.imagekit.io/aq3ybtarw/gauge/gauge.png?updatedAt=1683741617926";

  return (
    <Router>
      <Navbar RedLogo={redlogo} Logo={logo} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us-two" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <LazyChatBot />
      <LazyFooter />
    </Router>
  );
}

export default App;
