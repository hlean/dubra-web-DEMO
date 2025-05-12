import './styles.css'
import './tailwind.css'
import ServiceCard from './components/ServiceCard'
import { FileText, History, Hop, PackageOpen, Truck } from 'lucide-react'
import Header from './components/Header'
import HomePage from './components/pages/HomePage'

function App() {

  return (
    <>
      <Header/>
      <HomePage/>
    </>
  )
}

export default App
