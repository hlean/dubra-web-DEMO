import React from 'react'
import { NavigationMenu,
        NavigationMenuList,
        NavigationMenuItem,
        NavigationMenuLink
 } from './ui/navigation-menu'
import { Button } from './ui/button'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react'
import NavBarButton from './NavBarButton'



const NavBar = ({Logo}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (

    <div>
        <NavigationMenu className='justify-between min-w-full bg-dubraPrimary py-2'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href='#'>
                        <img src={Logo} alt="Dubra Transporte y Logística Logo" className='w-70 pe-10' />
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>

            
            <div className='flex items-center w-fit h-fit'> 

                <Button className='bg-dubraSecondaryHover p-0 md:sr-only ' onClick={() => setIsOpen(!isOpen)}>
                    <AlignJustify className='w-fit h-fit' size={28}/>
                </Button>

                <ul >
                    <div className='max-md:sr-only md:flex md:flex-row gap-5 items-center'> 

                        <NavBarButton text={'Inicio'} link={'#'}/>
                        <NavBarButton text={'Sobre Nosotros'} link={'#'}/>
                        <NavigationMenuItem>
                            <Button className='text-lg bg-dubraSecondaryHover p-3 font-bold'>
                                Iniciar Sesion
                            </Button>
                        </NavigationMenuItem>

                    </div>
                </ul>

            </div>


            
            
        </NavigationMenu>
        <div className={`absolute right-0 mt-2 w-48 bg-dubraSecondary rounded-lg shadow-lg md:sr-only ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} transition-all duration-300`}>
            <NavigationMenu>
                <ul className="py-2 mx-5">
                    <NavBarButton text={'Inicio'} link={'#'}/>
                    <NavBarButton text={'Sobre Nosotros'} link={'#'}/>
                </ul>
            </NavigationMenu>
        </div>
    </div>
  )
}

export default NavBar