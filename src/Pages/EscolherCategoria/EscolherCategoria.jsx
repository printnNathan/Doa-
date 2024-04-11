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
          <img src={"https://cdn-icons-png.flaticon.com/512/864/864595.png"} />
          <p></p>
            Móveis
          </button>
          <button type="button" className={styles.Categorias}>
          <img src={"https://cdn-icons-png.flaticon.com/512/1086/1086581.png"} />
          <p></p>
            Serviços
          </button>
        </div>

        <div className={styles.BottomButtons}>
          <button type="button" className={styles.Categorias}>
          <img src={"https://cdn-icons-png.flaticon.com/512/2940/2940816.png"} />
          <p></p>
            Alimentos
          </button>
          <button type="button" className={styles.Categorias}>
          <img src={"https://cdn-icons-png.flaticon.com/512/130/130302.png"} />
          <p></p>
            Roupas
          </button>
        </div>
    </div>
</div>

  )
}
