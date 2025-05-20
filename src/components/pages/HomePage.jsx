import React from 'react'
import HeroSection from '../HeroSection'
import ServiceCard from '../ServiceCard'
import camioneta from '@/assets/camionetaFiorino.jpg'
import { Truck, FileText, PackageOpen, History, Rat } from 'lucide-react'
import TrackingInputGroup from '../TrackingInputGroup'
import CardGrid from '../CardGrid'
import { Button } from '../ui/button'
import Header from '../Header'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <div>
        <HeroSection
        imageSrc={camioneta}
        title={'SEGUÍ TU ENVÍO'}
        subtitle={'Ingresando tu número de envío, conoce el estado de tu pedido.'}
        extraComponent={<TrackingInputGroup/>}
        background={'bg-dubraPrimary/80'}
        textColor={'text-dubraText'}
        centerContent={true}/>

        <HeroSection
        title={'GESTIONA TU PEDIDO CON NOSOTROS'}
        background={'bg-dubraWhite'}
        textColor={'text-dubraPrimary'}
        customHeight='h-fit'
        extraComponent={
          <div className='flex h-full pb-5 flex-col justify-center items-center'>
            <CardGrid> 
              <ServiceCard
              title={"Seguimiento de pedidos"}
              content={"Conozca la ubicación y estado de sus paquetes en todo momento."}
              icon={<Truck className='text-dubraSecondary'/>}
              background={"bg-dubraPrimary"}>
              </ServiceCard>

              <ServiceCard
              title={"Gestión de pedidos"}
              content={"Ingrese y gestione pedidos de forma sencilla e intuitiva."}
              icon={<PackageOpen className='text-dubraSecondary'/>}
              background={"bg-dubraPrimary"}>
              </ServiceCard>

              <ServiceCard
              title={"Historial de pedidos"}
              content={"Accede a un registro completo de todos sus pedidos anteriores."}
              icon={<History className='text-dubraSecondary'/>}>
              </ServiceCard>

              <ServiceCard
              title={"Documentación digital"}
              content={"Gestione comprobantes y documentación de manera digital."}
              icon={<FileText className='text-dubraSecondary'/>}
              background={'outline-1 outline-dubraSecondary'}>
              </ServiceCard>

            </CardGrid>
            <Button className='md:text-3xl xs:text-sm font-bold bg-dubraSecondary hover:bg-dubraSecondary/80 xs:w-2/3 2xl:w-1/3 py-8 mt-5 '>PROGRAMAR UN ENVÍO</Button>
          </div>}/>

        <HeroSection
        title={'NUESTRA MISIÓN'}
        extraComponent={
        <div className='text-center text-xl md:text-2xl my-5'>
          <p>Ofrecemos servicio de transporte de mercadería confiable y eficiente para empresas que necesiten enviar o recibir paquetes en el día.
           <br/> Buscamos ser el nexo entre nuestros clientes, uniendo Montevideo y Ciudad de la Costa.</p>
        </div>}
        background={'bg-dubraPrimary'}
        customHeight='h-fit'/>

        <HeroSection
        title={'¿POR QUÉ ELEGIRNOS?'}
        background={'bg-dubraWhite'}
        textColor={'text-dubraPrimary'}
        customHeight='h-fit'
        extraComponent={
          <div className='flex h-full pb-5 flex-col justify-center items-center'>
            <CardGrid> 
              <ServiceCard
              title={"FLOTA MODERNA"}
              content={"Vehículos de última generación para un servicio óptimo"}
              icon={<Truck className='text-dubraSecondary'/>}
              background={"bg-dubraPrimary"}>
              </ServiceCard>

              <ServiceCard
              title={"TRAZABILIDAD"}
              content={"Seguimiento en tiempo real de sus envíos"}
              icon={<PackageOpen className='text-dubraSecondary'/>}
              background={"bg-dubraPrimary"}>
              </ServiceCard>

              <ServiceCard
              title={"EFICIENCIA"}
              content={"Optimización de rutas y recursos para la mejor relación costo-beneficio"}
              icon={<History className='text-dubraSecondary'/>}>
              </ServiceCard>

              <ServiceCard
              title={"EQUIPO EXPERTO"}
              content={"Personal calificado y con amplia experiencia en logística"}
              icon={<FileText className='text-dubraSecondary'/>}
              background={'bg-dubraWhite outline-1 outline-dubraPrimary'}>
              </ServiceCard>

            </CardGrid>
          </div>}/>
    </div>
  )
}

export default HomePage
