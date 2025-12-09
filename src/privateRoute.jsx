import { useContext } from "react";
import { Context } from "./context/UserContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAutenticado } = useContext(Context);

  return isAutenticado ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
