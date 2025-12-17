import api from "../utils/api";
import useFlashMessage from "./useFlashMessage";

function usePet() {
  const { setFlashMessage } = useFlashMessage();
  async function cadastrar(pet) {
    try {
      const res = await api.post("pets/cadastrar", pet, {
        withCredentials: true,
      });

      const data = await res.data;
      setFlashMessage(data.message, "success");
      return data;
    } catch (err) {
      const msg =
        err.response?.data?.message || "Erro de conexão com o servidor";
      setFlashMessage(msg, "error");
      console.error("Erro em logar:", err);
      return null;
    }
  }

  function converterIdade(numero) {
    let idade = 0;
    let anos = false;
    if (numero > 12) {
      idade = numero / 12;
      anos = true;
    } else {
      idade = numero;
      anos = false;
    }

    return { idade, anos };
  }

  async function atualizar(pet, formData) {
    try {
      const res = await api.patch(`pets/${pet}`, formData, {
        withCredentials: true,
      });
      const data = res.data;
      setFlashMessage(data.message, "success");
      return data;
    } catch (err) {
      console.error(err);
      setFlashMessage(err.message, "error");
    }
  }

  async function excluir(pet) {
    try {
      const res = await api.delete(`pets/${pet}`, { withCredentials: true });
      const data = res.data;
      setFlashMessage(data.message, `success`);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  }

  async function adotar(petId) {
    try {
      const res = await api.patch(
        `pets/agendar/${petId}`,
        {},
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      setFlashMessage(data.message, `success`);
    } catch (err) {
      const msg = err.response.data.message;
      console.error(err);
      console.error(err.message);
      setFlashMessage(msg, "error");
    }
  }

  async function concluir(petId) {
    try {
      const res = await api.put(
        `pets/concluir/${petId}`,
        {},
        { withCredentials: true }
      );
      const data = await res.data;
      setFlashMessage(data.message, `success`);
    } catch (err) {
      const message = err.data.message;
      console.error(message);
    }
  }

  return { cadastrar, atualizar, converterIdade, excluir, adotar, concluir };
}

export default usePet;
