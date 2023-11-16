import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CardContextProvider from "./contexts/CardContextProvider";
import AuthContext from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <CardContextProvider>
        <App />
      </CardContextProvider>
    </AuthContext>
  </BrowserRouter>
);
