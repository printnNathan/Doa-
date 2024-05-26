import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './InativosPanel.module.css';
import CardDoacao from '../CardDoacao/CardDoacao';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';
import axios from 'axios';

function InativosPanel({ doacoes, loading, refresh, abrirModal }) {

  const reativarDoacao = async (doacaoId) => {
    try {
      await axios.put(`https://localhost:7284/api/PedidosDoacao/${doacaoId}/reativar`);
      refresh();

      ToastService.Success('Reativação realizada com sucesso!');
    } catch (error) {
      ToastService.Error('Erro ao reativar doação');
    }
  };

  return (
    <div className={styles.panelContainer}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loading}></div>
        </div>
      ) : (
        doacoes.map((doacao, key) => (
          <CardDoacao
            doacao={doacao}
            key={key}
            ativo={false}
            abrirModal={abrirModal}
            onToggleStatus={() => reativarDoacao(doacao.id)}
          />
        ))
      )}
    </div>
  );
}

export default InativosPanel;




