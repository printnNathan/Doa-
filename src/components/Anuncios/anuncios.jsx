import React from 'react';
import styles from './anuncios.modules.css';


function anuncios() {
  return (
        <div>
            <div><h1>Anúncios</h1></div>

            <ul className={styles.anuncios}>
                <li><h2 className={styles.anuncios}>Publicados</h2></li>      
                <li><h2>Pendentes</h2></li>
                <li><h2>Inativos</h2></li>
                <li><h2>Expirados</h2></li>
            </ul>
        </div>
  );
}


export default anuncios;
