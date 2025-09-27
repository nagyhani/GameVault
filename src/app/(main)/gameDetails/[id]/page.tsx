
import { GamesDetails } from '@/app/Interface/gamesDetails';
import Image from 'next/image';
import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';
import Head from 'next/head';




export default async function GameDetails({params} : {params : {id:string}}) {



    const {id} =  params
    



   const res = await fetch(
    `https://Free-To-Play-Games.proxy-production.allthingsdev.co/api/game?id=${id}`,
    {
      method: "GET",
      headers: {
        "x-apihub-key": "PbdTu1arM29wzCaNKmSYrOoKYJQlzYdY8FT4owGhK7gMwL5lCc",
        "x-apihub-host": "Free-To-Play-Games.allthingsdev.co",
        "x-apihub-endpoint": "afaabd15-d9aa-49c4-baba-d8a768074651",
      },
    }
  );
const data : GamesDetails = await res.json()




 const res1 = await fetch(
    `${process.env.NEXT_BASE_URL}/api/games?sort-by=alphabetical`,
    {
      method: "GET",
      headers: {
        "x-apihub-key": "PbdTu1arM29wzCaNKmSYrOoKYJQlzYdY8FT4owGhK7gMwL5lCc",
        "x-apihub-host": "Free-To-Play-Games.allthingsdev.co",
        "x-apihub-endpoint": "afaabd15-d9aa-49c4-baba-d8a768074651",
      },
    }
  );
const data1 : GamesDetails[] = await res1.json()
const limitedData = data1.slice(0, 8)




    
    
  return (

    <>

    <Head>
      <title>
        {data.title}
      </title>
    </Head>
     <div>
        <div className="relative w-full h-[250px] md:h-[400px] lg:h-[460px]  ">
                <Image
                  src= {data.screenshots[2]?.image}
                  alt="homePage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className='w-4/5 mx-auto lg:p-16 py-16'>
                <div className='flex items-center flex-col lg:flex-row '>   <h2 className='text-white text-4xl mt-3.5 xl:ml-11'> {data.title}</h2></div>

  <Carousel opts={{ align: "start" }} className="w-5/6 mx-auto mt-10">
  <CarouselContent>
    {[data.thumbnail, ...data.screenshots.map((s) => s.image)].map(
      (img, index) => (
        <CarouselItem
          key={index}
          className="md:basis-1/2 lg:basis-1/3"
        >
          <Card className="p-0 shadow-lg">
            <CardContent className="flex aspect-video items-center justify-center p-0 border-0">
              <div className="relative w-full h-full overflow-hidden rounded-xl group">
                <Image
                  src={img}
                  alt={index === 0 ? data.title : `Screenshot ${index}`}
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
               
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      )
    )}
  </CarouselContent>


  <CarouselPrevious className="left-0 -ml-12" />
  <CarouselNext className="right-0 -mr-12" />
</Carousel>



                <div className='mt-14 flex flex-col w-full lg:flex-row lg:justify-between'>
                  <div className='lg:w-7/12 w-full'>
                      <span className='text-white text-lg'>Description</span>
                    <hr className='bg-white/30 mt-2.5' />
                    <p className='text-white mt-2'>{data.short_description}</p>

                    <h5 className='text-white mt-6'> {data.description}</h5>
                  </div>

                  <div className='lg:w-3/12 w-full mt-6' >

                    <span className='text-white text-lg'>Game Details</span>
                    <hr className='bg-white/30 mt-2.5' />
                    <p className='text-white mt-2'>Genre : {data.genre}</p>
                     <p className='text-white mt-2'>Platform : {data.platform}</p>
                      <p className='text-white mt-2'>Publisher : {data.publisher}</p>
                       <p className='text-white mt-2'>Developer : {data.developer}</p>
                        <p className='text-white mt-2'>Release Date : {data.release_date}</p>
                         <p className='text-white mt-2'>Link : <a href={data.game_url} target='_blank' className='underline text-orange-600'> Game Link</a></p>
                  </div>
                </div>

                <div className='mt-10'>
                     <span className='text-white text-lg'>System Requirements</span>
                     <hr className='bg-white/30 mt-2.5' />
                      <p className='text-white mt-2'>OS : {data.minimum_system_requirements?.os}</p>
                       <p className='text-white mt-2'>Processor : {data.minimum_system_requirements?.processor}</p>
                        <p className='text-white mt-2'>Memory : {data.minimum_system_requirements?.memory}</p>
                         <p className='text-white mt-2'>Graphics : {data.minimum_system_requirements?.graphics}</p>
                          <p className='text-white mt-2'>Storage : {data.minimum_system_requirements?.storage}</p>


                </div>

              </div>

            <div className='p-16 md:w-4/5 mx-auto'>
               <hr className='bg-white/30 my-2.5' /> 
               <span className='text-white text-lg'>You may like these games</span>

               <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 py-8 px-3.5">
        {limitedData.map((gam) => (
        <Link key={gam.id} href={'/gameDetails/' + gam.id}>
          <div  className="mx-auto cursor-pointer">
            <Image
              className="rounded-2xl hover:scale-105 transition duration-300"
              alt={gam.title}
              src={gam.thumbnail}
              width={450}
              height={250}
            />
            <div>
              <p className="text-white py-2">
                {gam.title} - {gam.platform}
              </p>
            </div>
          </div>
        </Link>
        ))}
      </div>
            </div>



    </div>
    </>
   
  )
}
