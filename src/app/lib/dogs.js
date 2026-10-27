const API_URL = "https://dog.ceo/api";
const breedNames = ["beagle", "boxer", "chihuahua", "dalmatian", "husky", "labrador", "pug", "rottweiler"];

export async function getDogs() {
  try {
    const dogs = await Promise.all(breedNames.map(async (name) => {
      const response = await fetch(`${API_URL}/breed/${name}/images/random`, { cache: "no-store" });
      if (!response.ok) throw new Error(`Could not fetch ${name}: ${response.status}`);
      const data = await response.json();
      if (data.status !== "success" || !data.message) throw new Error(`Invalid API response for ${name}`);
      return { id: name, name, image: data.message, country: "Unknown" };
    }));
    return dogs;
  } catch (error) {
    console.error("Dog API error:", error);
    throw error;
  }
}

export async function getDog(id) {
  if (!breedNames.includes(id)) return null;
  const response = await fetch(`${API_URL}/breed/${id}/images/random`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not fetch ${id}: ${response.status}`);
  const data = await response.json();
  if (data.status !== "success" || !data.message) throw new Error(`Invalid API response for ${id}`);
  return { id, name: id, image: data.message, country: "Unknown" };
}
