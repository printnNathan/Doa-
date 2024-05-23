import React, { useContext, useEffect, useState } from 'react';
import styles from './PublicadosPanel.module.css';
import CardDoacao from '../CardDoacao/CardDoacao';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';
import axios from 'axios';

function PublicadosPanel() {

  const [doacoes, setDoacoes] = useState([]);
  const [inativos, setInativos] = useState([]);

  const ongId = AuthService.PegarDadosUsuario()?.ID;

  async function listarPedidosDoacaoPorONG() {
    if (ongId) {
      try {
        const response = await ApiService.get(`/PedidosDoacao/ong/${ongId}`)
        setDoacoes(response);
      } catch (error) {

        ToastService.Error("Houve um erro no servidor ao listar doações\r\nTente novamente mais tarde.");
      }
    }
  }

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


  useEffect(() => {
    listarPedidosDoacaoPorONG();
  }, []);

  return (
    <div className={styles.panelContainer}>
      {doacoes && doacoes.map((doacao, key) => (
        <CardDoacao
          doacao={doacao}
          key={key}
          ativo={doacao.status}
          onToggleStatus={() => inativarDoacao(doacao.id)}
        />
      ))}
    </div>
  );

}

export default PublicadosPanel;



