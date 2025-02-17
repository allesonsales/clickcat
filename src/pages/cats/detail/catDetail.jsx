import { useParams } from 'react-router-dom';
import './style.css';

const CatDetails = ({ cat }) => {
  const { catName } = useParams(); // Obtém o nome do gato da URL
  
  // Decodifica o nome do gato, caso ele tenha sido codificado na URL
  const decodedCatId = decodeURIComponent(catName).trim().toLowerCase();

  // Procura o gato correspondente ao nome (garantindo que a comparação seja insensível a maiúsculas/minúsculas)
  const selectedCat = cat.find((cat) => {
    console.log("Buscando gato com nome:", decodedCatId);
    console.log("Cat nome:", cat.nome.toLowerCase());
    return cat.nome.trim().toLowerCase() === decodedCatId;
  });

  if (!selectedCat) {
    return <p>Gato não encontrado</p>; // Exibe uma mensagem caso não encontre o gato
  }

  console.log("Lista de gatos recebida:", cat);

  return (
    <div className="catDetails">
      <h2>{selectedCat.nome}</h2>
      <img src={selectedCat.image} alt={selectedCat.nome} />
      <p>Idade: {selectedCat.idade} anos</p>
      <p>História: {selectedCat.historia}</p>
      <p>Temperamento: {selectedCat.caracteristicas.join(', ')}</p>
    </div>
  );
};

export default CatDetails;
