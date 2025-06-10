import React from "react";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  useFetch(); // Se ejecuta al cargar el componente

  return (
    <div className="container">
      <h1 className="mt-4">Star Wars Blog</h1>
      {/* Aquí mostraremos las cards luego */}
    </div>
  );
};

export default Home;
