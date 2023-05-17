import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import criticalCSS from "./index.css";

function loadCriticalCSS() {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = criticalCSS;
  document.head.appendChild(styleTag);
}

loadCriticalCSS();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
