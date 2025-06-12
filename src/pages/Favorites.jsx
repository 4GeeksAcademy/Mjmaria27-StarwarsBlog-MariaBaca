// src/pages/Favorites.jsx
import React from "react";
import { useAppContext } from "../store.jsx";

// Helpers para obtener la URL de la imagen igual que en Card.jsx
const toFilename = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getImageUrl = item => {
  if (item.image) return item.image; // personajes (Akabab)
  // planetas/vehículos locales (.png)
  const filename = `${toFilename(item.name)}.png`;
  return `/img/${item.type}/${filename}`;
};

const Favorites = () => {
  const { favorites, removeFavorite } = useAppContext();

  return (
    <div className="container mt-4">
      <h2 className="text-light">My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-light">You haven't added anything to favorites yet.</p>
      ) : (
        <div
          className="d-flex overflow-auto py-2"
          style={{ gap: "1rem" }}
        >
          {favorites.map(item => (
            <div
              key={`${item.type}-${item.uid}`}
              className="position-relative bg-secondary text-light rounded"
              style={{
                flex: "0 0 auto",
                width: "120px",
                textAlign: "center",
                padding: "0.5rem"
              }}
            >
              <img
                src={getImageUrl(item)}
                alt={item.name}
                className="img-fluid rounded"
                style={{ height: "80px", objectFit: "cover", marginBottom: "0.5rem" }}
                onError={e => (e.target.style.display = "none")}
              />
              <div className="small text-truncate">{item.name}</div>
              <button
                type="button"
                className="btn btn-sm btn-link text-light position-absolute top-0 end-0 p-0"
                onClick={() => removeFavorite(item)}
                aria-label={`Remove ${item.name}`}
                style={{ fontSize: "1rem", lineHeight: 1 }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
