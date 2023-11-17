import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
