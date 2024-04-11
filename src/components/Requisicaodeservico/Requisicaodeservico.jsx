import React, { useState } from "react";
import styles from './RequisicaoDeServico.module.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Header'

const RequisicaoDeServico = () => {
    const [alternancia, setAlternancia] = useState(false);

    const handleAlternancia = (event) => {
        event.preventDefault(); // Evita o recarregamento da página
        setAlternancia(!alternancia);
    };

    return(
        <div>
            <NavBar />
            <form>
                <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
                <div className={styles.CardEmail}>
                    <span className={styles.font1}>TÍTULO:</span>
                    <input type="text" name="usuario" placeholder="CONSERTO DE ENCANAMENTO" className={styles.Apelido} />
                </div>
                <div className={styles.Cardapelido}>
                    <span className={styles.font2}>DESCRIÇÃO</span>
                    <input type="text" name="Senha" placeholder="SERVIÇO DOMÉSTICO" className={styles.Apelido2} />
                </div> 
                <div className={styles.Cardapelido}>
                    <span className={styles.font3}>LOCALIZAÇÃO</span>
                    <input type="text" name="Senha" placeholder="CEP" className={styles.Apelido3} />
                </div> 
                <div className={styles.Cardapelido}>
                    <h5 className={styles.font1}>CONTATO</h5>
                    <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/15/15407.png' alt="Telefone" width={30} height={30} />
                    <span className={styles.font1}>(11)9914423541</span>
                    <span className={styles.ExibirTelefone}>Exibir meu telefone neste anúncio</span>
                    <button className={`${styles.neumorphicButton} ${alternancia ? styles.active : ""}`} onClick={handleAlternancia}>
                        <div className={styles.innerButton} />
                    </button>
                </div>
            </form>
          

        </div>
    )
}
export default RequisicaoDeServico;



