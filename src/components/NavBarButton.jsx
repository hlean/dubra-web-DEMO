import React from "react"
import { NavigationMenuItem,
   NavigationMenuLink } from "@radix-ui/react-navigation-menu"


const NavBarButton = ({text, link}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <a href={link} className="text-lg relative cursor-pointer after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-[#e9f2ef] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
          {text}
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default NavBarButton