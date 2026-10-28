"use client";

import Link from "next/link";
import { FiHome, FiStar, FiMessageCircle, FiUser } from "react-icons/fi";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-100 bg-white py-5">
      <div className="mx-auto flex max-w-2xl items-center justify-around">
        <Link href="/" aria-label="Home">
          <FiHome size={28} className="text-[#F5948F]" />
        </Link>

        <span title="Favorites">
          <FiStar size={28} className="text-gray-400" />
        </span>

        <span title="Messages">
          <FiMessageCircle size={28} className="text-gray-400" />
        </span>

        <span title="Profile">
          <FiUser size={28} className="text-gray-400" />
        </span>
      </div>
    </nav>
  );
}
