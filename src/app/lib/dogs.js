const API_URL = "https://api.thedogapi.com/v1";

// De 8 hunderacer, vi vil vise
const breedNames = [
  "beagle",
  "boxer",
  "chihuahua",
  "dalmatian",
  "husky",
  "labrador",
  "pug",
  "rottweiler",
];

// Racernes ID'er fra TheDogAPI
const breedIds = {
  beagle: 31,
  boxer: 55,
  chihuahua: 77,
  dalmatian: 92,
  husky: 226,
  labrador: 149,
  pug: 201,
  rottweiler: 210,
};

// Gemmer det valgte billed-ID, så det ikke skifter
// ved hver genindlæsning.
// Beagles ID er allerede kendt fra vores test.
const imageIds = {
  beagle: "Syd4xxqEm",
  boxer: "8imWQMmXE",
  chihuahua: "M96ZzvXqp",
  dalmatian: "zuTzCtrqg3",
  husky: "0BsBdRukER",
  labrador: "n5GhfG7uv",
  pug: "M9euOJSBd",
  rottweiler: "PnX0Ak9Bqb",
};
// Henter én hund
async function fetchDog(name) {
  let image;

  if (imageIds[name]) {
    // Hent det samme billede hver gang
    const response = await fetch(`${API_URL}/images/${imageIds[name]}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Kunne ikke hente billede for ${name}`);
    }

    image = await response.json();
  } else {
    // Find et billede til de øvrige racer
    const response = await fetch(
      `${API_URL}/images/search?breed_ids=${breedIds[name]}&limit=10`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      throw new Error(`Kunne ikke hente ${name}`);
    }

    const data = await response.json();
    image = data.find((item) => item.url);
  }

  if (!image || !image.url) {
    throw new Error(`Intet billede fundet for ${name}`);
  }

  // Find racens oplysninger
  const breed = image.breeds?.find(
    (item) => Number(item.id) === breedIds[name],
  );

  console.log("Hund:", name, "Billed-ID:", image.id);

  // Oplysninger, som BreedCard bruger
  return {
    id: name,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    image: image.url,
    image_id: image.id,
    country: breed?.origin || "Unknown",
  };
}

// Henter alle 8 hunde til forsiden
export async function getDogs() {
  try {
    const dogs = await Promise.all(breedNames.map((name) => fetchDog(name)));

    return dogs;
  } catch (error) {
    console.error("Dog API error:", error);
    throw error;
  }
}
// Henter én bestemt hund til detaljesiden
export async function getDog(id) {
  // Tjek om hunden findes i vores liste
  if (!breedNames.includes(id)) {
    return null;
  }

  // Brug den eksisterende funktion
  return await fetchDog(id);
}
