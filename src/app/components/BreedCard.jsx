"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function BreedCard({ dog }) {
  const [favorite, setFavorite] = useState(false);
  return <article className="relative overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg">
    <button type="button" onClick={() => setFavorite((old) => !old)} aria-pressed={favorite} aria-label={`${favorite ? "Remove" : "Add"} ${dog.name} ${favorite ? "from" : "to"} favorites`} className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 text-xl shadow">{favorite ? "❤️" : "🤍"}</button>
    <Link href={`/dogs/${dog.id}`} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"><Image src={dog.image} alt={`${dog.name} dog`} width={500} height={350} className="h-44 w-full object-cover sm:h-56" /><div className="p-3"><h2 className="text-lg font-bold capitalize">{dog.name}</h2><p className="text-sm text-gray-500">{dog.country}</p></div></Link>
  </article>;
}
