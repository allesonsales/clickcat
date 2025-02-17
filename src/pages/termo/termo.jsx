import './style.css';

const Termo = ({ modalTermoOpen, closeModalTermo }) => {

    console.log('cheguei')
  return (
    <div className="modalBackground">
      <div className="modalContent">
        <h2>Termo de Adoção</h2>
        <p>Compromissos do adotante: </p>
        <ul>
            <li>Garantir que o gato tenha acesso a alimentos de qualidade, água limpa e atendimento veterinário regular.</li>
            <li>Não realizar a venda ou doação do animal sem o consentimento da organização responsável.</li>
            <li>Castrar o gato, caso não tenha sido feito previamente, para evitar a superpopulação de animais.</li>
            <li>Proteger o gato de riscos, evitando situações que possam prejudicar sua saúde ou bem-estar.</li>
        </ul>
        <button onClick={closeModalTermo}>Fechar</button>
      </div>
    </div>
  );
};

export default Termo;
