// src/hooks/useFetch.js
import { useEffect } from "react";
import { useAppContext } from "../store";

const SWAPI = "https://www.swapi.tech/api";
const AKABAB = "https://akabab.github.io/starwars-api/api";

export const useFetch = () => {
  const { setData } = useAppContext();

  useEffect(() => {
    const fetchAll = async () => {
      const dataFetched = { characters: [], planets: [], vehicles: [] };

      // 🎭 Personajes desde Akabab
      try {
        const res = await fetch(`${AKABAB}/all.json`);
        const akachar = await res.json();
        dataFetched.characters = akachar.map(char => ({
          uid: String(char.id),
          name: char.name,
          type: "people",
          properties: {
            gender: char.gender,
            height: char.height,
            mass: char.mass,
            species: char.species
          },
          image: char.image
        }));
      } catch (err) {
        console.error("Error al traer personajes", err);
      }

      // 🌐 Planetas y vehículos desde SWAPI
      const endpoints = ["planets", "vehicles"];
      for (let type of endpoints) {
        try {
          const res = await fetch(`${SWAPI}/${type}`);
          const json = await res.json();
          const details = await Promise.all(
            json.results.map(async item => {
              const r = await fetch(item.url);
              const { result } = await r.json();
              return {
                uid: item.uid,
                name: item.name,
                type,
                properties: result.properties,
                image: null
              };
            })
          );
          dataFetched[type] = details;
        } catch (err) {
          console.error(`Error al traer ${type}`, err);
        }
      }

      setData(dataFetched);
    };

    fetchAll();
  }, []);
};
