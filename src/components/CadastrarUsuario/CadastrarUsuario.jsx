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
                    

                </form>
               
           </div>
           <div className={styles.CardPrincipal}>
                <form>
                 
                    <div>
                        <h3 className={styles.TextoLogin}>E-mail:Esperando o back-end</h3>
                        <hr></hr>
                        <h3 className={styles.TextoLogin}>Telefone:Esperando o back-end</h3>
                        <hr></hr>
                        <h3 className={styles.TextoLogin}>Conectado com rede social:Esperando o back-end</h3>
                        <hr></hr>
                        <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*g09N-jl7JtVjVZGcd-vL2g.jpeg' alt="Foto de perfil"width={50} height={60}/>
                        <span>Fotode perfil</span> 
                        <p>compartilhamento via redde social: Esperando o back</p>
                    </div>
                </form>
            </div>

        </div>
           
    )
}
export default CadastroDeUsuario;
