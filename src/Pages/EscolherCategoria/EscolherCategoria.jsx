import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/Header';
import Esferas from '../../components/Esferas/Esferas';
import styles from './EscolherCategoria.module.css';

export default function EscolherCategoria() {
  // Variável para determinar qual tipo de tela está sendo exibida
  const tipoTela = 'escolherCategoria'; // Pode ser 'escolherCategoria' ou outro valor dependendo da tela

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
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/864/864595.png" alt="Móveis" />
              
              <p className={styles.Opcoes}>Móveis</p>
            </button>
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/1086/1086581.png" alt="Serviços" />
              <p className={styles.Opcoes}>Serviços</p>
            </button>
        </div>

        <div className={styles.BottomButtons}>
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/2940/2940816.png" alt="Alimentos"/>
              <p className={styles.Opcoes}>Alimentos</p>
            </button>
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/130/130302.png" alt="Roupas" />
              <p className={styles.Opcoes}>Roupas</p>
            </button>
        </div>
      </div>
      
      <Esferas tipoTela={tipoTela} /> {/* Passando a propriedade 'tipoTela' para o componente Esferas */}
    </div>
  );
}


