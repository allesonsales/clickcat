import { useContext, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { CatContext } from "../../context/CatContext";

const Doar = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [peso, setPeso] = useState(0);
  const [cor, setCor] = useState("");
  const [historia, setHistoria] = useState("");
  const [image, setImage] = useState(null);
  const [arquivo, setArquivo] = useState(null);
  const [temperamento, setTemperamento] = useState([]);
  const { handleCadastrar } = useContext(CatContext);
  const navigate = useNavigate();

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setArquivo(file);
      setImage(fileURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("idade", idade);
    formData.append("fotos", arquivo);
    formData.append("peso", peso);
    formData.append("tipo", 1);
    formData.append("cor", cor);
    formData.append("historia", historia);
    formData.append("temperamento", JSON.stringify(temperamento));

    handleCadastrar(formData);

    navigate("/cats");
  };

  const handleTemperamento = (e) => {
    const options = Array.from(e.target.selectedOptions);
    if (options.length > 3) {
      e.target.options[e.target.selectedIndex].selected = false;
      return;
    }

    let values = Array.from(options).map((option) => option.value);

    setTemperamento(values);
  };

  return (
    <form onSubmit={handleSubmit} id="formulario">
      <h2>Tem um gatinho pra doar? Aqui é o lugar!</h2>
      <div className="formContent">
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Como chama o gatinho?"
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
          aria-label="historia"
          placeholder="Conte uma breve história"
          required
          onChange={(e) => setHistoria(e.target.value)}
        />
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
      <div className="formContent">
        <div className="formContentText">
          <label>Temperamento:</label>
          <small>Escolha até 3 (segure o ctrl)</small>
        </div>
        <select
          name="Temperamento"
          multiple
          aria-label="temperamento, escolha 3"
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
      <button className="cadastrar" type="submit">
        {" "}
        Cadastrar{" "}
      </button>
    </form>
  );
};

export default Doar;
