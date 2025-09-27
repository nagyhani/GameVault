"use client"

import * as React from "react"
import Link from "next/link"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export default function NavBar() {


    const [showNav, setShowNav] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const pc = 'pc'

  const webBroser = 'browser'

  return (
   <NavigationMenu
      className={`bg-gray-700 w-[415px] mx-auto py-3 px-5 rounded-4xl mt-6 fixed left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
      `}
      viewport={false}
    >
     
        <NavigationMenuList  className="mx-2">
           <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent text-white rounded-3xl hover:text-white hover:bg-gray-300/25 focus:bg-orange-600 focus:text-white p-3 text-xl"
            >
             
              <Link
                className="flex flex-row justify-center items-center "
                href={'/'}>
               GameVault
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent text-white rounded-3xl hover:text-white hover:bg-gray-300/25 focus:bg-orange-600 focus:text-white p-3"
            >
             
              <Link
                className="flex flex-row justify-center items-center"
                href={'/getPlatform/' + pc }>
               <i className="fa-solid fa-laptop"></i> PC
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

           <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent text-white rounded-3xl hover:text-white hover:bg-gray-300/25 focus:bg-orange-600 focus:text-white p-3"
            >
              <Link
                className="flex flex-row justify-center items-center"
                href={'/getPlatform/' + webBroser }>
              <i className="fa-solid fa-gamepad"></i> Web Browser
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      
    </NavigationMenu>
  )
}

