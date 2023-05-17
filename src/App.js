import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Navbar from "./components/Home/Nav";
import Footer from "./components/Footer/Footer";

const Terms = React.lazy(() => import("./pages/terms&condition/Index"));
const Privacy = React.lazy(() => import("./pages/privacy/Index"));
const ChatBot = React.lazy(() => import("../src/components/whatsapp/index"));

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
        <Route
          path="/terms"
          element={
            <Suspense fallback={null}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path="/privacy"
          element={
            <Suspense fallback={null}>
              <Privacy />
            </Suspense>
          }
        />
      </Routes>
      <ChatBot />
      <Footer />
    </Router>
  );
}

export default App;
