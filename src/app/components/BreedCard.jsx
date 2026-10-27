"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFavoritesStore } from "../lib/favoritesStore";

export default function BreedCard({ dog }) {
  // Hent favoritter og funktion fra Zustand
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  // Vent til browseren er klar
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Undersøg om hunden er favorit
  const isFavorite = mounted && favorites.includes(dog.id);

  return (
    <article className="relative overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg">
      <Link href={`/dogs/${dog.id}`}>
        <Image
          src={dog.image}
          alt={dog.name}
          width={500}
          height={300}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-bold">{dog.name}</h2>
          <p className="text-sm text-gray-500">{dog.country}</p>
        </div>
      </Link>

      {/* Hjerteknap */}
      <button
        type="button"
        onClick={() => toggleFavorite(dog.id)}
        aria-label={
          isFavorite
            ? `Fjern ${dog.name} fra favoritter`
            : `Tilføj ${dog.name} til favoritter`
        }
        className="absolute right-3 top-3 rounded-full bg-white p-2 text-2xl shadow-md transition-transform hover:scale-110"
      >
        <span className={isFavorite ? "text-red-500" : "text-gray-400"}>
          {isFavorite ? "♥" : "♡"}
        </span>
      </button>
    </article>
  );
}
