import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const TrackingInputGroup = () => {
  return (
    <div className='mt-5 flex gap-3 w-1/5 min-w-xs'>
        <Input className='bg-dubraWhite' placeholder='Ej: 123456789'></Input>
        <Button className=' bg-dubraSecondary hover:bg-dubraSecondary/80 font-bold px-4'>Seguir</Button>
    </div>
  )
}

export default TrackingInputGroup