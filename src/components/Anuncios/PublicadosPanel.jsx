import ApiService from '../../Services/ApiService';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import styles from './PublicadosPanel.module.css';

function PublicadosPanel() {

  const [publicadosPanel, setPublicadosPanel] = useState([]);


  useEffect(() => {
    ListarProdutos();
  }, []);

  async function ListarProdutos() {
    try {
      const response = await ApiService.get("/PedidosDoacao");

      if (response.status !== 200) {
        alert('Erro ao listar produtos');
        return;
      }
      setPublicadosPanel(response.data);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      alert('Erro ao listar produtos');
    }
  }

  return (
    <div>
      <div></div>
      <ul>
        {publicadosPanel.map(ong => (
          <li key={ong.id}>
            <h2 className={styles.h2}>{ong.titulo}</h2>
            <p>{ong.descricao}</p>
             {/* <img className={styles.imagem} src={nome} /> */}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicadosPanel;
