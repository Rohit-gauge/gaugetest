import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import criticalCSS from "./index.css";

function loadCriticalCSS() {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = criticalCSS;
  document.head.appendChild(styleTag);
}

loadCriticalCSS();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
