import { useContext, useState } from "react";
import styles from "../senha/styles.module.css";
import { Context } from "../../../context/UserContext";

function Excluir({ fecharModal }) {
  const { setSenha, handleExcluirConta } = useContext(Context);
  const [verSenha, setVerSenha] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    handleExcluirConta();
  }
  return (
    <>
      <section className={styles.modalBackground}>
        <i className="bi bi-x-circle-fill" onClick={() => fecharModal()}></i>
        <div className={styles.modalContent}>
          <form id={styles.formulario} onSubmit={handleSubmit}>
            <div className="formContent">
              <label>Digite sua senha:</label>
              <div className={styles.input}>
                <input
                  type={verSenha == "mostrarSenha" ? "text" : "password"}
                  id="senha"
                  aria-label="senha"
                  onChange={(e) => setSenha(e.target.value)}
                />
                <i
                  className={`${
                    verSenha === `mostrarSenha`
                      ? "bi bi-eye-slash-fill"
                      : "bi bi-eye-fill"
                  } ${styles.olho}`}
                  onClick={() => {
                    if (verSenha == null) {
                      setVerSenha(`mostrarSenha`);
                    } else {
                      setVerSenha(null);
                    }
                  }}
                ></i>
              </div>
            </div>
            <button className="cadastrar" type="submit">
              Excluir
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Excluir;
