import './style.css'

const Footer = () => {

const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
    .then(() => {
        alert('Link copiado com sucesso')
    })
}

    return (
        <footer>
            <div className="footerContainer">
                <div className="footerItem">
                    <span className="footerTitle">
                        Adoção
                    </span>
                    <a href="#">Termo de Adoção</a>
                </div>
                <div className="footerItem">
                    <span className="footerTitle">
                        Doar
                    </span>
                    <a href="#">Cadastrar um Gatito</a>
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
                    <span className="footerTitle">
                        Colabore
                    </span>
                    <a href="#">Doar valor</a>
                </div>
                <div className="footerItem">
                    <span className="footerTitle">
                        Divulgue
                    </span>
                    <i class="bi bi-send" onClick={handleCopy}></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer