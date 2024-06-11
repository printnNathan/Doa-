import React, { useState, useEffect } from 'react';
import Styles from './CardPerfil.module.css';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import ToastService from '../../Services/ToastService';
import { BsBoxArrowInRight } from "react-icons/bs";

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
  const [novaFoto, setNovaFoto] = useState(null);
  const [previa, setPrevia] = useState(null);

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
  const ongId = AuthService.PegarDadosUsuario()?.ID;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {
        id: ongId,
        nome: nome,
        email: email,
        senha: senha,
        celular: celular,
        fotoPerfil: novaFoto || fotoPerfil // Define a nova foto, caso exista, senão mantém a foto anterior
      };
      
  
      console.log("Dados enviados para atualização:", body);
  
      await ApiService.put(`/ONGs/atualizar`, body);
      ToastService.Success("Dados atualizados com sucesso!");
      setEmailConfirmado(true);
      setNovaFoto(null);
    } catch (error) {
      ToastService.Error('Erro ao enviar pedido:', error);
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
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const previaUrl = URL.createObjectURL(selectedFile);
      setPrevia(previaUrl);
      setNovaFoto(selectedFile);
    } else {
      setPrevia(null);
      setNovaFoto(null);
    }
  };

  const handleAlterarFotoClick = () => {
    document.getElementById('inputAlterarFoto').click();
  };

  return (
    <div className={Styles.container2}>
      <div className={Styles.container}>
        <div className={Styles.fotoDePerfil}>
          <img src={previa ? previa : fotoPerfil} className={Styles.fotoDoUsuario} />
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
        <button onClick={handleSubmit} className={Styles.buttonSalvar}>Salvar alterações</button>
      </div>
      <div className={Styles.logout}>
        <span>Sair da conta:</span>
        <button onClick={Sair} className={Styles.buttonLogout}><BsBoxArrowInRight /></button>
      </div>
    </div>
  );
}

