import { Routes, Route } from "react-router-dom";
import Card1 from "./components/cardsHome/card1";
import Cats from "./pages/cats/cats";
import Ajudar from "./pages/ajudar/ajudar";
import Doar from "./pages/doar/doar";
import CatDetails from "./pages/cats/detail/catDetail";
import Login from "./pages/login/login";
import Registrar from "./pages/registrar/registrar";
import { useContext } from "react";
import { Context } from "./context/UserContext";
import PrivateRoute from "./privateRoute";
import Perfil from "./pages/perfil/perfil";
import MinhaConta from "./pages/minhaConta/MinhaConta";
import EditarGato from "./pages/minhaConta/editarGato/EditarGato";

const AppRoute = () => {
  const { user, isAutenticado } = useContext(Context);

  return (
    <Routes>
      <Route path="/" element={<Card1 nome={user?.nome} />} />
      <Route path="/cats/:id" element={<CatDetails />} />
      <Route
        path="/cats/editar/:id"
        element={
          <PrivateRoute>
            <EditarGato />
          </PrivateRoute>
        }
      />
      <Route path="/cats" element={<Cats />} />
      <Route path="/ajudar" element={<Ajudar />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route
        path="/conta"
        element={
          <PrivateRoute>
            <MinhaConta />
          </PrivateRoute>
        }
      />
      <Route
        path="/doar"
        element={
          <PrivateRoute>
            <Doar />
          </PrivateRoute>
        }
      />
      <Route
        path="/registrar"
        element={isAutenticado ? <MinhaConta /> : <Registrar />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoute;
