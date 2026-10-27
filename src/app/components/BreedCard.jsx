"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BreedCard({ dog }) {
  // Holder styr på, om hunden er favorit
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    async function checkFavorite() {
      const response = await fetch("/api/favourites");
      if (!response.ok) return;

      const favourites = await response.json();

      const isFavorite = favourites.some(
        (item) => item.image_id === dog.image_id,
      );

      setFavorite(isFavorite);
    }

    checkFavorite();
  }, [dog.image_id]);
  // Gemmer hunden som favorit gennem vores API
  async function saveFavorite() {
    try {
      const response = await fetch("/api/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_id: dog.image_id,
        }),
      });

      if (response.ok) {
        setFavorite(true);
      } else {
        console.error("Kunne ikke gemme favorit");
      }
    } catch (error) {
      console.error("Fejl ved gemning:", error);
    }
  }

  return (
    <article className="relative overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg">
      {/* Hjerteknap */}
      <button
        type="button"
        onClick={saveFavorite}
        aria-pressed={favorite}
        aria-label={`${favorite ? "Remove" : "Add"} ${dog.name} ${favorite ? "from" : "to"} favorites`}
        className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow-md"
      >
        <span className="text-xl">{favorite ? "❤️" : "🤍"}</span>
      </button>

      {/* Link til hundens detaljeside */}
      <Link
        href={`/dogs/${dog.id}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <Image
          src={dog.image}
          alt={dog.name}
          width={400}
          height={300}
          className="h-48 w-full object-cover"
        />

        <div className="p-3">
          <h2 className="font-bold text-gray-900">{dog.name}</h2>

          <p className="text-sm text-gray-500">{dog.country}</p>
        </div>
      </Link>
    </article>
  );
}
