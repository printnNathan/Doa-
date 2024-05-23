import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from '../../Services/AuthService';


export const DoacaoContext = createContext();

export const DoacaoProvider = ({ children }) => {
  const [doacoes, setDoacoes] = useState([]);
  const [inativos, setInativos] = useState([]);

  useEffect(() => {
    listarDoacoes();
    listarInativos();
  }, []);

  const listarDoacoes = async () => {
    try {
      const response = await axios.get('https://localhost:7284/api/PedidosDoacao');
      if (response.status === 200) {
        const ativos = response.data.filter(doacao => doacao.status);
        setDoacoes(ativos);
      } else {
        throw new Error('Erro ao listar doações');
      }
    } catch (error) {
      console.error('Erro ao listar doações:', error);
      alert('Erro ao listar doações');
    }
  };

  const listarInativos = async () => {
    try {
      const response = await axios.get('https://localhost:7284/api/PedidosDoacao/inativos');
      if (response.status === 200) {
        setInativos(response.data);
      } else {
        throw new Error('Erro ao listar doações inativas');
      }
    } catch (error) {
      console.error('Erro ao listar doações inativas:', error);
      alert('Erro ao listar doações inativas');
    }
  };

  const inativarDoacao = async (doacaoId) => {
    try {
      const response = await axios.put(`https://localhost:7284/api/PedidosDoacao/${doacaoId}/inativar`);
      if (response.status === 200) {
        setDoacoes(prevState => prevState.filter(doacao => doacao.id !== doacaoId));
        const inativada = doacoes.find(doacao => doacao.id === doacaoId);
        setInativos(prevState => [...prevState, inativada]);
      } else {
        throw new Error('Erro ao inativar doação');
      }
    } catch (error) {
      console.error('Erro ao inativar doação:', error);
      alert('Erro ao inativar doação');
    }
  };

  const reativarDoacao = async (doacaoId) => {
    try {
      const response = await axios.put(`https://localhost:7284/api/PedidosDoacao/${doacaoId}/reativar`);
      if (response.status === 200) {
        setInativos(prevState => prevState.filter(doacao => doacao.id !== doacaoId));
        const reativada = inativos.find(doacao => doacao.id === doacaoId);
        setDoacoes(prevState => [...prevState, reativada]);
      } else {
        throw new Error('Erro ao reativar doação');
      }
    } catch (error) {
      console.error('Erro ao reativar doação:', error);
      alert('Erro ao reativar doação');
    }
  };

  return (
    <DoacaoContext.Provider value={{ doacoes, inativos, inativarDoacao, reativarDoacao }}>
      {children}
    </DoacaoContext.Provider>
  );
};

