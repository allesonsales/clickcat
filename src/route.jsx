import { Routes, Route } from "react-router-dom";
import Card1 from "./components/cardsHome/card1";
import Cats from "./pages/cats/cats";
import Ajudar from "./pages/ajudar/ajudar";
import Doar from "./pages/doar/doar";
import CatDetails from "./pages/cats/detail/catDetail";

const AppRoute = ({ nome, addCats, cat }) => {
  return (
    <Routes>
      <Route path="/cats/detail/:catName" element={<CatDetails cat={cat} />} />
      <Route path="/clickcat" element={<Card1 nome={nome} />} />
      <Route path="/cats" element={<Cats cat={cat} />} />
      <Route path="/ajudar" element={<Ajudar />} />
      <Route path="/doar" element={<Doar addCats={addCats} />} />
    </Routes>
  );
};

export default AppRoute;
