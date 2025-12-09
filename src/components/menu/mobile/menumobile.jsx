import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Context } from "../../../context/UserContext";

const MenuMobile = () => {
  const [mobile, setMobile] = useState(false);
  const { user, isAutenticado, handleLogout } = useContext(Context);
  const backend = import.meta.env.VITE_BACKEND_API;
  const toggleMenu = () => {
    setMobile(!mobile);
  };

  return (
    <nav className={styles.nav}>
      <img src="/clickcat/marca.svg" alt="" />
      <div className={styles.MenuMobile} onClick={toggleMenu}>
        {user?.foto && <img src={`${backend}/images/users/${user.foto}`}></img>}
        {mobile ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        <ul style={{ display: mobile ? "flex" : "none" }}>
          {isAutenticado ? (
            <>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/cats">
                <li>Adotar</li>
              </Link>
              <Link to="/doar">
                <li>Doar</li>
              </Link>
              <Link to="/conta">
                <li>Minha conta</li>
              </Link>
              <Link to="/ajudar">
                <li>Ajudar</li>
              </Link>

              <li onClick={handleLogout}>Sair</li>
            </>
          ) : (
            <>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/cats">
                <li>Adotar</li>
              </Link>
              <Link to="/ajudar">
                <li>Ajudar</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MenuMobile;
