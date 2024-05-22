import React, { useContext } from 'react';
import { DoacaoContext } from './DoacaoContext';
import styles from './PublicadosPanel.module.css';
import CardDoacao from '../CardDoacao/CardDoacao';

function PublicadosPanel() {
  const { doacoes, inativarDoacao } = useContext(DoacaoContext);

  return (
    <div className={styles.panelContainer}>
      {doacoes.map((doacao, key) => (
        <CardDoacao doacao={doacao} key={key} ativo={true} />
      ))
      }

      {/* <ul>
        {doacoes.map(doacao => (
          <li key={doacao.id} className={styles.doacaoItem}>
            {doacao.imagensPedido && doacao.imagensPedido.length > 0 && (
              <div className={styles.imagensContainer}>
                {doacao.imagensPedido.map((imagem, imgIndex) => (
                  <img key={imgIndex} className={styles.previewImage} src={imagem.link} alt={`Imagem ${imgIndex}`} />
                ))}
              </div>
            )}           
              <h2 className={styles.h2}>{doacao.titulo || 'Título não disponível'}</h2>
              <p className={styles.descricao}>{doacao.descricao || 'Descrição não disponível'}</p>           
            <button onClick={() => inativarDoacao(doacao.id)} className={styles.inativarButton}>Inativar</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default PublicadosPanel;










