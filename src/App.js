import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Nav";
import Footer from "./components/Footer/Footer";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Terms = lazy(() => import("./pages/terms&condition/Index"));
const Privacy = lazy(() => import("./pages/privacy/Index"));
const ChatBot = lazy(() => import("../src/components/whatsapp/index"));
const About = lazy(() => import("./pages/AboutPage/About"));
const Contact = lazy(() => import("./pages/ContactPage/Contact"));

function App() {
  const logo = "https://ik.imagekit.io/aq3ybtarw/gauge/logo_gauge_red.png?updatedAt=1683741657958";
  const redlogo = "https://ik.imagekit.io/aq3ybtarw/gauge/gauge.png?updatedAt=1683741617926";

  return (
    <Router>
      <Navbar RedLogo={redlogo} Logo={logo} />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us-two" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
      <ChatBot />
      <Footer />
    </Router>
  );
}

export default App;
