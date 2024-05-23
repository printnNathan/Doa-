import React, { useContext } from 'react';
import { DoacaoContext } from './DoacaoContext';
import styles from './InativosPanel.module.css';
import CardDoacao from '../CardDoacao/CardDoacao';

function InativosPanel() {
  const { inativos, reativarDoacao } = useContext(DoacaoContext);

  return (
    <div className={styles.panelContainer}>
      {inativos.map((doacao, key) => (
        <CardDoacao doacao={doacao} key={key} ativo={false} onToggleStatus={() => reativarDoacao(doacao.id)}/>
      ))
      }
    </div>
  );
}

export default InativosPanel;

