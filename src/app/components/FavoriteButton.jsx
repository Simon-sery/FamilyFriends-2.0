"use client";

import { useEffect, useState } from "react";
import { useFavoritesStore } from "../lib/favoritesStore";

export default function FavoriteButton({ dog }) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isFavorite = mounted && favorites.includes(dog.id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(dog.id)}
      aria-label={
        isFavorite
          ? `Fjern ${dog.name} fra favoritter`
          : `Tilføj ${dog.name} til favoritter`
      }
      className="rounded-lg bg-white px-4 py-2 shadow-md hover:bg-gray-100"
    >
      <span className={isFavorite ? "text-red-500" : "text-gray-500"}>
        {isFavorite ? "♥" : "♡"}
      </span>{" "}
      {isFavorite ? "Favorit" : "Tilføj favorit"}
    </button>
  );
}
