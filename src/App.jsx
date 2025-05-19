import './styles.css'
import './tailwind.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
