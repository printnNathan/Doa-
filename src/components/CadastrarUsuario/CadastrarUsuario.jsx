import React from 'react';
import styles from  './CadastrarUsuario.module.css';




const CadastroDeUsuario = () => {
    return (
        <div>
           <div className={styles.CardPrincipal}>
                <form>
                <h1 className={styles.TextoLogin}>Meu cadastro</h1>
                    <div className={styles.CardEmail}>
                        <span className={styles.font1}>Nome completo:</span>
                        <input type="text" name="usuario" placeholder="Nome" className={styles.Email} />

                    </div>
                    <div className={styles.Cardapelido}>
                        <span className={styles.font1}>Apelido</span>
                        <input type="text" name="Senha" placeholder="Apelido" className={styles.Apelido} />
                        <div>
                        <span className={styles.EsqueceuSenha}>(como aparecerá  publicamente)</span>
                        </div>
                    </div>

                    <div>
                    <button className={styles.BotãoDeEntrar}>Salvar alterações</button>
                    </div>
                    
                    <span>Cadastre-se Gratuitamente</span>

                </form>
               
           </div>
           <div className={styles.CardPrincipal}>
                <form>
                 
                    <div>
                        <h3 className={styles.TextoLogin}>E-mail:Esperando o back-end</h3>
                        <hr></hr>
                        <h3 className={styles.TextoLogin}>Telefone::Esperando o back-end</h3>
                    </div>
                </form>
            </div>

        </div>
           
    )
}
export default CadastroDeUsuario;
