import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useAppContext } from "../store.jsx";
import Card from "../components/Card";

const Home = () => {
  useFetch();
  const { data } = useAppContext();

  // helper que puedes extraer si lo usas en varios sitios
  const scrollStyle = {
    gap: "1rem",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    paddingBottom: "1rem"
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-light mb-5">Star Wars Blog</h1>

      {/* Characters */}
      <section id="characters" className="mb-5">
        <h2 className="text-light mb-3">Characters</h2>
        <div className="d-flex flex-nowrap" style={scrollStyle}>
          {data.characters.map(item => (
            <div key={item.uid} style={{ display: "inline-block" }}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Planets */}
      <section id="planets" className="mb-5">
        <h2 className="text-light mb-3">Planets</h2>
        <div className="d-flex flex-nowrap" style={scrollStyle}>
          {data.planets.map(item => (
            <div key={item.uid} style={{ display: "inline-block" }}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Vehicles */}
      <section id="vehicles" className="mb-5">
        <h2 className="text-light mb-3">Vehicles</h2>
        <div className="d-flex flex-nowrap" style={scrollStyle}>
          {data.vehicles.map(item => (
            <div key={item.uid} style={{ display: "inline-block" }}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
