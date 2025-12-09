import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../utils/api";

const Context = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAutenticado, setIsAutenticado] = useState(false);
  const [senha, setSenha] = useState(null);

  useEffect(() => {
    async function verificarLogin() {
      try {
        const res = await api.get("/users/check", { withCredentials: true });
        const data = res.data;

        console.log("veriificar", res);

        if (res.status === 200) {
          setIsAutenticado(true);
          setUser(data.user);
        } else {
          setIsAutenticado(false);
        }
      } catch (err) {
        console.log(err);
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
      console.log(data.message);
      return;
    }

    console.log("Login realizado:", data);
    setUser(data.user);
    console.log("usuario login", user);
    setIsAutenticado(true);
    localStorage.setItem("user", user);
  }

  async function handleRegistrar(dados) {
    const data = await registrar(dados);

    if (!data) {
      console.log(data.message);
      return;
    }

    console.log("Registrado", data);
    setIsAutenticado(true);
    setUser(data.user);
  }

  async function handleAtualizar(dados) {
    const data = await atualizar(user.id, dados);

    console.log("atualizado", data);
  }

  async function handleAtualizarSenha(dados) {
    const data = await atualizarSenha(user.id, dados);

    console.log("senha atualizada", data);
  }

  async function handleAtualizarEmail(dados) {
    const data = await atualizarEmail(user.id, dados);

    console.log("email atualizado", data);
  }

  async function handleExcluirConta() {
    const dados = { senha: senha, id: user.id };
    const data = await excluirConta(dados);

    if (!data) {
      return;
    }

    setIsAutenticado(false);
    setUser(null);
  }

  async function handleLogout() {
    const data = await logoutFunction();
    console.log("Logout");

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
