import React, { useState, useEffect } from 'react';
import ApiService from '../../Services/ApiService';
import styles from './PublicadosPanel.module.css';

function InativosPanel() {
  const [inativosPanel, setInativosPanel] = useState([]);

  useEffect(() => {
    listarProdutosInativos();
  }, []);

  async function listarProdutosInativos() {
    try {
      const response = await ApiService.get('/PedidosDoacao');
      if (response.status !== 200) {
        alert('Erro ao listar produtos');
        return;
      }

      // Filtrar apenas os produtos inativos
      const produtosInativos = response.data.filter(produto => !produto.ativo);
      setInativosPanel(produtosInativos);
    } catch (error) {
      console.error('Erro ao listar produtos inativos:', error);
      alert('Erro ao listar produtos inativos');
    }
  }

  return (
    <div className={styles.panelContainer}>
      <ul>
        {inativosPanel.map(produto => (
          <li key={produto.id} className={styles.doacaoItem}>
            <div>
              <h2 className={styles.h2}>{produto.titulo ? produto.titulo : 'Título não disponível'}</h2>
              <p className={styles.descricao}>{produto.descricao ? produto.descricao : 'Descrição não disponível'}</p>
            </div>
            {/* Adicione outras verificações e campos conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InativosPanel;




