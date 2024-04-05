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
                        <hr className={styles.Hr}></hr>
                        <h3 className={styles.TextoLogin}>Telefone:Esperando o back-end</h3>
                        <hr className={styles.Hr}></hr>
                        <h3 className={styles.TextoLogin}>Conectado com rede social:Esperando o back-end</h3>
                        <hr className={styles.Hr}></hr>
                        <h5>Fotode perfil</h5>
                        <img className={styles.img} src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*g09N-jl7JtVjVZGcd-vL2g.jpeg' alt="Foto de perfil"width={70} height={70} />
                        <span>compartilhamento via redde social: Esperando o back</span>
                    </div>
                </form>
            </div>
            <div className={styles.CardPrincipal}>
                    <div><h6 className={styles.CardPrincipal2}>Adicionar endereço +</h6></div>
            </div>
            <div className={styles.CardPrincipal}>
                    <h3>Desativar minha conta</h3>
                <img src='https://img.freepik.com/vetores-premium/sinais-de-aviso-de-perigo-de-alta-tensao-isolado-em-um-fundo-branco_68708-427.jpg' alt="Alerta"width={80} height={90}/>
                  <span>Seu perfil será desabilitado e anúncios excluídos.Ative a conta quando quiser</span>
                  
            </div>
        </div>
           
    )
}
export default CadastroDeUsuario;
