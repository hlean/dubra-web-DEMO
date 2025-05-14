import React from 'react'
import { NavigationMenu,
        NavigationMenuList,
        NavigationMenuItem,
        NavigationMenuLink
 } from './ui/navigation-menu'
import LogoSF from '@/assets/LogoSF.png'
import { Button } from './ui/button'
import { useState } from 'react'
import { AlignJustify } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex fixed bg-dubraPrimary w-full top-0 outline-1 outline-color-dubraText px-[15vw] py-3 justify-between opacity-100 items-center'>
      <img src={LogoSF} alt="" className='w-65 pe-10'/>

            <Button className=" md:sr-only w-15 h-fit p-0 m-0" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                <AlignJustify className="w-fit h-fit"/>
            </Button>

        <NavigationMenu >
            <NavigationMenuList  className={`flex md:flex-row flex-col`} >
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a href="#">
                          <span className="text-lg relative cursor-pointer after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-[#e9f2ef] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                            INICIO
                          </span>
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a href='#'>
                          <span className="text-lg relative cursor-pointer after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-[#e9f2ef] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                          SOBRE NOSOTROS
                          </span>
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="" className='text-lg px-4 bg-dubraSecondaryHover font-bold'>INGRESAR</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </header>
        
  )
}

export default Header
