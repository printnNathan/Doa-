import ApiService from '../../Services/ApiService';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import styles from './PublicadosPanel.module.css';


function InativosPanel() {

  const [InativosPanel, setInativosPanel] = useState([]);

  useEffect(() => {
    ListarProdutos();
  }, []);

  async function ListarProdutos() {
    try {
      const response = await ApiService.get("/CadastrarONG");

      if (response.status !== 200) {
        alert('Erro ao listar produtos');
        return;
      }
      setInativosPanel(response.data);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      alert('Erro ao listar produtos');
    }
  }


  return (
    <div>
      <div></div>
      <ul>
        {InativosPanel.map(produto => (
          <li key={produto.id}>
            <h2 className={styles.h2}>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>{produto.DataDaRequisicao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InativosPanel;
