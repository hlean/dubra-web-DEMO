import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const HeroSection = ({title, subtitle, extraComponent, imageSrc, background, textColor, centerContent}) => {
  return (
    <section className='flex h-175 w-full bg-cover bg-center justify-center items-center' style={{ backgroundImage: `url(${imageSrc})` }}>

    <div className={`w-full h-full p-5  ${background} flex `}>
        <div className={`w-full flex items-center ${centerContent? 'justify-center':'pt-5'} ${textColor} flex-col`}>
          <div>
            <p className='text-7xl text-center mb-3'>{title}</p>
            {subtitle && <p className='text-xl text-center'>{subtitle}</p>}
          </div>
            {extraComponent}
        </div>
    </div>

    </section>
  )
}

export default HeroSection