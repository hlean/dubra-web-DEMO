import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import favicon from './assets/favicon.ico'
import './App.css'
import ServiceCard from './components/ServiceCard'
import { FileText, History, Hop, PackageOpen, Truck } from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={favicon} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='flex flex-row gap-4 justify-center mb-4'>

        <ServiceCard
        title={"Service 1"}
        content={"Content 1"}
        icon={<Hop />}
        bg={"bg-dubraPrimary"}>

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

      <div className='flex flex-row gap-4 bg-gray-200 py-60 px-4'>

        <ServiceCard
        title={"Gestion de Pedidos"}
        content={"Ingrese y gestione sus pedidos de forma sencilla"}
        icon={<PackageOpen className='color-dubraSecondary'/>}
        bg={"bg-dubraPrimary"}>

        </ServiceCard>

        <ServiceCard
        title={"Service 2"}
        content={"Content 2"}
        icon={<Truck className='color-dubraPrimary'/>}
        bg={"bg-dubraSecondary"}>
          

        </ServiceCard>

        <ServiceCard
        title={"Service 3"}
        content={"Content 3"}
        icon={<History className='color-dubraSecondary'/>}
        bg={"bg-dubraWhite"}>

        </ServiceCard>
        
        <ServiceCard
        title={"Service 3"}
        content={"Content 3"}
        icon={<FileText className='color-dubraPrimary'/>}
        bg={"bg-dubraWhite color-dubraSecondary"}>

        </ServiceCard>

        </div>
    </>
  )
}

export default App
