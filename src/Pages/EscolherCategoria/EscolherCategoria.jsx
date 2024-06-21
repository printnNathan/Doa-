import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/Header';
import Esferas from '../../components/Esferas/Esferas';
import styles from './EscolherCategoria.module.css';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';

export default function EscolherCategoria() {
  const navigate = useNavigate();
  const tipoTela = 'escolherCategoria';

  
  useEffect(() => {
    async function fetchData() {
            const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
            if (usuarioEstaLogado) {
                navigate("/login");
                return;
            }    
    }

    fetchData();
}, [navigate]);

  const handleNavigate = (id_tipo) => {
    console.log(`Navigating to RequisicaoDeServico with id_tipo: ${id_tipo}`);
    navigate(`/RequisicaoDeServico`, { state: { id_tipo } });
  };  

  return (
    <div>
      <NavBar />
      <div>
        <h1 className={styles.Texto1}>Pronto para fazer a diferença?</h1>
      </div>
      <div>
        <h1 className={styles.Texto2}>Categorias</h1>
      </div>
      <div className={styles.Container}>
        <div className={styles.TopButtons}>
          <button type="button" className={styles.Categorias} onClick={() => handleNavigate(4)}>
            <img src="https://cdn-icons-png.flaticon.com/512/864/864595.png" alt="Móveis" />
            <p className={styles.Opcoes}>Móveis</p>
          </button>
          <button type="button" className={styles.Categorias} onClick={() => handleNavigate(3)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1086/1086581.png" alt="Serviços" />
            <p className={styles.Opcoes}>Serviços</p>
          </button>
        </div>
        <div className={styles.BottomButtons}>
          <button type="button" className={styles.Categorias} onClick={() => handleNavigate(1)}>
            <img src="https://cdn-icons-png.flaticon.com/512/2940/2940816.png" alt="Alimentos"/>
            <p className={styles.Opcoes}>Alimentos</p>
          </button>
          <button type="button" className={styles.Categorias} onClick={() => handleNavigate(2)}>
            <img src="https://cdn-icons-png.flaticon.com/512/130/130302.png" alt="Roupas" />
            <p className={styles.Opcoes}>Roupas</p>
          </button>
        </div>
      </div>
      <Esferas tipoTela={tipoTela} /> 
    </div>
  );
}
