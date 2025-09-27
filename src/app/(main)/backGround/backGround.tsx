import Image from 'next/image'
import React from 'react'

export default function BackGround() {
  return (
   <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/homepage-en.jpg"
          alt="homePage"
          fill
          className="object-cover"
          priority
        />
      </div>
  )
}
