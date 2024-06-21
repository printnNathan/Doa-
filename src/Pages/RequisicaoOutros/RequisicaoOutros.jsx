import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './RequisicaoOutros.module.css';
import Esferas from "../../components/Esferas/Esferas";
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import ApiService from "../../Services/ApiService";
import ToastService from "../../Services/ToastService";
import AuthService from "../../Services/AuthService";
import { Link } from 'react-router-dom';

const RequisicaoOutros = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id_tipo } = location.state || {}; 
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagens, setImagens] = useState([]);
  const [previa, setPrevia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
      if (!usuarioEstaLogado) {
          navigate("/login");
          return;
      }
      
    }
    
    if (!id_tipo) {
      console.error('id_tipo não fornecido, redirecionando...');
      navigate('/EscolherCategoria');
    } else {
      console.log(`Tipo ID recebido: ${id_tipo}`);
    }
    
  }, [id_tipo, navigate]);
  

  const tipoTela = 'RequisicaoOutros';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const idOng = AuthService.PegarDadosUsuario().ID;
      const imagensPedido = imagens.map(imagem => ({ base64: imagem }));

      const body = {
        titulo,
        id_tipo,
        descricao,
        id_ong: idOng,
        status: true,
        imagensPedido
      };

      console.log('Enviando pedido:', body);

      await ApiService.post("/PedidosDoacao/cadastrarpedido", body);
      ToastService.Success("Pedido cadastrado com sucesso!");
      navigate('/')
    } catch (error) {
      console.error('Erro ao cadastrar pedido:', error);
      ToastService.Error("Erro ao cadastrar Pedido");
    }
  };

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.text}>Aceitamos também doações que não se enquadrem nas categorias anteriores, exceto monetárias.</h1>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <span className={styles.label}>TÍTULO:</span>
            <input
              type="text"
              placeholder="DOAÇÃO DE SANGUE"
              className={styles.input}
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <span className={styles.label}>DESCRIÇÃO:</span>
            <input
              type="text"
              placeholder="QUESTÃO DE SAÚDE"
              className={styles.input}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div className={styles.previewContainer}>
            {previa.map((src, index) => (
              <img key={index} className={styles.previewImage} src={src} alt={`Preview ${index + 1}`} />
            ))}
          </div>
          <div className={styles.formGroup}>
            <input
              multiple
              type="file"
              accept="image/jpeg"
              onChange={handleFileChange}
            />
          </div>
          <div className={styles.formGroup}>
            <form onSubmit={handleSubmit}>
              <h5 className={styles.label}>CONTATO</h5>
              <img
                className={styles.icon}
                src='https://cdn-icons-png.flaticon.com/512/15/15407.png'
                alt="Telefone"
                width={30}
                height={30}
              />
              <span className={styles.contact}>(11) 99144-23541</span>
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Concluir</button>
                <Link to="/EscolherCategoria">
                  <button type="button" className={styles.cancelButton}>Cancelar</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <Esferas tipoTela={tipoTela} /> 
      </div>
  );
}

export default RequisicaoOutros;
