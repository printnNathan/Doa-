import ApiService from '../../Services/ApiService';
import React, { useState, useEffect } from 'react';
import styles from './PublicadosPanel.module.css';
import axios from 'axios';

function InativosPanel() {
  const [inativosPanel, setInativosPanel] = useState([]);

  useEffect(() => {
    listarProdutosInativos();
  }, []);

  async function listarProdutosInativos() {
    try {
<<<<<<< HEAD
      const response = await ApiService.get("/PedidosDoacao");
=======
      const response = await axios.get('https://localhost:7284/api/PedidosDoacao');
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49

      if (response.status !== 200) {
        alert('Erro ao listar produtos');
        return;
      }
      
      const produtosInativos = response.data.filter(produto => !produto.ativo);
      setInativosPanel(produtosInativos);
    } catch (error) {
      console.error('Erro ao listar produtos inativos:', error);
      alert('Erro ao listar produtos inativos');
    }
  }

  return (
    <div>
      <ul>
<<<<<<< HEAD
        {InativosPanel.map(produto => (
          <li key={produto.id}>
            <h2 className={styles.h2}>{produto.titulo}</h2>
            <p>{produto.descricao}</p>
=======
        {inativosPanel.map(doacao => (
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

export default InativosPanel;

