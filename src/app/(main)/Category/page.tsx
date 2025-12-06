'use client'

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'




export default function Category() {

    const shooter  = 'shooter'
    const action = 'action'
    const sports = 'sports'
     const racing = 'racing'
     const strategy = 'strategy'
      const fighting = 'fighting'
     const scifi = 'sci-fi'
     const military = 'military'
      const survival = 'survival'
     

  
  return (
   <div className="p-10">
  <h4 className="text-white text-4xl my-14">Categories</h4>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 cursor-pointer">
    
    <div className="relative  rounded-2xl group aspect-video">
     
     <Link href={'/GetCategory/'+ action }>
      <div className='relative'>

         <Image
        src="/category-background1.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Action</span>
     
      <div className="absolute xl:bottom-12 xl:right-20 bottom-0 right-0 w-6/12 max-w-[280px] overflow-hidden">
        <Image
          src="/category-icon1.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105 z-50"
        />
      </div>
     </Link>
     

      
      
    </div>

           <div className="relative  rounded-2xl group aspect-video">
            <Link href={'/GetCategory/'+ racing }>
     <div className='relative'>

         <Image
        src="/category-background8.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Racing</span>
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[280px] overflow-hidden">
        <Image
          src="/category-icon8.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>

            <div className="relative  rounded-2xl group aspect-video">
      <Link href={'/GetCategory/'+ shooter }>
     <div className='relative'>

         <Image
        src="/category-background9.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Shooter</span>
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[280px] overflow-hidden">
        <Image
          src="/category-icon9.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>

            <div className="relative  rounded-2xl group aspect-video">
              <Link href={'/GetCategory/'+ sports }>
      <div className='relative'>

         <Image
        src="/category-background16.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Sports</span>
     
    
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[280px] overflow-hidden">
        <Image
          src="/category-icon16.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>

            <div className="relative  rounded-2xl group aspect-video">
              <Link href={'/GetCategory/'+ strategy }>
      <div className='relative'>

         <Image
        src="/category-background17.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Strategy</span>
     
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[280px] overflow-hidden">
        <Image
          src="/category-icon17.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>

            <div className="relative  rounded-2xl group aspect-video">
              <Link href={'/GetCategory/'+ scifi }>
       <div className='relative'>

         <Image
        src="/category-background31.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Sci-fi</span>
     
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[200px] overflow-hidden">
        <Image
          src="/category-icon31.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>

            <div className="relative  rounded-2xl group aspect-video">
              <Link href={'/GetCategory/'+ survival }>
      <div className='relative'>

         <Image
        src="/category-background47.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Survival</span>
     
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[190px] overflow-hidden">
        <Image
          src="/category-icon47.png"
          alt="Action Icon"
          width={450}
          height={400}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>

            <div className="relative  rounded-2xl group aspect-video">
              <Link href={'/GetCategory/'+ fighting }>
     <div className='relative'>

         <Image
        src="/category-background7.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> Fighting</span>
     
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[280px] overflow-hidden">
        <Image
          src="/category-icon7.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>

            <div className="relative  rounded-2xl group aspect-video">
              <Link href={'/GetCategory/'+ military }>
       <div className='relative'>

         <Image
        src="/category-background18.jpg"
        alt="Action"
        width={380}
        height={280}
        className="object-cover rounded-2xl"
      />

      <div className='absolute bg-black/45 top-0 bottom-0 left-0 w-full xl:w-4/5 rounded-2xl'></div>


      </div>
     

      
      <span className='text-xl md:text-2xl lg:text-3xl text-white absolute top-4/12 left-1/12'> military</span>

      
     
      <div className="absolute bottom-0 right-0 xl:right-20 xl:bottom-12 w-6/12 max-w-[280px] overflow-hidden">
        <Image
          src="/category-icon18.png"
          alt="Action Icon"
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </Link>
    </div>
  </div>
</div>

  )
}
