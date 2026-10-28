"use client";

import { useEffect, useState } from "react";
import { useFavoritesStore } from "../lib/favoritesStore";
import BreedCard from "./BreedCard";

export default function FavoritesList({ dogs }) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Find kun hunde, der er gemt som favoritter
  const favoriteDogs = dogs.filter((dog) => favorites.includes(dog.id));

  if (!mounted) {
    return <p className="mt-6 text-gray-500">Loading favorites...</p>;
  }

  if (favoriteDogs.length === 0) {
    return (
      <p className="mt-6 text-gray-500">
        No favorites yet. Go back and add some dogs!
      </p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {favoriteDogs.map((dog) => (
        <BreedCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}
