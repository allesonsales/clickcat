import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const Context = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAutenticado, setIsAutenticado] = useState(false);
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function verificarLogin() {
      try {
        const res = await api.get("/users/check", { withCredentials: true });
        const data = res.data;

        if (res.status === 200) {
          setIsAutenticado(true);
          setUser(data.user);
        } else {
          setIsAutenticado(false);
        }
      } catch (err) {
        console.error(err);
      }
    }

    verificarLogin();
  }, []);

  const {
    registrar,
    logar,
    atualizar,
    atualizarSenha,
    atualizarEmail,
    logoutFunction,
    excluirConta,
  } = useAuth();
  //Chamamos todas as funções que existem no useAuth

  async function handleLogin(dados) {
    const data = await logar(dados);

    if (!data) {
      return;
    }
    setUser(data.user);
    setIsAutenticado(true);
    localStorage.setItem("user", JSON.stringify(user));
  }

  async function handleRegistrar(dados) {
    const data = await registrar(dados);

    if (!data) {
      return;
    }

    setIsAutenticado(true);
    setUser(data.user);

    navigate("/");
  }

  async function handleAtualizar(dados) {
    const data = await atualizar(user.id, dados);

    if (!data) {
      return;
    }
  }

  async function handleAtualizarSenha(dados) {
    const data = await atualizarSenha(user.id, dados);

    if (!data) {
      return;
    }
  }

  async function handleAtualizarEmail(dados) {
    const data = await atualizarEmail(user.id, dados);

    if (!data) {
      return;
    }
  }

  async function handleExcluirConta() {
    const dados = { senha: senha, id: user.id };
    const data = await excluirConta(dados);

    if (!data) {
      return;
    }

    await logoutFunction();

    setIsAutenticado(false);
    setUser(null);
  }

  async function handleLogout() {
    const data = await logoutFunction();

    if (!data) {
      return;
    }

    setIsAutenticado(false);
    setUser(null);
  }

  return (
    <Context.Provider
      value={{
        isAutenticado,
        setIsAutenticado,
        registrar,
        handleLogin,
        handleRegistrar,
        handleAtualizar,
        handleAtualizarSenha,
        handleAtualizarEmail,
        handleLogout,
        handleExcluirConta,
        setSenha,
        user,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };
