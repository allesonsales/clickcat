import styles from "./style.module.css";
import { useContext, useEffect, useState } from "react";
import { CatContext } from "../../../context/CatContext";
import usePet from "../../../hooks/usePet";
import Termo from "../../termo/termo";

function CatDetail() {
  const { cat } = useContext(CatContext);
  const { converterIdade } = usePet();
  const resultado = converterIdade(cat.idade);
  const [abrirModal, setAbrirModal] = useState(false);

  const fecharModal = () => setAbrirModal(false);

  const backend = import.meta.env.VITE_BACKEND_API;

  useEffect(() => {
    console.log(cat);
  }, []);

  if (!cat) return <p>Nenhum gato selecionado.</p>;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <img
            src={
              cat.fotos && cat.fotos.length > 0
                ? `${backend}/images/pets/${cat.fotos[0]}`
                : "/clickcat/avatar.png"
            }
            alt=""
          />
        </div>
        <div className={styles.catContainer}>
          <h2>{cat.nome}</h2>
          <span>{cat.historia}</span>
          <p>
            <small>Idade: </small>
            {resultado.anos
              ? `${resultado.idade} anos`
              : `${resultado.idade} meses`}
          </p>
          <p>
            <small>Peso: </small>
            {cat.peso} kg
          </p>
          <div className={styles.flagContainer}>
            <small>Características: </small>
            {cat.temperamento.map((temperamento, i) => (
              <p key={i} className={styles.flag}>
                {temperamento}
              </p>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => setAbrirModal(true)}>
              <i className="bi bi-heart-fill"></i>
            </button>
          </div>
        </div>
      </section>
      {abrirModal && (
        <Termo abrirModal={abrirModal} fecharModal={fecharModal} />
      )}
    </>
  );
}

export default CatDetail;
