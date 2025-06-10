import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store";

const CharacterDetails = () => {
  const { id } = useParams();
  const { data, favorites, addFavorite, removeFavorite } = useAppContext();
  const character = data.characters.find(c => c.uid === id);

  if (!character) return <div className="container mt-4">Loading…</div>;

  const isFav = favorites.some(fav => fav.uid === id && fav.type === "people");

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h3>{character.name}</h3>
          <button
            className="btn btn-outline-warning mb-3"
            onClick={() =>
              isFav ? removeFavorite(character) : addFavorite(character)
            }
          >
            {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Gender:</strong> {character.properties.gender}
            </li>
            <li className="list-group-item">
              <strong>Height:</strong> {character.properties.height}
            </li>
            <li className="list-group-item">
              <strong>Mass:</strong> {character.properties.mass}
            </li>
            {character.properties.birth_year && (
              <li className="list-group-item">
                <strong>Birth Year:</strong> {character.properties.birth_year}
              </li>
            )}
            {character.properties.species && (
              <li className="list-group-item">
                <strong>Species:</strong>{" "}
                {Array.isArray(character.properties.species)
                  ? character.properties.species.join(", ")
                  : character.properties.species}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
