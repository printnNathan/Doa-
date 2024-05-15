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
      const response = await axios.get('https://localhost:7284/api/PedidosDoacao');

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
      <h2>Produtos Inativos</h2>
      <ul>
        {inativosPanel.map(doacao => (
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

export default InativosPanel;

