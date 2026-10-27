import { Suspense } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import DogList from "./components/DogList";
import DogLoading from "./components/DogLoading";
export default function Home() {
  return <><Header /><main className="mx-auto max-w-5xl pb-24"><div className="px-4 pt-8"><h1 className="text-3xl font-bold">FamilyFriends</h1><p className="mt-2 text-gray-500">Find your favorite dog breed</p></div><Suspense fallback={<DogLoading />}><DogList /></Suspense></main><BottomNav /></>;
}
