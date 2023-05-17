import React from "react";
import App from "./App";
import criticalCSS from "./index.css";
import ReactDOM from "react-dom";

function loadCriticalCSS() {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = criticalCSS;
  document.head.appendChild(styleTag);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

loadCriticalCSS();
root.render(<App />);
