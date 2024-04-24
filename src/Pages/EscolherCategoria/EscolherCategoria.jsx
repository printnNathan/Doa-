import NavBar from '../../components/NavBar/Header';
import styles from './EscolherCategoria.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import RequisicaoDeServico from '../RequisicaoDeServico/RequisicaoDeServico';

export default function EscolherCategoria() {
  return (
    <div>
      <NavBar/>

      <div>
        <h1 className={styles.Texto1}>Pronto para fazer a diferença?</h1>
      </div>
  
      <div>
        <h1 className={styles.Texto2}>Categorias</h1>
      </div>

<div className={styles.Container}>
        <div className={styles.TopButtons}>
        <Link to="">
          <button type="button" className={styles.Categorias}>
          <img src={"https://cdn-icons-png.flaticon.com/512/864/864595.png"} />
          <p></p>
            Móveis
          </button>
          </Link>
          <Link to="">
          <button type="button" className={styles.Categorias}>
          <img src={"https://cdn-icons-png.flaticon.com/512/1086/1086581.png"} />
          <p></p>
            Serviços
          </button>
          </Link>
        </div>

        <div className={styles.BottomButtons}>
          <Link to="">
          <button type="button" className={styles.Categorias}>
          <img src={"https://cdn-icons-png.flaticon.com/512/2940/2940816.png"} />
          <p></p>
            Alimentos
          </button>
          </Link>
          <Link to="">
          <button type="button" className={styles.Categorias}>
          <img src={"https://cdn-icons-png.flaticon.com/512/130/130302.png"} />
          <p></p>
            Roupas
          </button>
          </Link>
        </div>
    </div>
</div>

  )
}
