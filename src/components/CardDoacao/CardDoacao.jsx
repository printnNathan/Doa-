
import Styles from './CardDoacao.module.css';
export default function CardDoacao({ doacao, ativo }) {
    return (
        <div className={Styles.container}>
            <div className={Styles.imageContainer}>
                <img className={Styles.image} src={doacao.imagensPedido[0].link ?? ""} />
            </div>
            <div className={Styles.content}>
                <div className={Styles.textContainer}>
                    <span className={Styles.title}>{doacao.titulo}</span>
                    <span className={Styles.description}>{doacao.descricao}</span>
                </div>
                <div className={Styles.buttonContainer}>
                    <button className={ativo ? Styles.inactiveButton : Styles.activeButton}>{ativo ? "Inativar" : "Ativar"} </button>
                </div>
            </div>
        </div>
    );
}