import useFlashMessage from "./useFlashMessage";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

function useAuth() {
  const navigate = useNavigate();

  const { setFlashMessage } = useFlashMessage();

  async function registrar(usuario) {
    let msgTxt = "Cadastro realizado com sucesso!";
    let msgType = "success";

    try {
      const res = await api.post(`/users/cadastrar`, usuario, {
        withCredentials: true,
      });

      const data = await res.data;

      setFlashMessage(msgTxt, msgType);
      navigate("/");
      return data;
    } catch (error) {
      const data = error.response.data;
      setFlashMessage(data, "error");
      console.error("Erro ao atualizar email:", error);
      return null;
    }
  }

  async function logar(usuario) {
    try {
      const res = await api.post("/users/login", usuario, {
        withCredentials: true,
      });

      const data = await res.data;

      navigate("/cats");

      setFlashMessage(data.message, "success");
      return data;
    } catch (error) {
      const data = error.response.data;
      setFlashMessage(data.message, "error");
      console.error("Erro ao atualizar email:", error);
      return null;
    }
  }

  async function atualizar(id, dados) {
    try {
      const res = await api.patch(`/users/editar/${id}`, dados, {
        withCredentials: true,
      });
      const data = await res.data;
      setFlashMessage(data.message, "success");
    } catch (error) {
      const data = error.response.data;
      setFlashMessage(data.message, "error");
      console.error("Erro ao atualizar email:", error);
      return null;
    }
  }

  async function atualizarSenha(id, dados) {
    try {
      const res = await api.patch(`/users/editar/configuracoes/${id}`, dados, {
        withCredentials: true,
      });

      const data = res.data;
      setFlashMessage(data.message, "success");
    } catch (error) {
      const data = error.response.data;
      setFlashMessage(data.message, "error");
      console.error("Erro ao atualizar email:", error);
      return null;
    }
  }

  async function atualizarEmail(id, dados) {
    try {
      const res = await api.patch(`/users/editar/configuracoes/${id}`, dados, {
        withCredentials: true,
      });

      const data = res.data;
      setFlashMessage(data.message, "success");
    } catch (error) {
      const data = error.response.data;
      setFlashMessage(data.message, "error");
      console.error("Erro ao atualizar email:", error);
      return null;
    }
  }

  async function excluirConta(dados) {
    try {
      const res = await api.delete(`users/excluir/`, {
        data: dados,
        withCredentials: true,
      });
      const data = res.data;
      setFlashMessage(data.message, "success");
      return data;
    } catch (error) {
      const data = error.response.data;
      setFlashMessage(data.message, "error");
      console.error("Erro ao atualizar email:", error);
      return null;
    }
  }

  async function logoutFunction() {
    const res = await api.post("/users/logout", { withCredentials: true });

    const data = res.data;

    setFlashMessage(data.message, "success");
    navigate("/login");
    return data;
  }

  return {
    registrar,
    logar,
    atualizar,
    atualizarSenha,
    atualizarEmail,
    logoutFunction,
    excluirConta,
  };
}

export default useAuth;
