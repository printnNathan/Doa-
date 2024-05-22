import React, { useContext, useEffect, useState } from 'react';
import { DoacaoContext } from './DoacaoContext';
import styles from './PublicadosPanel.module.css';
import CardDoacao from '../CardDoacao/CardDoacao';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';

function PublicadosPanel() {
  const [doacoes, setDoacoes] = useState([]);

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
          onToggleStatus={() => console.log("")}
        />
      ))}
    </div>
  );

}

export default PublicadosPanel;



