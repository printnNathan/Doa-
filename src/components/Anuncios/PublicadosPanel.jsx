import ApiService from '../../Services/ApiService';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function PublicadosPanel() {
  const [publicadosPanel, setPublicadosPanel] = useState([]);

  useEffect(() => {
    ListarProdutos();
  }, []);

  async function ListarProdutos() {
    try {
      const response = await ApiService.get("/Usuarios/Listarprodutospanel");

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
      <h1>Produtos Indisponíveis</h1>
      <ul>
        {publicadosPanel.map(produto => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicadosPanel;
