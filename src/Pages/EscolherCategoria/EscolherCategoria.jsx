import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/Header';
import Esferas from '../../components/Esferas/Esferas';
import styles from './EscolherCategoria.module.css';

export default function EscolherCategoria() {
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
          <Link to="/Requisicao">
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/864/864595.png" alt="Móveis" />
              <p className={styles.Opcoes}>Móveis</p>
            </button>
          </Link>
          <Link to="/Requisicao">
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/1086/1086581.png" alt="Serviços" />
              <p className={styles.Opcoes}>Serviços</p>
            </button>
          </Link>
        </div>

        <div className={styles.BottomButtons}>
          <Link to="/Requisicao">
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/2940/2940816.png" alt="Alimentos" className={styles.Categorias2}/>
              <p className={styles.Opcoes}>Alimentos</p>
            </button>
          </Link>
          <Link to="/Requisicao">
            <button type="button" className={styles.Categorias}>
              <img src="https://cdn-icons-png.flaticon.com/512/130/130302.png" alt="Roupas" />
              <p className={styles.Opcoes}>Roupas</p>
            </button>
          </Link>
        </div>
      </div>
      
      <Esferas />
    </div>
  );
}

