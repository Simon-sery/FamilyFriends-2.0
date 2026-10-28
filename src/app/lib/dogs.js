const API_URL = "https://dog.ceo/api";

// Oplysninger om hunderacerne
const breeds = {
  beagle: {
    country: "England",
    description:
      "A friendly, curious and energetic dog known for its excellent sense of smell.",
    history:
      "Beagles were developed in England and traditionally used for hunting rabbits.",
  },
  boxer: {
    country: "Germany",
    description:
      "A playful, loyal and energetic dog with a strong, muscular build.",
    history: "The Boxer originated in Germany in the 19th century.",
  },
  chihuahua: {
    country: "Mexico",
    description:
      "A tiny, confident and lively companion dog with a big personality.",
    history:
      "The Chihuahua takes its name from the Mexican state of Chihuahua.",
  },
  dalmatian: {
    country: "Croatia",
    description:
      "An athletic and friendly dog famous for its distinctive spotted coat.",
    history:
      "The Dalmatian is associated with the historical region of Dalmatia in Croatia.",
  },
  husky: {
    country: "Siberia, Russia",
    description:
      "An energetic, friendly and intelligent working dog with a thick coat.",
    history:
      "Siberian Huskies were developed by the Chukchi people as sled dogs.",
  },
  labrador: {
    country: "United Kingdom",
    description:
      "A friendly, outgoing and intelligent dog known for its loyalty.",
    history:
      "The Labrador Retriever developed in Britain from dogs originating in Newfoundland.",
  },
  pug: {
    country: "China",
    description:
      "A small, affectionate and playful dog with a distinctive wrinkled face.",
    history:
      "Pugs originated in China and were kept as companion dogs for centuries.",
  },
  rottweiler: {
    country: "Germany",
    description:
      "A strong, confident and loyal dog traditionally used for working and guarding.",
    history:
      "Rottweilers developed in Germany as cattle-driving and working dogs.",
  },
};

const breedNames = Object.keys(breeds);

async function fetchDog(name) {
  const response = await fetch(`${API_URL}/breed/${name}/images/random`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Could not fetch ${name}`);
  }

  const data = await response.json();

  if (data.status !== "success" || !data.message) {
    throw new Error(`Invalid API response for ${name}`);
  }

  return {
    id: name,
    name: name,
    image: data.message,
    ...breeds[name],
  };
}

// Hent alle hundene til forsiden
export async function getDogs() {
  return await Promise.all(breedNames.map(fetchDog));
}

// Hent én hund til detaljesiden
export async function getDog(id) {
  if (!breeds[id]) return null;

  return await fetchDog(id);
}
