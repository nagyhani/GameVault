import BackGround from "@/app/(main)/backGround/backGround";
import GamesList from "@/app/(main)/GamesList/GamesList";
import { Games } from "@/app/Interface/games";

export default async function GetCategory({ params }: { params: { category: string } }) {
  const { category } = params;

  const res = await fetch(
    `${process.env.NEXT_BASE_URL}/api/games?category=${category}`,
    {
      method: "GET",
      headers: {
        "x-apihub-key": "PbdTu1arM29wzCaNKmSYrOoKYJQlzYdY8FT4owGhK7gMwL5lCc",
        "x-apihub-host": "Free-To-Play-Games.allthingsdev.co",
        "x-apihub-endpoint": "afaabd15-d9aa-49c4-baba-d8a768074651",
      },
      cache: "no-store",
    }
  );

  const data: Games[] = await res.json();

  return (
    <div>
      <BackGround />
      <GamesList games={data} />
    </div>
  );
}
