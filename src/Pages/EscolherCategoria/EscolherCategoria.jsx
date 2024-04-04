import NavBar from '../../components/NavBar/Header';
import styles from './EscolherCategoria.module.css';
import React from 'react';

export default function EscolherCategoria() {
  return (
    <div>
      <NavBar/>

      <div>
        <h1 className={styles.TextoPronto}>Pronto para fazer a diferença?</h1>
      </div>
  
      <div>
        <h1 className={styles.TextoCategorias}>Categorias</h1>
      </div>

      <input type="button" placeholder="Móveis" className={styles.Categorias} />
    </div>
  
  )
}


