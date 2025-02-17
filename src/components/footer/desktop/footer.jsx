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
                <div className="footerItem">
                    <p className="footerTitle">
                        Adoção
                    </p>              
                    <span onClick={openModalTermo}>Termo de Adoção</span>
                </div>
                <div className="footerItem">
                    <p className="footerTitle">
                        Doar
                    </p>
                    <Link to="doar">
                    <span>Cadastrar um Gatito</span>
                    </Link>
                </div>
                <div className="footerItem">
                    <div className="footerSocial">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                    <img src="/clickcat/marcablack.svg" alt="" />
                </div>
                <div className="footerItem">
                    <p className="footerTitle">
                        Colabore
                    </p>
                    <Link to="ajudar">
                        <span>Doar valor</span>
                    </Link>
                </div>
                <div className="footerItem">
                    <p className="footerTitle">
                        Divulgue
                    </p>
                    <i class="bi bi-send" onClick={handleCopy}></i>
                </div>
            </div>
            {modalTermoOpen && <Termo modalTermoOpen={modalTermoOpen} closeModalTermo={closeModalTermo} />}
        </footer>
    )
}

export default Footer