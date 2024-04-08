import React from "react";
import styles from './Requisiçãodeserviço.module.css';

const Requisiçãodeserviço = () => {
    return(
        <form>
            <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
            <div className={styles.CardEmail}>
                <span className={styles.font1}>TÍTULO:</span>
                <input type="text" name="usuario" placeholder="CONSERTO DE ENCANAMENTO" className={styles.Email} />

            </div>
            <div className={styles.Cardapelido}>
                <span className={styles.font1}>DESCRIÇÃO</span>
                <input type="text" name="Senha" placeholder="SERVIÇO DOMÉSTICO" className={styles.Apelido} />
            </div> 
            <div className={styles.Cardapelido}>
                <span className={styles.font1}>LOCALIZAÇÃO</span>
                <input type="text" name="Senha" placeholder="CEP" className={styles.Apelido} />
            </div> 
            <div className={styles.Cardapelido}>
                <span className={styles.font1}>CONTATO</span>
            </div> 
        </form>
    )
}
export default Requisiçãodeserviço;