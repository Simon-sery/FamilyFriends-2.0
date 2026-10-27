const API_URL = "https://api.thedogapi.com/v1/favourites";

export async function GET() {
  const response = await fetch(API_URL, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return Response.json(
      { error: "Kunne ikke hente favoritter" },
      { status: response.status },
    );
  }

  const favourites = await response.json();

  return Response.json(favourites);
}
// Gemmer en ny favorit
export async function POST(request) {
  // Modtager billedets ID fra favoritknappen
  const { image_id } = await request.json();

  // Sender favoritten videre til TheDogAPI
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image_id }),
  });

  // Tjekker om favoritten blev gemt
  if (!response.ok) {
    const error = await response.json();

    return Response.json({ error }, { status: response.status });
  }

  const favourite = await response.json();

  return Response.json(favourite, { status: 201 });
}
export async function DELETE(request) {
  const { id } = await request.json();

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  if (!response.ok) {
    return Response.json(
      { error: "Kunne ikke slette favorit" },
      { status: response.status },
    );
  }

  return Response.json({ success: true });
}
