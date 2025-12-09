import { useContext, useState } from "react";
import styles from "./style.module.css";
import { Context } from "../../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { handleLogin } = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();

    const dados = {
      email,
      senha,
    };

    handleLogin(dados);
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
        </form>
      </div>
    </main>
  );
}

export default Login;
