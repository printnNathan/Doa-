import React, { useState, useEffect } from 'react';
import styles from './PublicadosPanel.module.css';
import axios from 'axios';

function PublicadosPanel() {
  const [doacoes, setDoacoes] = useState([]);

  useEffect(() => {
    listarDoacoes();
  }, []);

  async function listarDoacoes() {
    try {
      const response = await axios.get('https://localhost:7284/api/PedidosDoacao');
      if (response.status === 200) {
        setDoacoes(response.data);
      } else {
        throw new Error('Erro ao listar doações');
      }
    } catch (error) {
      console.error('Erro ao listar doações:', error);
      alert('Erro ao listar doações');
    }
  }

  function removerDoacao(doacaoId) {
    setDoacoes(prevState => prevState.filter(doacao => doacao.id !== doacaoId));
  }

  return (
    <div className={styles.panelContainer}>
      <ul>
        {doacoes.map((doacao, index) => (
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
            <button onClick={() => removerDoacao(doacao.id)} className={styles.inativarButton}>Inativar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicadosPanel;







