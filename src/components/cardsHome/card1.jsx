import "./style.css";
import { useContext, useState } from "react";
import Card2 from "./card2";
import Card3 from "./card3";
import { Context } from "../../context/UserContext";

const Card1 = ({ nome }) => {
  const [showCard, setShowCard] = useState(1);
  const { user } = useContext(Context);

  const toggle = () => {
    if (showCard === 1) {
      setShowCard(2);
    } else if (showCard === 2) {
      setShowCard(3);
    } else {
      showCard(1);
    }
  };

  const togglePrevious = () => {
    showCard === 2 ? setShowCard(1) : setShowCard(2);
  };

  return showCard === 1 ? (
    <section id="card1">
      <div className="cardContainer">
        <div className="cardContent">
          <div className="cardContentText">
            <div className="cardTitle">
              <span>
                Olá, <b>{user ? user.nome.split(" ")[0] : "Visitante"}</b>
              </span>
              Por que adotar?
            </div>
            <div className="cardText">
              Existem milhares de gatinhos esperando um humano para chamar de
              seu.
            </div>
          </div>
          <div className="cardImage">
            <img src="/cat1.svg" alt="" />
          </div>
        </div>
        <div className="cardNext" onClick={toggle}>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </div>
      </div>
    </section>
  ) : showCard === 2 ? (
    <Card2 toggle={toggle} togglePrevious={togglePrevious} />
  ) : (
    <Card3 toggle={toggle} togglePrevious={togglePrevious} />
  );
};

export default Card1;
