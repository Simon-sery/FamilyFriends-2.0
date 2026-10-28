"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="my-6 flex items-center gap-4 px-4">
      {/* Lyserød søgeknap */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F5948F] text-white">
        <FiSearch size={26} />
      </div>

      {/* Søgefelt */}
      <label htmlFor="breed-search" className="sr-only">
        Search breeds
      </label>

      <input
        id="breed-search"
        type="search"
        placeholder="Search breeds"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="min-w-0 flex-1 rounded-full border-2 border-gray-300 bg-white px-6 py-4 text-lg outline-none focus:border-[#F5948F]"
      />
    </div>
  );
}
