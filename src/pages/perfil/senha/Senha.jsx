import { useState } from "react";
import styles from "./styles.module.css";
import { useContext } from "react";
import { Context } from "../../../context/UserContext";

function Senha({ fecharModal }) {
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");

  const { handleAtualizarSenha } = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("chamou");
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
              <input
                type="text"
                id="senhaAntiga"
                aria-label="senhaAntiga"
                onChange={(e) => setSenhaAntiga(e.target.value)}
              />
            </div>
            <div className="formContent">
              <label>Nova senha:</label>
              <input
                type="text"
                id="novaSenha"
                aria-label="novaSenha"
                onChange={(e) => setNovaSenha(e.target.value)}
              />
            </div>
            <div className="formContent">
              <label>Confimar nova senha:</label>
              <input
                type="text"
                id="confirmarNovaSenha"
                aria-label="confirmarNovaSenha"
                onChange={(e) => setConfirmarNovaSenha(e.target.value)}
              />
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
