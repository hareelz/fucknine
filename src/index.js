import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CardContextProvider from "./contexts/CardContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CardContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CardContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
