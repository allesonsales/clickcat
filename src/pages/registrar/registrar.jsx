import { useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import styles from "./styles.module.css";

function Registrar() {
  const [nome, setNome] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [verSenha, setVerSenha] = useState(null);
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const { handleRegistrar } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();

    const usuario = {
      nome,
      nomeUsuario,
      email,
      telefone,
      senha,
      confirmarSenha,
    };

    if (senha.length < 6) {
      setErro("tamanhoSenha");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("senha");
      return;
    }

    if (nome.split(" ").length < 2) {
      setErro("nomeCompleto");
      return;
    }

    handleRegistrar(usuario);
  }

  function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
      return valor
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return valor
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit} id="formulario">
          <div className="formContent">
            <label htmlFor="nome">Nome:</label>
            <input
              onChange={(e) => setNome(e.target.value)}
              type="text"
              name="nome"
              placeholder="Digite seu nome completo"
              className={erro == "nomeCompleto" ? styles.erroInput : ""}
            />
            {erro === "nomeCompleto" && (
              <span className={styles.erroSpan}>Digite o nome completo!</span>
            )}
          </div>
          <div className="formContent">
            <label htmlFor="nomeUsuario">Nome de Usuário:</label>
            <input
              onChange={(e) => setNomeUsuario(e.target.value)}
              type="text"
              name="nomeUsuario"
              placeholder="Escolha um nome de usuário"
            />
            {erro === "Nome de usuário já cadastrado no sistema." && (
              <span className={styles.erroSpan}>{erro}</span>
            )}
          </div>
          <div className="formContent">
            <label htmlFor="telefone">Telefone:</label>
            <input
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              type="text"
              name="telefone"
              maxLength={15}
              placeholder="(11)90000-000"
            />
          </div>
          <div className="formContent">
            <label htmlFor="email">E-mail:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Informe seu e-mail"
            />
            {erro == "E-mail já cadastrado no sistema." && (
              <span className={styles.erroSpan}>{erro}</span>
            )}
          </div>
          <div className="formContent">
            <label htmlFor="senha">Senha:</label>
            <div className={styles.input}>
              <input
                onChange={(e) => setSenha(e.target.value)}
                className={erro == "senha" ? styles.erroInput : ""}
                type={verSenha === `mostrarSenha` ? `text` : `password`}
                name="senha"
                placeholder="Crie uma senha (mínimo 6 caracteres)"
                minLength={6}
              />
              <i
                className={`${
                  verSenha === `mostrarSenha`
                    ? "bi bi-eye-slash-fill"
                    : "bi bi-eye-fill"
                } ${styles.olho}`}
                onClick={() => {
                  if (verSenha == null || verSenha == "mostrarConfirmacao") {
                    setVerSenha(`mostrarSenha`);
                  } else if (verSenha == `mostrarSenha`) {
                    setVerSenha(null);
                  }
                }}
              ></i>
            </div>
            {erro === "senha" && (
              <span className={styles.erroSpan}>
                Senha e senha de confirmação diferentes!
              </span>
            )}
            {erro === "tamanhoSenha" && (
              <span className={styles.erroSpan}>
                A senha precisa de no minímo 6 caracteres!
              </span>
            )}
          </div>
          <div className="formContent">
            <label htmlFor="senha">Confirmar senha:</label>
            <div className={styles.input}>
              <input
                onChange={(e) => setConfirmarSenha(e.target.value)}
                type={verSenha == `mostrarConfirmacao` ? `text` : `password`}
                name="confirmarSenha"
                placeholder="Repita sua senha"
              />
              <i
                className={`${
                  verSenha === `mostrarConfirmacao`
                    ? "bi bi-eye-slash-fill"
                    : "bi bi-eye-fill"
                } ${styles.olho}`}
                onClick={() => {
                  if (verSenha == null || verSenha == "mostrarSenha") {
                    setVerSenha(`mostrarConfirmacao`);
                  } else if (verSenha == `mostrarConfirmacao`) {
                    setVerSenha(null);
                  }
                }}
              ></i>
            </div>
            {erro === "senha" && (
              <span className={styles.erroSpan}>
                Senha e senha de confirmação diferentes!
              </span>
            )}
            {erro === "tamanhoSenha" && (
              <span className={styles.erroSpan}>
                A senha precisa de no minímo 6 caracteres!
              </span>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}

export default Registrar;
