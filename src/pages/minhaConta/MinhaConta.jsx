import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/UserContext";

import styles from "./styles.module.css";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { CatContext } from "../../context/CatContext";

function MinhaConta() {
  const { user } = useContext(Context);
  const { cat, setCat, handleExcluir, handleConcluir } = useContext(CatContext);
  const [meusGatos, setMeusGatos] = useState(null);
  const [naoAdotados, setNaoAdotados] = useState(null);
  const [adotados, setAdotados] = useState(null);
  const backend = import.meta.env.VITE_BACKEND_API;

  async function buscarGatos() {
    const res = await api.get(`/pets/meuspets`);
    const data = res.data;
    setMeusGatos(data);
    setNaoAdotados(data.filter((gato) => gato.adotado === false));
    setAdotados(data.filter((gato) => gato.adotado === true));
    console.log(data);
  }
  async function excluir(id) {
    await handleExcluir(id);

    setMeusGatos((prev) => prev.filter((gato) => gato._id !== id));
  }

  async function concluir(id) {
    await handleConcluir(id);
    setMeusGatos((prev) => prev.filter((gato) => gato.id !== id));
  }

  useEffect(() => {
    buscarGatos();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.sectionUsuario}>
          {user?.foto ? (
            <img src={`${backend}/images/users/${user.foto}`} alt={user.nome} />
          ) : (
            <i className="bi bi-person-circle"></i>
          )}

          <div className={styles.usuarioDados}>
            <h2>{user?.nome}</h2>
            <Link to={`/perfil`}>Editar perfil</Link>
          </div>
        </section>
        <section className={styles.sectionGatos}>
          <span>Meus gatos para adoção</span>
          <ul>
            {naoAdotados && naoAdotados.length > 0 ? (
              naoAdotados.map((gato) => (
                <li key={gato._id}>
                  {gato.nome}
                  <div className={styles.containerLinks}>
                    {gato.adotante && (
                      <i
                        onClick={() => {
                          concluir(gato._id);
                        }}
                      >
                        Concluir Adoção para {gato.adotante.nome}
                      </i>
                    )}
                    <Link
                      to={`/cats/editar/${gato._id}`}
                      onClick={() => setCat(gato)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <i
                      className="bi bi-trash-fill"
                      onClick={() => excluir(gato._id)}
                    ></i>
                  </div>
                </li>
              ))
            ) : (
              <span className={styles.stats}>
                Você não possui pets cadastrados para adoção!
              </span>
            )}
          </ul>
        </section>
        <section className={styles.sectionGatos}>
          <span>Histórico de doação</span>
          <ul>
            {meusGatos && adotados.length > 0 ? (
              adotados.map((gato) => (
                <li key={gato._id}>
                  {gato.nome}
                  <div className={styles.containerLinks}></div>
                </li>
              ))
            ) : (
              <span className={styles.stats}>
                Você ainda não doou nenhum pet!
              </span>
            )}
          </ul>
        </section>
      </main>
    </>
  );
}

export default MinhaConta;
