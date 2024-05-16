import React, { useEffect, useState } from 'react';
import styles from './CadastrarUsuario.module.css';
import Footer from '../../components/Footer/Footer2';
import NavBar from '../../components/NavBar/Header';
import Esferas from '../../components/Esferas/Esferas';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import ToastService from '../../Services/ToastService';
import axios from 'axios';


function CadastrarUsuario() {
  const [telefone, setTelefone] = useState('');
  const [nomeONG, setNomeONG] = useState('');
  const [emailONG, setEmailONG] = useState('');
  const [senhaONG, setSenhaONG] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [emailConfirmado, setEmailConfirmado] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = new URLSearchParams({
        nome: nomeONG,
        email: emailONG,
        senha: senhaONG
    });

    const response = await axios.post('https://localhost:7284/api/CadastrarONG/Loginong', body);
    const token = response.data.token;
    AuthService.SalvarToken(token);

      console.log('Pedido enviado com sucesso:', response.data);
      ToastService.Success("Pedido enviado com sucesso!" + emailONG);
      setEmailConfirmado(true); // Defina como verdadeiro após o envio bem-sucedido
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      ToastService.Error("Erro ao enviar pedido. Por favor, tente novamente.");
    }
  };
  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const handleChange = (e) => {
    let inputTelefone = e.target.value.replace(/\D/g, '');

    if (inputTelefone.length >= 2) {
      inputTelefone = `(${inputTelefone.slice(0, 2)})${inputTelefone.slice(2)}`;
    }

    setTelefone(inputTelefone);
  };

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (!usuarioEstaLogado) {
          navigate("/Perfil");
          return;
        }

        const response = await ApiService.get('/CadastrarONG/CadastrarONG');
        if (response.status === 200) {
          setUsuario(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    }

    fetchData();
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <div className={styles.CardPrincipal}>
        <form onSubmit={handleSubmit}>
          <span className={styles.DesativarTexto}>Meu cadastro</span>

          <div className={styles.Cardapelido}>
            <label>Nome da ONG:</label>
            <input type="text" value={nomeONG} onChange={(e) => setNomeONG(e.target.value)} className={styles.Apelido} />
            <label>Email da ONG:</label>
            <input type="text" value={emailONG} onChange={(e) => setEmailONG(e.target.value)} className={styles.Apelido} />
            <label>Senha da ONG:</label>
            <div className={styles.SenhaContainer}>
              <input type={senhaVisivel ? "text" : "password"} value={senhaONG} onChange={(e) => setSenhaONG(e.target.value)} className={styles.Apelido} />
              <button type="button" onClick={toggleSenhaVisivel} className={styles.ToggleSenha}>
                {senhaVisivel ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            <span className={styles.font1}>Celular</span>
            <input type="text" name="Telefone" placeholder="Celular" value={telefone} onChange={handleChange} className={styles.Apelido} />
            <div>
              <span className={styles.EsqueceuSenha}>(como aparecerá publicamente)</span>
            </div>
          </div>
          <div>
            <button className={styles.BotãoDeEntrar} onClick={handleSubmit}>Salvar alterações</button>
          </div>
        </form>
      </div>
      <div className={styles.CardPrincipal}>
        {emailConfirmado && (
          <span className={styles.DesativarTexto}>E-mail: {emailONG}</span>
        )}
        <div className={styles.Hr}></div>
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

