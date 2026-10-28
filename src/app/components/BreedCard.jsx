"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFavoritesStore } from "../lib/favoritesStore";

export default function BreedCard({ dog }) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isFavorite = mounted && favorites.includes(dog.id);

  return (
    <article className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
      <Link href={`/dogs/${dog.id}`}>
        <Image
          src={dog.image}
          alt={dog.name}
          width={500}
          height={400}
          className="h-48 w-full rounded-3xl object-cover"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{dog.name}</h2>

          <p className="mt-2 text-base text-gray-400">{dog.country}</p>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleFavorite(dog.id)}
        aria-label={
          isFavorite
            ? `Fjern ${dog.name} fra favoritter`
            : `Tilføj ${dog.name} til favoritter`
        }
        className="absolute right-3 top-3 rounded-full bg-white/40 p-2 text-2xl text-white"
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </article>
  );
}
