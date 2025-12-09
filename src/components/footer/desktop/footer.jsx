import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("Link copiado com sucesso");
    });
  };

  return (
    <footer>
      <div className="footerContainer">
        <div className="itemLeft">
          <div className="footerItem">
            <p className="footerTitle">Adoção</p>
          </div>
          <div className="footerItem">
            <Link to="doar">
              <p className="footerTitle">Doar</p>
            </Link>
          </div>
        </div>
        <div className="footerItem">
          <div className="footerSocial">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-whatsapp"></i>
          </div>
        </div>
        <div className="itemRight">
          <div className="footerItem">
            <Link to="ajudar">
              <p className="footerTitle">Colabore</p>
            </Link>
          </div>
          <div className="footerItem" onClick={handleCopy}>
            <i className="bi bi-send"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
