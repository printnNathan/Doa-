import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AguardandoValidacao.module.css';

export default function AguardandoValidacao() {
    const navigate = useNavigate();

    const voltarParaLogin = () => {
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <h1>Sua conta está aguardando validação</h1>
            <p>Por favor, aguarde até que sua conta seja validada.</p>
            <button onClick={voltarParaLogin} className={styles.button}>
                Voltar para o Login
            </button>
        </div>
    );
}
