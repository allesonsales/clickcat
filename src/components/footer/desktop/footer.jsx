import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css'
import Termo from '../../../pages/termo/termo';

const Footer = () => {
    
    const [modalTermoOpen, setModalTermoOpen] = useState(false)

    const handleCopy = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
        .then(() => {
            alert('Link copiado com sucesso')
        })
}

    const openModalTermo = () => setModalTermoOpen(true)
    const closeModalTermo = () => setModalTermoOpen(false)

    return (
        <footer>
            <div className="footerContainer">
                <div className="itemLeft">
                    <div className="footerItem" onClick={openModalTermo}>
                        <p className="footerTitle">
                            Adoção
                        </p>              
                        <span >Termo de Adoção</span>
                    </div>
                    <div className="footerItem">
                        <Link to="doar">
                        <p className="footerTitle">
                            Doar
                        </p>
                        <span>Cadastrar um Gatito</span>
                        </Link>
                    </div>
                </div>
                <div className="footerItem">
                    <div className="footerSocial">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                    <img className="marcablack" src="/clickcat/marcablack.svg" alt="ClickCat" />
                </div>
                <div className="itemRight">
                    <div className="footerItem">
                        <Link to="ajudar">
                        <p className="footerTitle">
                            Colabore
                        </p>
                            <span>Doar valor</span>
                        </Link>
                    </div>
                    <div className="footerItem" onClick={handleCopy}>
                        <p className="footerTitle">
                            Divulgue
                        </p>
                        <i class="bi bi-send"></i>
                    </div>
                </div>
            </div>
            {modalTermoOpen && <Termo modalTermoOpen={modalTermoOpen} closeModalTermo={closeModalTermo} />}
        </footer>
    )
}

export default Footer