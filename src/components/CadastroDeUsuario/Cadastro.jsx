import React from 'react';
import styles from './Cadastro.module.css';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';


const CadastroDeUsuario = () => {
    return (
        <div>
           
            <div className={styles.CardPrincipal}>
                <form>
                    <h1 className={styles.TextoLogin}>Login</h1>
                    <div className={styles.CardEmail}>
                        <span className={styles.font1}>Email:</span>
                        <input type="text" name="usuario" placeholder="username@gmail.com" className={styles.Email} />

                    </div>
                    <div className={styles.CardSenha}>
                        <span className={styles.font1}>Senha</span>
                        <input type="password" name="Senha" placeholder="Senha" className={styles.Senha} />
                        <span className={styles.EsqueceuSenha}>Esqueceu a Senha</span>
                    </div>

                    <div>
                    <button className={styles.BotãoDeEntrar}>Entrar</button>
                    </div>
                    
                    <div>
                    <span>Continue Com</span>
                    </div>

                    <div className={styles.Icons2}>
                            <FaFacebook  className={styles.Icons}/>
                            <FaInstagram className={styles.Icons}/>
                            <FaGoogle className={styles.Icons}/>
                    </div>
                   

                    <span>Cadastre-se Gratuitamente</span>

                </form>
                
            </div>
            <div className={styles.Bola}/>
        </div>
    )
}

export default CadastroDeUsuario;