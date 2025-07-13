import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Optional, for global tweaks

// Grab the real DOM element
const rootElement = document.getElementById("root");

// Create the React root manager
const root = ReactDOM.createRoot(rootElement);

// Inject the virtual DOM into the real DOM
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
