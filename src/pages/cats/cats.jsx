import { useEffect, useState } from 'react'
import './style.css'
import catsList from './cats.json'
import Footer from '../../components/footer/desktop/footer';

const Cats = ({cat}) => {
    const [catList, setCatlist] = useState(null);
    const [modalOpen, setModalopen] = useState(false);
    const [selectedCat, setSelectedCat]= useState(null);
    const [adopt, setAdopt] = useState(false);

    useEffect(()=> {
        if (catsList){
            setCatlist([...catsList, ...cat])
        } else {
            console.error(error)
        }
    },[cat]);
    
    const openModal = (cat) => {
        setSelectedCat(cat);
        setModalopen(true);
    }

    const closeModal = () => {
        setModalopen(false)
    }

    const openAdopt = () => {
      setAdopt(true)
    }

    const closeAdopt = () => {
      setAdopt(false)
    }

    return (
        <div className="containerList">
          {catList?.map(({ nome, idade, historia, caracteristicas, image }, index) => (
            <div key={index} className="catContainer" onClick={() => openModal({ nome, idade, historia, caracteristicas, image })}>
              <div className="catImage">
                <img src={image} alt={nome} />
              </div>
              <div className="catContent">
                <div className="catName">
                  <span>{nome},</span>
                  <span>{idade} anos</span>
                </div>
                <div className="catHistory">
                  <q>{historia}</q>
                </div>
                <div className="catChar">
                  {caracteristicas.map((caracteristica, index) => (
                    <span key={index}>{caracteristica}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
    
          {modalOpen && (
            <div className="modalBackground" onClick={closeModal}>
              <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <img src={selectedCat.image} alt={selectedCat.nome} />
                <h2>{selectedCat.nome}</h2>
                <span>Idade:</span>
                <p> {selectedCat.idade} anos</p>
                <span>História:</span><p> {selectedCat.historia}</p>
                <span>Temperamento</span><p> {selectedCat.caracteristicas.join(', ')}</p>
                <div className="buttons">
                  <button className='adoptCat' onClick={openAdopt}>Eu topo!</button>
                  <button className='closeCat' onClick={closeModal}>Fechar</button>
                </div>
              </div>
            </div>
          )}

          {adopt && (
            <div className="modalBackground" onClick={closeAdopt}>
              <div className="adoptContent">
                <div className="adoptContentText">
                  <h2>Parabéns!! </h2>
                  <div className="adoptcontentTextitem">
                    <span>Você acabou de receber muito amor e carinho!</span>
                    <i class="bi bi-chat-heart-fill"></i>
                  </div>
                </div>
                <button onClick={closeAdopt, closeModal}>Fechar</button>
              </div>
            </div>
          )}


        </div>
      );
    };

export default Cats