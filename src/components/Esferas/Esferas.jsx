import React from 'react';
import styles from './Esferas.module.css';

function Esferas({ tipoTela }) {
  let esferas = [];


  if (tipoTela === 'escolherCategoria') {
    esferas = [1, 2, 3, 4, 5];
  }
  if (tipoTela === 'MeusAnuncios') {
    esferas = [1, 2, 3, 4, 5]; 
  }
  else {
    esferas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Renderiza todas as esferas por padrão
  }

  return (
    <div>
      {esferas.map(numeroEsfera => (
        <div key={numeroEsfera} className={styles[`Bola${numeroEsfera}`]}></div>
      ))}
    </div>
  );
}

export default Esferas;

