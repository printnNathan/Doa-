import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './InativosPanel.module.css';
import CardDoacao from '../CardDoacao/CardDoacao';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';
import axios from 'axios';

function InativosPanel() {
  const [doacoes, setDoacoes] = useState([]);
  const [inativos, setInativos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  const ongId = AuthService.PegarDadosUsuario()?.ID;

  async function listarPedidosDoacaoPorONGInativos() {
    if (ongId) {
      try {
        const response = await ApiService.get(`/PedidosDoacao/ong/Inativos/${ongId}`);
        setInativos(response);
      } catch (error) {
        ToastService.Error("Houve um erro no servidor ao listar doações\r\nTente novamente mais tarde.");
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }
  }

  const reativarDoacao = async (doacaoId) => {
    try {
      const response = await axios.put(`https://localhost:7284/api/PedidosDoacao/${doacaoId}/reativar`);
      if (response.status === 200) {
        const reativada = doacoes.find(doacao => doacao.id === doacaoId);
        setInativos(prevState => prevState.filter(doacao => doacao.id !== doacaoId));
        if (reativada) {
          setInativos(prevState => [...prevState, { ...reativada, status: true }]);
        }
      } else {
        throw new Error('Erro ao reativar doação');
      }
    } catch (error) {
      console.error('Erro ao reativar doação:', error);
      alert('Erro ao reativar doação');
    }
  };

  useEffect(() => {
    listarPedidosDoacaoPorONGInativos();
  }, []);

  return (
    <div className={styles.panelContainer}>
      {loading ? ( 
        <div className={styles.loadingContainer}>
          <div className={styles.loading}></div>
        </div>
      ): (
        inativos.map((doacao, key) => (
          <CardDoacao
            doacao={doacao}
            key={key}
            ativo={false}
            onToggleStatus={() => reativarDoacao(doacao.id)}
          />
        ))
      )}
    </div>
  );
}

export default InativosPanel;




