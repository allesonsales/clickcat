import './style.css'
import { Link } from 'react-router-dom'

const Card3 = ({ togglePrevious }) => {
    return (
        <section id='card3'>
            <div className="cardContainer">
                    <div className="cardPrevious" onClick={togglePrevious}>
                        <i class="bi bi-arrow-left-circle-fill"></i>
                    </div>
                <div className="cardContent">
                    <div className="cardContentText">
                        <div className="cardTitle">
                            Pensando bem...
                        </div>
                        <div className="cardText">
                        se você pode mudar o destino de um animal de rua, por que não faria isso?
                        </div>
                        <Link to="/cats">
                            <button className='adoto'>Eu topo!</button>
                        </Link>
                    </div>
                <div className="cardImage">
                    <img src="/clickcat/cat3.svg" alt="Adote" />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Card3