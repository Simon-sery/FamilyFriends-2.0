"use client";
export default function SearchBar({ search, setSearch }) {
  return <div className="my-5 px-4"><label htmlFor="breed-search" className="sr-only">Search breeds</label><input id="breed-search" type="search" placeholder="Search breeds" value={search} onChange={(event) => setSearch(event.target.value)} className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></div>;
}
