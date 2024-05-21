import React, { useContext, useEffect } from 'react';
import { DoacaoContext } from './DoacaoContext';
import styles from './PublicadosPanel.module.css';
import axios from 'axios';

function PublicadosPanel() {
  const { doacoes, listarDoacoes, removerDoacao } = useContext(DoacaoContext);

  useEffect(() => {
    listarDoacoes();
  }, []);

  const inativarDoacao = async (doacaoId) => {
    try {
      const response = await axios.put(`https://localhost:7284/api/PedidosDoacao/${doacaoId}/inativar`);
      if (response.status === 200) {
        removerDoacao(doacaoId);
      } else {
        throw new Error('Erro ao inativar doação');
      }
    } catch (error) {
      console.error('Erro ao inativar doação:', error);
      alert('Erro ao inativar doação');
    }
  };

  return (
    <div className={styles.panelContainer}>
      <ul>
        {doacoes.map((doacao) => (
          <li key={doacao.id} className={styles.doacaoItem}>
            {doacao.imagensPedido && doacao.imagensPedido.length > 0 && (
              <div className={styles.imagensContainer}>
                {doacao.imagensPedido.map((imagem, imgIndex) => (
                  <img key={imgIndex} className={styles.previewImage} src={imagem.link} alt={`Imagem ${imgIndex}`} />
                ))}
              </div>
            )}
            <div>
              <h2 className={styles.h2}>{doacao.titulo || 'Título não disponível'}</h2>
              <p className={styles.descricao}>{doacao.descricao || 'Descrição não disponível'}</p>
            </div>
            <button onClick={() => inativarDoacao(doacao.id)} className={styles.inativarButton}>Inativar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicadosPanel;









