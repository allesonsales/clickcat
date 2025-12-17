import { createContext, useState } from "react";
import usePet from "../hooks/usePet";

const CatContext = createContext();

function CatProvider({ children }) {
  const [cat, setCat] = useState(null);

  const { cadastrar, atualizar, excluir, adotar, concluir } = usePet();

  async function handleCadastrar(pet) {
    const data = await cadastrar(pet);

    if (!data) {
      return;
    }
  }

  async function handleConcluir(petId) {
    const data = await concluir(petId);

    if (!data) {
      return;
    }
  }

  async function handleAdotar(pet) {
    const data = await adotar(pet);

    if (!data) {
      return;
    }
  }

  async function handleAtualizar(pet, formData) {
    const data = await atualizar(pet, formData);

    if (!data) {
      return;
    }
  }

  async function handleExcluir(pet) {
    const data = await excluir(pet);

    if (!data) {
      return;
    }
  }

  return (
    <CatContext.Provider
      value={{
        cat,
        setCat,
        handleCadastrar,
        handleAtualizar,
        handleExcluir,
        handleAdotar,
        handleConcluir,
      }}
    >
      {children}
    </CatContext.Provider>
  );
}

export { CatContext, CatProvider };
