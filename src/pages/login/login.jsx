import { useContext, useState } from "react";
import styles from "./style.module.css";
import { Context } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { handleLogin } = useContext(Context);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const dados = {
      email,
      senha,
    };

    handleLogin(dados);
  }

  function irPara() {
    navigate(`/registrar`);
  }

  return (
    <main>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit} method="POST">
          <div className="formContent">
            <label htmlFor="">E-mail</label>
            <div className="input-container">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="formContent">
            <label htmlFor="">Senha</label>
            <div className="input-container">
              <input
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                name="senha"
              />
            </div>
          </div>
          <button className="cadastrar" type="submit">
            Entrar
          </button>
          <button className="cadastrar" type="button" onClick={irPara}>
            Cadastrar-se
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
