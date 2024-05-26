import React, { useEffect, useState } from 'react';
import styles from './PublicadosPanel.module.css';
import CardDoacao from '../CardDoacao/CardDoacao';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';
import axios from 'axios';

function PublicadosPanel({ doacoes, loading, refresh, abrirModal }) {

  const inativarDoacao = async (doacaoId) => {
    try {
      await axios.put(`https://localhost:7284/api/PedidosDoacao/${doacaoId}/inativar`);
      refresh();

      ToastService.Success('Inativação realizada com sucesso!');
    } catch (error) {
      ToastService.Error('Erro ao inativar doação');
    }
  };

  return (
    <div className={styles.panelContainer}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loading}></div>
        </div>
      ) : (
        doacoes && doacoes.map((doacao, key) => (
          <CardDoacao
            doacao={doacao}
            key={key}
            ativo={doacao.status}
            onToggleStatus={() => inativarDoacao(doacao.id)}
            abrirModal={abrirModal}
          />
        ))
      )}
    </div>
  );
}

export default PublicadosPanel;



