import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { CatContext } from "../../context/CatContext";
import usePet from "../../hooks/usePet";
import api from "../../utils/api";

function Cats() {
  const [pets, setPets] = useState([]);
  const { converterIdade } = usePet();
  const { setCat } = useContext(CatContext);

  const ambiente = import.meta.env.VITE_BACKEND_API;

  async function buscarPet() {
    const res = await api.get("/pets", { withCredentials: true });
    const data = res.data;
    setPets(data);
  }

  useEffect(() => {
    buscarPet();
  }, []);

  return (
    <section className={styles.section}>
      {pets.length == 0 ||
        (!pets && (
          <span className={styles.vazio}>
            Ainda não existe nenhum pet cadastrado!
          </span>
        ))}
      <ul className={styles.ul}>
        {pets &&
          pets.map((cat, index) => {
            const resultado = converterIdade(cat.idade);
            return (
              <li key={index} onClick={() => setCat(cat)}>
                <Link to={`/cats/${cat._id}`}>
                  <img
                    src={
                      cat.fotos && cat.fotos.length > 0
                        ? `${ambiente}/images/pets/${cat.fotos[0]}`
                        : "/avatar.png"
                    }
                    alt=""
                  />
                  <div className={styles.caracteristicas}>
                    <h2>{cat.nome}</h2>
                    <p>
                      Idade:{" "}
                      {resultado.anos
                        ? `${resultado.idade} anos`
                        : `${resultado.idade} meses`}
                    </p>
                    <p>Cor: {cat.cor}</p>
                    <p>Peso: {cat.peso}(Kg)</p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default Cats;
