// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import { RoutesComponent } from "./routes";

const App = () => {
  return (
    <>
      {/* Barra de navegación */}
      <Navbar />

      {/* Aquí se renderizan Home, Details y Favorites */}
      <RoutesComponent />
    </>
  );
};

export default App;
