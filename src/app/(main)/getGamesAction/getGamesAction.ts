'use server'

export async function getGames(page: number = 1, limit: number = 15) {
  const res = await fetch(
    `${process.env.NEXT_BASE_URL}/api/games`,
    {
      method: "GET",
      headers: {
        "x-apihub-key": "PbdTu1arM29wzCaNKmSYrOoKYJQlzYdY8FT4owGhK7gMwL5lCc",
        "x-apihub-host": "Free-To-Play-Games.allthingsdev.co",
        "x-apihub-endpoint": "afaabd15-d9aa-49c4-baba-d8a768074651",
      },
    }
  );

  const data = await res.json();

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    games: data.slice(start, end),
    total: data.length,
  };
}


