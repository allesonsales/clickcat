import { useContext } from "react";
import "./style.css";
import { CatContext } from "../../context/CatContext";
import { Context } from "../../context/UserContext";

const Termo = ({ fecharModal }) => {
  const { isAutenticado } = useContext(Context);
  const { cat } = useContext(CatContext);
  const { handleAdotar } = useContext(CatContext);

  return (
    <div className="modalBackground">
      <div className="modalContent">
        <i className="bi bi-x-circle-fill" onClick={() => fecharModal()}></i>
        {isAutenticado ? (
          <>
            <h2>Termo de Adoção</h2>
            <p>Compromissos do adotante: </p>
            <ul>
              <li>
                Garantir que o gato tenha acesso a alimentos de qualidade, água
                limpa e atendimento veterinário regular.
              </li>
              <li>
                Não realizar a venda ou doação do animal sem o consentimento da
                organização responsável.
              </li>
              <li>
                Castrar o gato, caso não tenha sido feito previamente, para
                evitar a superpopulação de animais.
              </li>
              <li>
                Proteger o gato de riscos, evitando situações que possam
                prejudicar sua saúde ou bem-estar.
              </li>
            </ul>
            <button
              onClick={() => {
                handleAdotar(cat._id);
              }}
            >
              Eu topo!
            </button>
          </>
        ) : (
          <h2>Faça o login para concluir a adoção!</h2>
        )}
      </div>
    </div>
  );
};

export default Termo;
