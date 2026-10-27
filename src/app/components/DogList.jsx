import { getDogs } from "../lib/dogs";
import DogBrowser from "./DogBrowser";
export default async function DogList() {
  const dogs = await getDogs();
  return <DogBrowser dogs={dogs} />;
}
