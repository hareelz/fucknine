import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
