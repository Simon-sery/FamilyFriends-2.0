"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import BreedCard from "./BreedCard";
export default function DogBrowser({ dogs }) {
  const [search, setSearch] = useState("");
  const filteredDogs = dogs.filter((dog) => dog.name.toLowerCase().includes(search.trim().toLowerCase()));
  return <><SearchBar search={search} setSearch={setSearch} /><p className="mb-3 px-4 text-sm text-gray-500">Showing {filteredDogs.length} of {dogs.length} breeds</p><div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">{filteredDogs.map((dog) => <BreedCard key={dog.id} dog={dog} />)}</div>{filteredDogs.length === 0 && <p className="p-4 text-gray-500">No breeds found.</p>}</>;
}
