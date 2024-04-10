import NavBar from '../../components/NavBar/Header';
import styles from './EscolherCategoria.module.css';
import React from 'react';

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
          <button type="button" className={styles.Categorias}>
          <img src={"./images/Moveis.png"} className={styles.Icons} alt="" />
          <p></p>
            Móveis
          </button>
          <button type="button" className={styles.Categorias}>
          <img src={"./images/Servicos.png"} className={styles.Icons} alt="" />
          <p></p>
            Serviços
          </button>
        </div>

        <div className={styles.BottomButtons}>
          <button type="button" className={styles.Categorias}>
          <img src={"./images/Alimentos.png"} className={styles.Icons} alt="" />
          <p></p>
            Alimentos
          </button>
          <button type="button" className={styles.Categorias}>
          <img src={"./images/Roupas.png"} className={styles.Icons} alt="" />
          <p></p>
            Roupas
          </button>
        </div>
    </div>
</div>

  )
}
