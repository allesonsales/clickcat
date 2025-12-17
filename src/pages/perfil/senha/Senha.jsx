import { useState } from "react";
import styles from "./styles.module.css";
import { useContext } from "react";
import { Context } from "../../../context/UserContext";

function Senha({ fecharModal }) {
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");
  const [verSenha, setVerSenha] = useState(null);

  const { handleAtualizarSenha } = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();

    const dados = {
      senhaAntiga,
      novaSenha,
      confirmarNovaSenha,
    };

    handleAtualizarSenha(dados);
  }
  return (
    <>
      <section className={styles.modalBackground}>
        <i className="bi bi-x-circle-fill" onClick={() => fecharModal()}></i>
        <div className={styles.modalContent}>
          <form id={styles.formulario} onSubmit={handleSubmit}>
            <div className="formContent">
              <label>Senha antiga:</label>
              <div className={styles.input}>
                <input
                  type={verSenha === "mostrarAntiga" ? "text" : "password"}
                  id="senhaAntiga"
                  aria-label="senhaAntiga"
                  onChange={(e) => setSenhaAntiga(e.target.value)}
                />
                <i
                  className={`${
                    verSenha === `mostrarAntiga`
                      ? "bi bi-eye-slash-fill"
                      : "bi bi-eye-fill"
                  } ${styles.olho}`}
                  onClick={() => {
                    if (
                      verSenha == null ||
                      verSenha == "mostrarConfirmacao" ||
                      verSenha == "mostrarSenha"
                    ) {
                      setVerSenha(`mostrarAntiga`);
                    } else if (verSenha == `mostrarAntiga`) {
                      setVerSenha(null);
                    }
                  }}
                ></i>
              </div>
            </div>
            <div className="formContent">
              <label>Nova senha:</label>
              <div className={styles.input}>
                <input
                  type={verSenha === "mostrarSenha" ? "text" : "password"}
                  id="novaSenha"
                  aria-label="novaSenha"
                  onChange={(e) => setNovaSenha(e.target.value)}
                />
                <i
                  className={`${
                    verSenha === `mostrarSenha`
                      ? "bi bi-eye-slash-fill"
                      : "bi bi-eye-fill"
                  } ${styles.olho}`}
                  onClick={() => {
                    if (
                      verSenha == null ||
                      verSenha == "mostrarConfirmacao" ||
                      verSenha == "mostrarAntiga"
                    ) {
                      setVerSenha(`mostrarSenha`);
                    } else if (verSenha == `mostrarSenha`) {
                      setVerSenha(null);
                    }
                  }}
                ></i>
              </div>
            </div>
            <div className="formContent">
              <label>Confimar nova senha:</label>
              <div className={styles.input}>
                <input
                  type={verSenha === "mostrarConfirmacao" ? "text" : "password"}
                  id="confirmarNovaSenha"
                  aria-label="confirmarNovaSenha"
                  onChange={(e) => setConfirmarNovaSenha(e.target.value)}
                />
                <i
                  className={`${
                    verSenha === `mostrarConfirmacao`
                      ? "bi bi-eye-slash-fill"
                      : "bi bi-eye-fill"
                  } ${styles.olho}`}
                  onClick={() => {
                    if (
                      verSenha == null ||
                      verSenha == "mostrarSenha" ||
                      verSenha == "mostrarAntiga"
                    ) {
                      setVerSenha(`mostrarConfirmacao`);
                    } else if (verSenha == `mostrarConfirmacao`) {
                      setVerSenha(null);
                    }
                  }}
                ></i>
              </div>
            </div>
            <button className="cadastrar" type="submit">
              Atualizar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Senha;
