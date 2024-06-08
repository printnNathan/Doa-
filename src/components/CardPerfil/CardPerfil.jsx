import React, { useState, useEffect } from 'react';
import Styles from './CardPerfil.module.css';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import ToastService from '../../Services/ToastService';
import { BsBoxArrowInRight } from "react-icons/bs";
import axios from 'axios';

export default function CardPerfil(doacao) {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [emailConfirmado, setEmailConfirmado] = useState(false);
  const [fotoPerfil, setFotoDePerfil] = useState("");
  const [imagens, setImagens] = useState([]);
  const [previa, setPrevia] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function ListarInformacoesONG() {
      try {
        const response = await ApiService.get("/ONGs/listarPorID");
        setFotoDePerfil(response.fotoPerfil);
        setSenha(response.senha);
        setNome(response.nome);
        setEmail(response.email);
        setCelular(response.celular);
        console.log(response)
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

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    if (selectedFiles.length > 0) {
      const previas = [];
      const imagens = [];

      Array.from(selectedFiles).forEach(file => {
        previas.push(URL.createObjectURL(file));

        const reader = new FileReader();
        reader.onload = function (e) {
          const base64 = e.target.result.split(',')[1];
          imagens.push(base64);

          if (imagens.length === selectedFiles.length) {
            setImagens(imagens);
          }
        };
        reader.readAsDataURL(file);
      });

      setPrevia(previas);
    } else {
      setImagens([]);
      setPrevia([]);
    }
  };

  const handleAlterarFotoClick = () => {
    document.getElementById('inputAlterarFoto').click();
  };

  return (
    <div className={Styles.container2}>
      <div className={Styles.container}>
        <div className={Styles.fotoDePerfil}>
          <img src={fotoPerfil} className={Styles.fotoDoUsuario} />
          <div className={Styles.alterarFotoContainer}>
            <button className={Styles.alterarFotoButton} onClick={handleAlterarFotoClick}>
              Alterar Foto
            </button>
            <input
              id="inputAlterarFoto"
              type="file"
              accept="image/jpeg"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {previa.map((src, index) => (
              <img key={index} className={Styles.fotoDoUsuario} src={src} alt={`Preview ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className={Styles.changes}>
          <div className={Styles.cardEmail}>
            <span className={Styles.font1}>Nome completo:</span>
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} className={Styles.input} />
          </div>
          <div className={Styles.cardEmail}>
            <span className={Styles.font1}>E-mail:</span>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={Styles.input} />
          </div>
          <div className={Styles.cardEmail}>
            <span className={Styles.font1}>Celular:</span>
            <input type="text" name="celular" value={celular} onChange={handleChangeCelular} className={Styles.input} />
          </div>
          <div className={Styles.cardEmail}>
            <span className={Styles.font1}>Senha:</span>
            <div className={Styles.passwordContainer}>
              <input type={senhaVisivel ? "text" : "password"} value={senha} onChange={(e) => setSenha(e.target.value)} className={Styles.input} />
              <button type="button" onClick={toggleSenhaVisivel} className={Styles.togglePassword}>
                {senhaVisivel ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.logout}>
        <span>Sair da conta:</span>
        <button onClick={Sair} className={Styles.buttonLogout}><BsBoxArrowInRight /></button>
      </div>
      <div>
        <div onSubmit={handleSubmit}></div>
      </div>
    </div>
  );
}
