// src/pages/Home.jsx
import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useAppContext } from "../store.jsx";
import Card from "../components/Card";

const Home = () => {
  // Lanza el fetch la primera vez
  useFetch();

  // Saca del contexto los datos que llenó useFetch
  const { data } = useAppContext();

  return (
    <div className="container">
      <h1 className="mt-4">Star Wars Blog</h1>

      {/* Sección de personajes */}
      <h2 className="mt-5">Characters</h2>
      <div className="d-flex flex-wrap">
        {data.characters.map(item => (
          <Card key={item.uid} item={item} />
        ))}
      </div>

      {/* Sección de planetas */}
      <h2 className="mt-5">Planets</h2>
      <div className="d-flex flex-wrap">
        {data.planets.map(item => (
          <Card key={item.uid} item={item} />
        ))}
      </div>

      {/* Sección de vehículos */}
      <h2 className="mt-5">Vehicles</h2>
      <div className="d-flex flex-wrap">
        {data.vehicles.map(item => (
          <Card key={item.uid} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
