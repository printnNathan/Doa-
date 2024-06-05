import React, { useState, useEffect } from 'react';
import Styles from './CardPerfil.module.css';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import ToastService from '../../Services/ToastService';
import { BsBoxArrowInRight } from "react-icons/bs";
import axios from 'axios';

export default function CardPerfil() {
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
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [emailConfirmado, setEmailConfirmado] = useState(false);
  const [fotoDePerfil, setFotoDePerfil] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function ListarInformacoesONG() {
      try {
        const response = await ApiService.get("/ONGs/listarPorID");
        setFotoDePerfil(response.fotoDePerfil);
        setSenha(response.senha);
        setNome(response.nome);
        setEmail(response.email);
        setCelular(response.celular);
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
        senha: senha,
        celular: celular,
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

  function Sair() {
    AuthService.Sair();
    navigate('/login');
  }

  return (
    <div>
      <div className={Styles.conteiner}>
        <div className={Styles.FotodePerfil}>
          <img src={fotoDePerfil} alt="Foto de perfil" />
          <span className={Styles.DesativarTexto}>Foto de perfil</span>
        </div>
        <div className={Styles.Alteraçoes}>
        <h1 className={Styles.TextoLogin}>Meu cadastro</h1>
          <div className={Styles.CardEmail}>
            <span className={Styles.font1}>Nome completo:</span>
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} className={Styles.Email} />
          </div>
          <div className={Styles.CardEmail}>
            <span className={Styles.font1}>E-mail:</span>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={Styles.Email} />
          </div>
          <div className={Styles.CardEmail}>
            <span className={Styles.font1}>Celular:</span>
            <input type="text" name="celular" value={celular} onChange={handleChangeCelular} className={Styles.Email} />
          </div>
          <div className={Styles.CardEmail}>
            <span className={Styles.font1}>Senha:</span>
            <div className={Styles.SenhaContainer}>
              <input type={senhaVisivel ? "text" : "password"} value={senha} onChange={(e) => setSenha(e.target.value)} className={Styles.Email} />
              <button type="button" onClick={toggleSenhaVisivel} className={Styles.ToggleSenha}>
                {senhaVisivel ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            </div>
            <div className={Styles.Sair}>
          <span >Sair da conta:</span>
          <button onClick={Sair} ><BsBoxArrowInRight /></button>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
        </form>
      </div>
    </div>
  );
}
