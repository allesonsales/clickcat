import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import MenuDesk from './components/menu/desktop/menudesk'
import Footer from './components/footer/desktop/footer'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import AppRoute from './route'


function App() {
  const [Name, setName] = useState(null)
  const [cat, setCat] = useState([]);

  useEffect(() => {
    let nome = window.prompt('Olá, Diga seu nome:');
    while (!/^[A-Za-z\s]+$/.test(nome)) {
      alert('Nome Inválido')
      nome = window.prompt('Olá, Diga seu nome:');
    }
    setName(nome)
  },[]);

  const addCats = (newCat) => {
    setCat((prevCats) => [...prevCats, newCat])
  };



  return (
    <>
      <div className="app-container">
        <Router>
          <MenuDesk />
          <div className="app-content">
            <AppRoute nome={Name} addCats={addCats} cat={cat}/>
          </div>
            <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
