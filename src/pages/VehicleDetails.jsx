import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store";

const VehicleDetails = () => {
  const { id } = useParams();
  const { data, favorites, addFavorite, removeFavorite } = useAppContext();
  const vehicle = data.vehicles.find(v => v.uid === id);

  if (!vehicle) return <div className="container mt-4">Loading…</div>;

  const isFav = favorites.some(fav => fav.uid === id && fav.type === "vehicles");

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
          src={`/img/vehicles/${toFilename(vehicle.name)}.png`}
          className="card-img-top"
          alt={vehicle.name}
          onError={e => (e.target.style.display = "none")}
        />
        <div className="card-body">
          <h3>{vehicle.name}</h3>
          <button
            className="btn btn-outline-warning mb-3"
            onClick={() =>
              isFav ? removeFavorite(vehicle) : addFavorite(vehicle)
            }
          >
            {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Model:</strong> {vehicle.properties.model}
            </li>
            <li className="list-group-item">
              <strong>Manufacturer:</strong> {vehicle.properties.manufacturer}
            </li>
            <li className="list-group-item">
              <strong>Passengers:</strong> {vehicle.properties.passengers}
            </li>
            <li className="list-group-item">
              <strong>Cargo Capacity:</strong>{" "}
              {vehicle.properties.cargo_capacity}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
