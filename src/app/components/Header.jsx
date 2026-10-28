import Link from "next/link";
import { FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold text-slate-900">
          🐾 FamilyFriends
        </Link>

        {/* Klokkeikon */}
        <div className="relative">
          <FiBell size={28} className="text-gray-800" />

          {/* Lille lyserød prik */}
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-[#F5948F]" />
        </div>
      </div>
    </header>
  );
}
