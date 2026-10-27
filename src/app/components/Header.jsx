import Link from "next/link";
export default function Header() {
  return <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 px-4 py-4 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link href="/" className="text-xl font-extrabold text-slate-900">🐾 FamilyFriends</Link><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">2.0</span></div></header>;
}
