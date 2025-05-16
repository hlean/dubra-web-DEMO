import React from 'react'
import LogoSF from '@/assets/LogoSF.png'
import { Button } from './ui/button'
import { useState } from 'react'
import NavBar from './NavBar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='w-full fixed bg-dubraPrimary px-15 md:px-[15vh] outline-2 py-1 z-20'>
      <NavBar
      Logo={LogoSF}/>
    </header>
        
  )
}

export default Header
