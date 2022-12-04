import React from "react";
import "../src/styles/index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/agency.min.css"
import { ContextProvider } from './contexts/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
