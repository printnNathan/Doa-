import React, { useState, useEffect } from 'react';
import styles from './PublicadosPanel.module.css';
import axios from 'axios';

function PublicadosPanel() {
<<<<<<< HEAD

  const [publicadosPanel, setPublicadosPanel] = useState([]);
=======
  const [doacoes, setDoacoes] = useState([]);
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49


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
<<<<<<< HEAD
      const response = await ApiService.get("/PedidosDoacao");
=======
     const response = await axios.get('https://localhost:7284/api/PedidosDoacao');
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49

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
<<<<<<< HEAD
        {publicadosPanel.map(ong => (
          <li key={ong.id}>
            <h2 className={styles.h2}>{ong.titulo}</h2>
            <p>{ong.descricao}</p>
             {/* <img className={styles.imagem} src={nome} /> */}
            
=======
        {doacoes.map(doacao => (
          <li key={doacao.id}>
            <h2 className={styles.h2}>{doacao.titulo ? doacao.titulo : 'Título não disponível'}</h2>
            <p>{doacao.descricao ? doacao.descricao : 'Descrição não disponível'}</p>
            {doacao.ong ? <p>ONG: {doacao.ong.nome}</p> : <p>ONG não disponível</p>}
            {/* Adicione outras verificações e campos conforme necessário */}
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicadosPanel;