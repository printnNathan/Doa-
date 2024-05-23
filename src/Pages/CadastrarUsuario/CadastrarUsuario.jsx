import React, { useState, useEffect } from 'react';
import styles from './CadastrarUsuario.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import Esferas from '../../components/Esferas/Esferas';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import ToastService from '../../Services/ToastService';
import axios from 'axios';

const CadastrarUsuario = (Doacao) => {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplento] = useState("");
  const [estado, setEstado] = useState("");
  const [biografia, setBiografia] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [emailConfirmado, setEmailConfirmado] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function ListarInformacoesONG() {
      try {
        const response = await ApiService.get("/ONGs/listarPorID");
        setNome(response.data.nome);
        setEmail(response.data.email);
      } catch (error) {
        ToastService.Error('Erro ao listar informações da ONG');
      }
    }

    ListarInformacoesONG();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = new URLSearchParams({
        nome: nome,
        email: email,
        senha: senha
      });

      const response = await axios.post('https://localhost:7284/api/CadastrarONG/Loginong', body);
      const token = response.data.token;
      AuthService.SalvarToken(token);

      ToastService.Success("Cadastro realizado com sucesso!");
      setEmailConfirmado(true);
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      ToastService.Error("Erro ao enviar pedido. Por favor, tente novamente.");
    }
  };

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const handleChangeCelular = (e) => {
    let inputCelular = e.target.value.replace(/\D/g, '');
    if (inputCelular.length >= 2) {
      inputCelular = `(${inputCelular.slice(0, 2)})${inputCelular.slice(2)}`;
    }
    setCelular(inputCelular);
  };

  return (
    <div>
      <NavBar />
      <div className={styles.CardPrincipal}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.TextoLogin}>Meu cadastro</h1>
          <div className={styles.CardEmail}>
            <span className={styles.font1}>Nome completo:</span>
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} className={styles.Email} />
          </div>
          <div className={styles.CardEmail}>
            <span className={styles.font1}>E-mail:</span>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.Email} />
          </div>
          <div className={styles.CardEmail}>
            <span className={styles.font1}>Celular:</span>
            <input type="text" name="celular" value={celular} onChange={handleChangeCelular} className={styles.Email} />
          </div>
          <div className={styles.CardEmail}>
            <span className={styles.font1}>Senha:</span>
            <div className={styles.SenhaContainer}>
              <input type={senhaVisivel ? "text" : "password"} value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.Email} />
              <button type="button" onClick={toggleSenhaVisivel} className={styles.ToggleSenha}>
                {senhaVisivel ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>
          <div>
            <button type="submit" className={styles.BotaoDeEntrar}>Salvar alterações</button>
          </div>
        </form>
      </div>
      <div className={styles.CardPrincipal}>
        {emailConfirmado && (
          <span className={styles.DesativarTexto}>{Doacao.Email}</span>
        )}
        <hr className={styles.Hr}></hr>
        <div>
          <img className={styles.img} src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*g09N-jl7JtVjVZGcd-vL2g.jpeg' alt="Foto de perfil" width={70} height={70} />
          <span className={styles.DesativarTexto}>Foto de perfil</span>
        </div>
      </div>
      <div className={styles.CardPrincipal}>
        <div><h6 className={styles.CardPrincipal2}>Adicionar endereço +</h6></div>
      </div>
      <div className={styles.CardPrincipal}>
        <div className={styles.DesativarContainer}>
          <img src='https://img.freepik.com/vetores-premium/sinais-de-aviso-de-perigo-de-alta-tensao-isolado-em-um-fundo-branco_68708-427.jpg' alt="Alerta" width={80} height={90} />
          <span className={styles.DesativarTexto}>Desativar minha conta</span>
        </div>
        <button className={styles.Desativar}>Desativar</button>
        <span>Seu perfil será desabilitado e anúncios excluídos. Ative a conta quando quiser.</span>
      </div>
      <Footer />
      <Esferas />
    </div>
  );
}

export default CadastrarUsuario;



