import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import MenuDesk from './components/menu/desktop/menudesk'
import Footer from './components/footer/desktop/footer'
import Card1 from './components/cardsHome/card1'
import Cats from './pages/cats/cats'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Doar from './pages/doar/doar'
import Ajudar from './pages/ajudar/ajudar'

function App() {
  const [Name, setName] = useState(null)

  useEffect(() => {
    const nome = window.prompt('Olá, Diga seu nome:');
    /^[A-Za-z\s]+$/.test(nome) ? (setName(nome)) : (alert('Nome Inválido! Digite apenas letras.'))
  },[])

  return (
    <>
      <Router>
      <MenuDesk />
      <Routes>
      <Card1 nome={Name}/>
        <Route path="/cats" element={<Cats/>} />
        <Route path="/doar" element={<Doar/>} />
        <Route path="/ajudar" element={<Ajudar/>} />
      </Routes>
      <Footer />
      </Router>
   
    </>
  )
}

export default App
