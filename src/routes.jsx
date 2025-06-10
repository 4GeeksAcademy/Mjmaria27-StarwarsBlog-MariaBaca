// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";
import PlanetDetails from "./pages/PlanetDetails";
import VehicleDetails from "./pages/VehicleDetails";
import Favorites from "./pages/Favorites";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
      <Route path="/planets/:id" element={<PlanetDetails />} />
      <Route path="/vehicles/:id" element={<VehicleDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
