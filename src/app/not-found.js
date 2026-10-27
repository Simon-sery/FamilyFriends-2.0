import Link from "next/link";
export default function NotFound() { return <main className="p-10 text-center"><h1 className="text-2xl font-bold">Dog not found</h1><Link href="/" className="mt-4 inline-block text-blue-600 underline">Back to dogs</Link></main>; }
