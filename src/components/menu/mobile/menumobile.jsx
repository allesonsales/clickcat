import './style.css'
import { useState } from "react"
import { Link } from 'react-router-dom'

const MenuMobile = () => {
    const [mobile, setMobile] = useState(false)

    const toggleMenu = () => {
        setMobile(!mobile)
    }

    return (
        <div className="MenuMobile" onClick={toggleMenu}>
                    {mobile ? (
                        <i className="bi bi-x"></i>
                    ) : (
                        <i className="bi bi-list"></i>
                    )}
                    <ul style={{ display: mobile ? 'flex' : 'none'}}>
                        <Link to="/clickcat">
                            <li>Home</li>
                        </Link>
                        <Link to="/cats">
                            <li>Adotar</li>
                        </Link>
                        <Link to="/doar">
                            <li>Doar</li>
                        </Link>
                        <Link to="/ajudar">
                            <li>Ajudar</li>
                        </Link>
                        
                    </ul>
        </div>
    )
}

export default MenuMobile
