// src/store.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const AppContext = createContext();

// Hook para usar el contexto fácilmente
export const useAppContext = () => useContext(AppContext);

// Provider que envuelve toda la app
export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState({
    characters: [],
    planets: [],
    vehicles: [],
  });

  // Función para agregar un favorito
  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.uid === item.uid && fav.type === item.type)) {
      setFavorites([...favorites, item]);
    }
  };

  // Función para eliminar un favorito
  const removeFavorite = (item) => {
    const updated = favorites.filter(
      (fav) => !(fav.uid === item.uid && fav.type === item.type)
    );
    setFavorites(updated);
  };

  // Devuelve el contexto global
  return (
    <AppContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
