import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import UserContext from "./Context/UserContext";
import "./Styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);
