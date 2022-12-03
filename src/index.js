import React from "react";
import "../src/styles/index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
<<<<<<< Updated upstream
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from './contexts/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
=======
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './contexts/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <ContextProvider>
  <App />
</ContextProvider>
</React.StrictMode>
>>>>>>> Stashed changes
);
