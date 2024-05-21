import React, { useContext } from 'react';
import { DoacaoContext } from './DoacaoContext';
import styles from './InativosPanel.module.css';

function InativosPanel() {
  const { inativos, reativarDoacao } = useContext(DoacaoContext);

  return (
    <div className={styles.panelContainer}>
      <ul>
        {inativos.map((produto) => (
          <li key={produto.id} className={styles.doacaoItem}>
            {produto.imagensPedido && produto.imagensPedido.length > 0 && (
              <div className={styles.imagensContainer}>
                {produto.imagensPedido.map((imagem, imgIndex) => (
                  <img key={imgIndex} className={styles.previewImage} src={imagem.link} alt={`Imagem ${imgIndex}`} />
                ))}
              </div>
            )}
            <div>
              <h2 className={styles.h2}>{produto.titulo || 'Título não disponível'}</h2>
              <p className={styles.descricao}>{produto.descricao || 'Descrição não disponível'}</p>
            </div>
            <button onClick={() => reativarDoacao(produto.id)} className={styles.reativarButton}>Reativar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InativosPanel;
