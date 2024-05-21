import axios from 'axios';
import React, { createContext, useState } from 'react';

export const DoacaoContext = createContext();

export const DoacaoProvider = ({ children }) => {
  const [doacoes, setDoacoes] = useState([]);
  const [inativos, setInativos] = useState([]);

  const listarDoacoes = async () => {
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
  };

  const removerDoacao = (doacaoId) => {
    setDoacoes(prevState => prevState.filter(doacao => doacao.id !== doacaoId));
    const doacaoInativada = doacoes.find(doacao => doacao.id === doacaoId);
    setInativos(prevState => [...prevState, doacaoInativada]);
  };

  return (
    <DoacaoContext.Provider value={{ doacoes, inativos, listarDoacoes, removerDoacao }}>
      {children}
    </DoacaoContext.Provider>
  );
};
