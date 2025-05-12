import React from 'react'
import HeroSection from '../HeroSection'
import ServiceCard from '../ServiceCard'
import camioneta from '@/assets/camionetaFiorino.jpg'
import { Hop } from 'lucide-react'
import TrackingInputGroup from '../TrackingInputGroup'

const HomePage = () => {
  return (
    <div>
        <HeroSection
        imageSrc={camioneta}
        title={'SEGUÍ TU ENVÍO'}
        subtitle={'Ingresando tu número de envío, conoce el estado de tu pedido.'}
        extraComponent={<TrackingInputGroup/>}
        background={'bg-blue-950/80'}
        textColor={'color-dubraText'}
        centerContent={true}/>

        <HeroSection
        title={'GESTIONA TU PEDIDO CON NOSOTROS'}
        background={'bg-dubraWhite'}
        textColor={'color-dubraPrimary'}/>
      <div className='flex flex-row items-center gap-4 justify-center mb-4 w-full'>

        <ServiceCard
        title={"Service 1"}
        content={"Content 1a"}
        icon={<Hop />}
        background={"bg-dubraPrimary"}>

        </ServiceCard>

        <ServiceCard
        title={"Service 2"}
        description={"Description 2"}
        content={"Content 2"}
        icon={<Hop />}>

        </ServiceCard>

        <ServiceCard
        title={"Service 3"}
        content={"Content 3"}
        icon={<Hop />}>

        </ServiceCard>

      </div>
    </div>
  )
}

export default HomePage
