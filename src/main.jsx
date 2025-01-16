import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component
import "./styles/global.css"; // Global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
