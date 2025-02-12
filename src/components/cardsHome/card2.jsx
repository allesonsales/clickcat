import './style.css'
import Card1 from './card1'
import { useEffect } from 'react'

const Card2 = ({ toggle, togglePrevious }) => {
    return (
        <section id='card2'>
            <div className="cardContainer">
                <div className="cardPrevious" onClick={togglePrevious}>
                    <i class="bi bi-arrow-left-circle-fill"></i>
                </div>
                <div className="cardContent">
                    <div className="cardTitle">
                        Não há recompensa maior
                    </div>
                    <div className="cardText">
                    do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho.
                    </div>
                </div>
                <div className="cardImage">
                    <img src="/clickcat/cat2.svg" alt="Adote" />
                </div>
                <div className="cardNext" onClick={toggle}>
                    <i class="bi bi-arrow-right-circle-fill"></i>
                </div>
            </div>
        </section>
    )
}

export default Card2