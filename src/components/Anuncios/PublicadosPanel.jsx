import React, { useState, useEffect } from 'react';
import styles from './PublicadosPanel.module.css';
import axios from 'axios';

function PublicadosPanel() {
  const [publicadosPanel, setPublicadosPanel] = useState([]);
  const [doacoes, setDoacoes] = useState([]);

  useEffect(() => {
    listarDoacoes();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      removerDoacao();
    }, 5000); // Tempo em milissegundos (5 segundos)

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [doacoes]); // Executa o efeito sempre que 'doacoes' mudar

  async function listarDoacoes() {
    try {

     const response = await axios.get('https://localhost:7284/api/PedidosDoacao');


      if (response.status !== 200) {
        throw new Error('Erro ao listar doações');
      }
      setDoacoes(response.data);
    } catch (error) {
      console.error('Erro ao listar doações:', error);
      alert('Erro ao listar doações');
    }
  }

  function removerDoacao() {
    // Remove a primeira doação da lista (ou implemente lógica para remover a doação que desejar)
    setDoacoes(prevState => prevState.slice(1));
  }

  return (
    <div>
      <ul>

        {doacoes.map(doacao => (
          <li key={doacao.id}>
            <h2 className={styles.h2}>{doacao.titulo ? doacao.titulo : 'Título não disponível'}</h2>
            <p>{doacao.descricao ? doacao.descricao : 'Descrição não disponível'}</p>
            {doacao.ong ? <p>ONG: {doacao.ong.nome}</p> : <p>ONG não disponível</p>}
            {/* Adicione outras verificações e campos conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicadosPanel;