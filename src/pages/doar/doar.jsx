import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

const Doar = ({addCats}) => {
    const [nome, setNome] = useState ('');
    const [idade, setIdade] = useState ('');
    const [historia, setHistoria] = useState ('');
    const [image, setImage] = useState (null);
    const [temperamento, setTemperamento] = useState([]);
    const navigate = useNavigate();

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setImage(fileURL)};
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dadosFormulario = {
            nome,
            idade,
            historia,
            image,
            caracteristicas: temperamento
        };

        addCats(dadosFormulario);

        navigate('/cats');
    };

    const handleTemperamento = (e) => {
        const options = e.target.selectedOptions;
        const values = Array.from(options).map(option => option.value);
        setTemperamento(values);
    };

    return (
        <form onSubmit={handleSubmit} id="ajudar">
            <h2>Tem um gatinho pra doar? Aqui é o lugar!</h2>
            <div className="formContent">
                <label>Nome:</label>
                <input type="text" placeholder="Como chama o gatinho?" id="name" aria-label='nome' pattern="[A-Za-záàãâäéèêíïóôõúüçÁÀÃÂÄÉÈÊÍÏÓÔÕÚÜÇ]+" required onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className="formContent">
                <div className="formContentText">
                    <label>Idade:</label>
                </div>
                <input type="number" min="1" max="12" placeholder='Idade em anos' aria-label='idade' step="1" required onChange={(e) => setIdade(e.target.value)}/>
            </div>
            <div className="formContent">
                <label>História:</label>
                <input type="text" id="historia" aria-label='historia' placeholder="Conte uma breve história sobre o gatinho..." required onChange={(e) => setHistoria(e.target.value)}/>
            </div>
            <div className="formContent">
                <label>Foto:</label>
                <label htmlFor="foto" className="cadastrar">Escolher arquivo</label>
                <input type="file" id="foto" aria-label='foto' required onChange={handleFile} style={{ display: 'none' }}/>
            </div>
            <div className="formContent">
                <div className="formContentText"> 
                    <label>Temperamento:</label>
                    <small>Escolha até 3 (segure o ctrl)</small>
                </div>
                <select name="Temperamento" multiple aria-label='temperamento, escolha 3' onChange={handleTemperamento} required>
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
            <button className='cadastrar' type='submit'> Cadastrar </button>
        </form>
    )
}

export default Doar