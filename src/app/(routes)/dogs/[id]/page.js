import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import FavoriteButton from "../../../components/FavoriteButton";
import { getDog } from "../../../lib/dogs";

export default async function DogDetailPage({ params }) {
  const { id } = await params;
  const dog = await getDog(id);

  if (!dog) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="mx-auto max-w-2xl px-4 pb-28">
        {/* Stort hundebillede */}
        <div className="relative mt-4">
          <Image
            src={dog.image}
            alt={dog.name}
            width={800}
            height={600}
            className="h-105 w-full rounded-3xl object-cover"
          />

          {/* Tilbageknap oven på billedet */}
          <Link
            href="/"
            className="absolute left-4 top-4 rounded-full bg-white px-4 py-3 text-xl shadow-md"
          >
            ←
          </Link>

          {/* Favoritknap oven på billedet */}
          <div className="absolute right-4 top-4">
            <FavoriteButton dog={dog} />
          </div>
        </div>

        {/* Hundens navn */}
        <h1 className="mt-6 text-4xl font-bold text-gray-800">{dog.name}</h1>

        {/* Farvede tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-200 px-4 py-2 text-gray-700">
            Confident
          </span>

          <span className="rounded-full bg-pink-200 px-4 py-2 text-gray-700">
            Alert
          </span>

          <span className="rounded-full bg-green-200 px-4 py-2 text-gray-700">
            Playful
          </span>

          <span className="rounded-full bg-yellow-200 px-4 py-2 text-gray-700">
            Loyal
          </span>
        </div>

        {/* Beskrivelse */}
        <div className="mt-8">
          <p className="text-sm text-gray-400">Breed description</p>

          <p className="mt-2 text-lg leading-relaxed text-gray-600">
            Learn more about {dog.name}, a dog breed from {dog.country}.
          </p>
        </div>

        {/* Historie */}
        <div className="mt-8">
          <p className="text-sm text-gray-400">Breed history</p>

          <p className="mt-2 text-lg leading-relaxed text-gray-600">
            Explore the history and characteristics of {dog.name}.
          </p>
        </div>
      </main>
    </>
  );
}
