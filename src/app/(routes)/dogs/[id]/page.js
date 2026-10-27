import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import FavoriteButton from "../../../components/FavoriteButton";
import { getDog } from "../../../lib/dogs";

export default async function DogDetailPage({ params }) {
  // Find hundens ID fra URL'en, fx /dogs/beagle
  const { id } = await params;

  // Hent hundens oplysninger
  const dog = await getDog(id);

  // Vis 404, hvis hunden ikke findes
  if (!dog) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="mx-auto max-w-2xl p-4 pb-24">
        {/* Tilbage til forsiden */}
        <Link href="/" className="font-bold text-blue-600 hover:underline">
          ← Back to ListView
        </Link>

        {/* Hundens billede */}
        <Image
          src={dog.image}
          alt={dog.name}
          width={800}
          height={500}
          className="mt-6 h-64 w-full rounded-xl object-cover md:h-96"
        />

        {/* Hundens navn */}
        <h1 className="mt-4 text-3xl font-bold">{dog.name}</h1>

        {/* Zustand favoritknap */}
        <div className="mt-4">
          <FavoriteButton dog={dog} />
        </div>

        {/* Hundens land */}
        <p className="mt-4 text-gray-500">Country: {dog.country}</p>

        {/* Beskrivelse */}
        <p className="mt-6 text-gray-700">
          Learn more about this breed and explore other dogs on the list.
        </p>
      </main>
    </>
  );
}
