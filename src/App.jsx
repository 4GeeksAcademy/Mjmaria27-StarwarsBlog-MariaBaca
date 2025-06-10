// src/App.jsx
import React from "react";
import { RoutesComponent } from "./routes";
import Navbar from "./components/Navbar";
import "./index.css"; // o "./global.css"

function App() {
  return (
    <>
      <Navbar />
      <RoutesComponent />
    </>
  );
}

export default App;
