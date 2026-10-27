import Link from "next/link";
export default function BottomNav() {
  return <nav aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-200 bg-white"><div className="mx-auto flex max-w-5xl justify-around py-3"><Link href="/" className="rounded-lg px-4 py-2 font-semibold text-blue-700 hover:bg-blue-50">⌂ Home</Link><Link href="/detailview" className="rounded-lg px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">♡ Classic view</Link></div></nav>;
}
