import { useState } from "react";
import styles from "../senha/styles.module.css";
import { useContext } from "react";
import { Context } from "../../../context/UserContext";

function Email({ fecharModal }) {
  const [emailAntigo, setemailAntigo] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [confirmarNovoEmail, setConfirmarNovoEmail] = useState("");

  const { handleAtualizarEmail } = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();

    const dados = {
      emailAntigo,
      novoEmail,
      confirmarNovoEmail,
    };

    handleAtualizarEmail(dados);
  }

  return (
    <>
      <section className={styles.modalBackground}>
        <i className="bi bi-x-circle-fill" onClick={() => fecharModal()}></i>
        <div className={styles.modalContent}>
          <form id={styles.formulario} onSubmit={handleSubmit}>
            <div className="formContent">
              <label>E-mail antigo:</label>
              <input
                type="email"
                id="emailAntigo"
                aria-label="emailAntigo"
                onChange={(e) => setemailAntigo(e.target.value)}
              />
            </div>
            <div className="formContent">
              <label>Novo e-mail:</label>
              <input
                type="email"
                id="novoEmail"
                aria-label="novoEmail"
                onChange={(e) => setNovoEmail(e.target.value)}
              />
            </div>
            <div className="formContent">
              <label>Confimar novo e-mail:</label>
              <input
                type="email"
                id="confirmarNovoEmail"
                aria-label="confirmarNovoEmail"
                onChange={(e) => setConfirmarNovoEmail(e.target.value)}
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

export default Email;
