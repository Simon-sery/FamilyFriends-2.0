import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDog } from "../../../lib/dogs";
import Header from "../../../components/Header";
import BottomNav from "../../../components/BottomNav";
export default async function DogDetailPage({ params }) {
  const { id } = await params;
  const dog = await getDog(id);
  if (!dog) notFound();
  return <><Header /><main className="mx-auto max-w-2xl p-4 pb-24"><Link href="/" className="font-bold text-blue-600 hover:underline">← Back to ListView</Link><Image src={dog.image} alt={`${dog.name} dog`} width={800} height={500} className="mt-6 h-64 w-full rounded-xl object-cover sm:h-96" /><h1 className="mt-4 text-3xl font-bold capitalize">{dog.name}</h1><p className="mt-2 text-gray-500">Country: {dog.country}</p><p className="mt-6 text-gray-600">Learn more about this breed and explore other dogs on the list.</p></main><BottomNav /></>;
}
