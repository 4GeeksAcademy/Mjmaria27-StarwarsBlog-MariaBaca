import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store";

const PlanetDetails = () => {
  const { id } = useParams();
  const { data, favorites, addFavorite, removeFavorite } = useAppContext();
  const planet = data.planets.find(p => p.uid === id);

  if (!planet) return <div className="container mt-4">Loading…</div>;

  const isFav = favorites.some(fav => fav.uid === id && fav.type === "planets");

  // Usa tu misma lógica de Card para el nombre de archivo .png
  const toFilename = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img
          src={`/img/planets/${toFilename(planet.name)}.png`}
          className="card-img-top"
          alt={planet.name}
          onError={e => (e.target.style.display = "none")}
        />
        <div className="card-body">
          <h3>{planet.name}</h3>
          <button
            className="btn btn-outline-warning mb-3"
            onClick={() =>
              isFav ? removeFavorite(planet) : addFavorite(planet)
            }
          >
            {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Climate:</strong> {planet.properties.climate}
            </li>
            <li className="list-group-item">
              <strong>Population:</strong> {planet.properties.population}
            </li>
            <li className="list-group-item">
              <strong>Terrain:</strong> {planet.properties.terrain}
            </li>
            <li className="list-group-item">
              <strong>Gravity:</strong> {planet.properties.gravity}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
