import { useEffect } from "react";
import api from "../../utils/api";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/UserContext";
import styles from "./styles.module.css";
import Senha from "./senha/Senha";
import Email from "./email/Email";
import Excluir from "./excluir/Excluir";

function Perfil() {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState();
  const [preview, setPreview] = useState();
  const [nomeUsuario, setNomeUsuario] = useState();
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [trocar, setTrocar] = useState(null);
  const backend = import.meta.env.VITE_BACKEND_API;

  const { user, handleAtualizar } = useContext(Context);

  const fecharModal = () => {
    setTrocar(null);
  };

  useEffect(() => {
    async function buscarDados() {
      const res = await api.get(`/users/${user.id}`, {
        withCredentials: true,
      });
      const data = res.data;
      setNome(data.nome);
      setFoto(data?.foto);
      setNomeUsuario(data.nomeUsuario);
      setEmail(data.email);
      setTelefone(data.telefone);
    }

    buscarDados();
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("nomeUsuario", nomeUsuario);
    formData.append("email", email);
    formData.append("telefone", telefone);

    if (preview && typeof preview !== "string") {
      formData.append("foto", preview);
    }

    handleAtualizar(formData);
  }

  return (
    <>
      <form id={styles.formulario} onSubmit={handleSubmit}>
        {(foto || preview) && (
          <img
            src={
              preview
                ? URL.createObjectURL(preview)
                : `${backend}/images/users/${foto}`
            }
            alt="Preview"
          />
        )}
        <div className="formContent">
          <label htmlFor="foto">Foto:</label>
          <input
            type="file"
            name="foto"
            id="foto"
            accept="image/**"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPreview(file);
              }
            }}
          />
        </div>
        <div className="formContent">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            id="nome"
            aria-label="nome"
            onChange={(e) => setNome(e.target.value)}
            readOnly
          />
        </div>
        <div className="formContent">
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={nomeUsuario}
            placeholder={nomeUsuario}
            id="nomeUsuario"
            aria-label="nomeUsuario"
            readOnly
            onChange={(e) => setNomeUsuario(e.target.value)}
          />
        </div>
        <div className="formContent">
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            placeholder={telefone}
            id="telefone"
            aria-label="telefone"
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={() => setTrocar("email")}>
            Alterar e-mail
          </button>
          <button type="button" onClick={() => setTrocar("senha")}>
            Alterar senha
          </button>
          <button type="button" onClick={() => setTrocar("excluir")}>
            Excluir conta
          </button>
        </div>

        <button className="cadastrar" type="submit">
          Atualizar
        </button>
      </form>

      {trocar == "senha" ? (
        <Senha user={user} fecharModal={fecharModal} />
      ) : trocar === "email" ? (
        <Email fecharModal={fecharModal} />
      ) : trocar === "excluir" ? (
        <Excluir fecharModal={fecharModal} />
      ) : null}
    </>
  );
}

export default Perfil;
