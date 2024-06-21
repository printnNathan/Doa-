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
  const handleNavigate1 = (id_tipo) => {
    console.log(`Navigating to RequisicaoDeServico with id_tipo: ${id_tipo}`);
    navigate(`/RequisicaoOutros`, { state: { id_tipo } });
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
          <button type="button" className={styles.Categorias} onClick={() => handleNavigate1(5)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" alt="Outros" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
            <p className={styles.Opcoes}>Outros</p>
          </button>
          
        </div>
      </div>
      <Esferas tipoTela={tipoTela} /> 
    </div>
  );
}
