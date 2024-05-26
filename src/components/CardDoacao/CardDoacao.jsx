import { useState } from 'react';
import Styles from './CardDoacao.module.css';

export default function CardDoacao({ doacao, ativo, onToggleStatus, abrirModal }) {
    const [loading, setLoading] = useState(false);

    const handleToggleStatus = async (e) => {
        e.stopPropagation(); // Impede a propagação do evento de clique para elementos pai
        setLoading(true);
        try {
            await onToggleStatus();
        } catch (error) {
            console.error('Erro ao mudar status da doação:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className={Styles.container} onClick={() => abrirModal(doacao)}>
            <div className={Styles.imageContainer}>
                <img className={Styles.image} src={doacao.imagensPedido[0].link ?? ""} />
            </div>
            <div className={Styles.content}>
                <div className={Styles.textContainer}>
                    <span className={Styles.title}>{doacao.titulo}</span>
                    <span className={Styles.description}>{doacao.descricao}</span>
                </div>
                <div className={Styles.buttonContainer}>
                    <button
                        className={`${ativo ? Styles.inactiveButton : Styles.activeButton} ${loading ? Styles.loadingButton : ''}`}
                        onClick={handleToggleStatus}
                        disabled={loading}
                    >
                        {loading ? "Carregando..." : (ativo ? "Inativar" : "Ativar")}
                    </button>
                </div>
            </div>
        </div>
    );
}

