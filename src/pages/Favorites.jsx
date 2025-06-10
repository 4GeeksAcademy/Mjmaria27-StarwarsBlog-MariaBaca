import React from "react";
import { useAppContext } from "../store";
import Card from "../components/Card";

const Favorites = () => {
  const { favorites } = useAppContext();

  return (
    <div className="container mt-4">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added anything to favorites yet.</p>
      ) : (
        <div className="d-flex flex-wrap">
          {favorites.map(item => (
            <Card key={`${item.type}-${item.uid}`} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
