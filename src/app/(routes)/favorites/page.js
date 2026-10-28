import Header from "../../components/Header";
import FavoritesList from "../../components/FavoritesList";
import { getDogs } from "../../lib/dogs";

export default async function FavoritesPage() {
  // Hent de samme hunde som på forsiden
  const dogs = await getDogs();

  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-4 pb-28 pt-6">
        <h1 className="text-3xl font-bold text-gray-800">My Favorites ⭐</h1>

        <p className="mt-2 text-gray-500">Your favorite dog breeds</p>

        <FavoritesList dogs={dogs} />
      </main>
    </>
  );
}
