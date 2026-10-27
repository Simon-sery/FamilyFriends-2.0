"use client";
export default function Error({ reset }) {
  return <main className="mx-auto max-w-xl p-8 text-center"><h1 className="text-2xl font-bold">Something went wrong!</h1><p className="mt-4 text-gray-500">We could not load the dogs. Check your internet connection and try again.</p><button type="button" onClick={() => reset()} className="mt-4 rounded-lg bg-black px-6 py-3 text-white">Try again</button></main>;
}
