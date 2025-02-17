import { Link } from 'react-router-dom'
import './style.css'

const MenuDesk = () => {
    return (
        <nav className="MenuDesk">
            <div className="menuContainer">
                <div className="logoContainer">
                    <img src="/clickcat/marca.svg" alt="" />
                </div>
                <div className="MenuList">
                    <Link to="/clickcat">Home</Link>
                    <Link to="/cats">Gatitos</Link>
                    <Link to="/doar">Doar</Link>
                    <Link to="/ajudar">Ajudar</Link>
                </div>
            </div>
        </nav>
    )
}

export default MenuDesk