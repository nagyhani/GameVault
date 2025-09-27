import React from 'react'
import BackGround from '../../backGround/backGround'
import { Games } from '@/app/Interface/games';
import GamesList from '../../GamesList/GamesList';
import Category from '../../Category/page';

export default async function getPlatform({ params }: { params: { platform: string } }) {

    const {platform} = params

    const res = await fetch(
        `${process.env.NEXT_BASE_URL}/api/games?platform=${platform}`,
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
        <BackGround/>
        <GamesList games={data}/>
        <Category/>
        </div>
  )
}
