import React from 'react'
import { NavigationMenu,
        NavigationMenuList,
        NavigationMenuItem,
        NavigationMenuLink
 } from './ui/navigation-menu'
 import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LogoSF from '@/assets/LogoSF.png'
import { Button } from './ui/button'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
 
 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 50);
   };
   
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);
  return (
    <header className='flex fixed bg-dubraPrimary w-full top-0 outline-1 outline-color-dubraText px-[15vw] py-3 justify-between opacity-100'>
      <img src={LogoSF} alt="" className='w-50 pe-10' />
        <NavigationMenu className='items-center'>
            
            <NavigationMenuList className=''>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a href="#">
                          <span className="relative cursor-pointer after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-[#e9f2ef] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                            INICIO
                          </span>
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a href='#'>
                          <span className="relative cursor-pointer after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-[#e9f2ef] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                          SOBRE NOSOTROS
                          </span>
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="" className='px-4 bg-dubraSecondaryHover font-bold'>INGRESAR</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </header>
        
  )
}

export default Header
