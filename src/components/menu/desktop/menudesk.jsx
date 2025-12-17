import { Link } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { Context } from "../../../context/UserContext";

const MenuDesk = () => {
  const { isAutenticado, handleLogout, user } = useContext(Context);
  const backend = import.meta.env.VITE_BACKEND_API;

  return (
    <nav className="MenuDesk">
      <div className="menuContainer">
        <div className="logoContainer">
          <img src="/marca.svg" alt="" />
        </div>
        <div className="MenuList">
          <Link to="/">Home</Link>
          <Link to="/cats">Adotar</Link>
          {isAutenticado && <Link to="/doar">Doar</Link>}
          {isAutenticado && <Link to="/conta">Meus Pets</Link>}
          <Link to="/ajudar">Ajudar</Link>

          {isAutenticado ? (
            <>
              <div className="userContainer">
                <Link to="/conta">
                  {user.foto ? (
                    <img src={`${backend}/images/users/${user.foto}`}></img>
                  ) : (
                    <i className="bi bi-person-circle"></i>
                  )}
                </Link>
                <button onClick={handleLogout}>Sair</button>
              </div>
            </>
          ) : (
            <>
              <div className="logarContainer">
                <Link to="/registrar">Criar conta</Link>
                <Link to="/login">Entrar</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MenuDesk;
