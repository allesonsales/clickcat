import { useContext, useState } from "react";
import { CatContext } from "../../../context/CatContext";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function EditarGato() {
  const { cat, handleAtualizar } = useContext(CatContext);
  const [nome, setNome] = useState(cat.nome);
  const [idade, setIdade] = useState(cat.idade);
  const [foto, setFoto] = useState(cat.fotos);
  const [preview, setPreview] = useState(null);
  const [arquivo, setArquivo] = useState(null);
  const [peso, setPeso] = useState(cat.peso);
  const [cor, setCor] = useState(cat.cor);
  const [historia, setHistoria] = useState(cat.historia);
  const [temperamento, setTemperamento] = useState(cat.temperamento);

  const ambiente = import.meta.env.VITE_BACKEND_API;

  const navigate = useNavigate();

  function voltar() {
    navigate(-1);
  }

  const handleTemperamento = (e) => {
    const options = Array.from(e.target.selectedOptions);
    if (options.length > 3) {
      e.target.options[e.target.selectedIndex].selected = false;
      return;
    }

    let values = Array.from(options).map((option) => option.value);

    setTemperamento(values);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setArquivo(file);
      setPreview(fileURL);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("idade", idade);

    formData.append("peso", peso);
    formData.append("tipo", 1);
    formData.append("cor", cor);
    formData.append("historia", historia);
    formData.append("temperamento", JSON.stringify(temperamento));

    if (arquivo) {
      formData.append("fotos", arquivo);
    }

    handleAtualizar(cat._id, formData);
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.top}>
          <i className="bi bi-arrow-left-circle-fill" onClick={voltar}></i>
          <img
            src={
              preview
                ? preview
                : foto && foto.length > 0
                ? `${ambiente}/images/pets/${foto[0]}`
                : "/clickcat/avatar.png"
            }
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formContent">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              placeholder="Como chama o gatinho?"
              value={nome}
              id="nome"
              aria-label="nome"
              pattern="[A-Za-záàãâäéèêíïóôõúüçÁÀÃÂÄÉÈÊÍÏÓÔÕÚÜÇ]+"
              required
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="formContent">
            <div className="formContentText">
              <label>Idade:</label>
            </div>
            <input
              type="number"
              min="1"
              value={idade}
              placeholder="Informe a idade em meses"
              aria-label="idade"
              step="1"
              required
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>
          <div className="formContent">
            <div className="formContentText">
              <label>Peso:</label>
            </div>
            <input
              type="number"
              value={peso}
              min="1"
              max="12"
              placeholder="Informe o peso"
              id="peso"
              name="peso"
              aria-label="peso"
              step="1"
              required
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
          <div className="formContent">
            <label>Cor:</label>
            <input
              type="text"
              name="cor"
              aria-label="cor"
              placeholder="Informe a cor"
              value={cor}
              required
              onChange={(e) => setCor(e.target.value)}
            />
          </div>
          <div className="formContent">
            <label>História:</label>
            <input
              type="text"
              id="historia"
              name="historia"
              value={historia}
              aria-label="historia"
              placeholder="Conte uma breve história"
              required
              onChange={(e) => setHistoria(e.target.value)}
            />
          </div>
          <div className="formContent">
            <div className="formContentText">
              <label>Temperamento:</label>
              <small>Escolha até 3 (segure o ctrl)</small>
            </div>
            <select
              name="Temperamento"
              multiple
              aria-label="temperamento, escolha 3"
              value={temperamento}
              onChange={handleTemperamento}
              required
            >
              <option value="Agitado">Agitado</option>
              <option value="Atenta">Atento</option>
              <option value="Brincalhão">Brincalhão</option>
              <option value="Calmo">Calmo</option>
              <option value="Curioso">Curioso</option>
              <option value="Explorador">Explorador</option>
              <option value="Independente">Independente</option>
              <option value="Introspectivo">Introspectivo</option>
              <option value="Protetora">Protetora</option>
            </select>
          </div>
          <div className="formContent">
            <label>Foto:</label>
            <label htmlFor="foto" className="cadastrar">
              Escolher arquivo
            </label>
            <input
              type="file"
              id="foto"
              aria-label="foto"
              accept="image/*"
              onChange={handleFile}
              style={{ display: "none" }}
            />
          </div>
          <button className="cadastrar" type="submit">
            Atualizar
          </button>
        </form>
      </section>
    </>
  );
}

export default EditarGato;
