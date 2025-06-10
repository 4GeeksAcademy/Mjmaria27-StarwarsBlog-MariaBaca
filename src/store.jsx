// src/store.jsx
import React, { createContext, useContext, useState } from "react";

// 1. Crea el contexto
const AppContext = createContext();

// 2. Hook para consumirlo fácilmente
export const useAppContext = () => useContext(AppContext);

// 3. Provider que envuelve tu app
export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState({
    characters: [],
    planets: [],
    vehicles: [],
  });

  // Agrega un favorito (evita duplicados por uid+type)
  const addFavorite = (item) => {
    if (
      !favorites.some(
        (fav) => fav.uid === item.uid && fav.type === item.type
      )
    ) {
      setFavorites([...favorites, item]);
    }
  };

  // Elimina un favorito
  const removeFavorite = (item) => {
    setFavorites(
      favorites.filter(
        (fav) => !(fav.uid === item.uid && fav.type === item.type)
      )
    );
  };

  return (
    <AppContext.Provider
      value={{ favorites, addFavorite, removeFavorite, data, setData }}
    >
      {children}
    </AppContext.Provider>
  );
};
