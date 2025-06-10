// src/pages/Home.jsx
import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useAppContext } from "../store.jsx";
import Card from "../components/Card";

const Home = () => {
  useFetch();
  const { data } = useAppContext();

  return (
    <div className="container">
      {/* Sólo el título principal */}
      <h1 className="mt-4 text-light text-center">Star Wars Blog</h1>

      {/* Sección de Characters */}
      <div id="characters" className="mt-5 d-flex flex-wrap">
        {data.characters.map(item => (
          <Card key={`people-${item.uid}`} item={item} />
        ))}
      </div>

      {/* Sección de Planets */}
      <div id="planets" className="mt-5 d-flex flex-wrap">
        {data.planets.map(item => (
          <Card key={`planets-${item.uid}`} item={item} />
        ))}
      </div>

      {/* Sección de Vehicles */}
      <div id="vehicles" className="mt-5 d-flex flex-wrap">
        {data.vehicles.map(item => (
          <Card key={`vehicles-${item.uid}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
