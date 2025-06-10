// src/components/Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../store";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useAppContext();

  // ¿Ya está en favoritos?
  const isFavorite = favorites.some(
    fav => fav.uid === item.uid && fav.type === item.type
  );

  // Convierte "Title Case" a "snake-case" para filename
  const toFilename = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // espacios y símbolos → guion
      .replace(/^-+|-+$/g, "");    // quita guiones extremos

  // Obtiene URL de imagen: primero Akabab, luego local
  const getImageUrl = () => {
    if (item.image) {
      return item.image; // personajes vienen con item.image
    }
    // planetas y vehículos: busca en /img/{type}/{filename}.png
    const filename = `${toFilename(item.name)}.png`;
    return `/img/${item.type}/${filename}`;
  };

  // Si la imagen no existe, la ocultamos
  const handleImgError = e => {
    e.target.style.display = "none";
  };

  // Navega al detalle, ajustando la ruta para "people" → "characters"
  const handleNavigate = () => {
    const routeType = item.type === "people" ? "characters" : item.type;
    navigate(`/${routeType}/${item.uid}`);
  };

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        src={getImageUrl()}
        className="card-img-top"
        alt={item.name}
        onError={handleImgError}
      />

      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>

        {item.properties && (
          <div className="card-text">
            {item.type === "people" && (
              <>
                <p><strong>Gender:</strong> {item.properties.gender}</p>
                <p><strong>Height:</strong> {item.properties.height}</p>
              </>
            )}
            {item.type === "planets" && (
              <>
                <p><strong>Climate:</strong> {item.properties.climate}</p>
                <p><strong>Population:</strong> {item.properties.population}</p>
              </>
            )}
            {item.type === "vehicles" && (
              <>
                <p><strong>Model:</strong> {item.properties.model}</p>
                <p><strong>Passengers:</strong> {item.properties.passengers}</p>
              </>
            )}
          </div>
        )}

        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={handleNavigate}
          >
            More Info
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() =>
              isFavorite ? removeFavorite(item) : addFavorite(item)
            }
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
