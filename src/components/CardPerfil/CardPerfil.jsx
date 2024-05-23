import Styles from './CardDoacao.module.css';
export default function CardPerfil({ doacao, ativo }) {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Imagecontainer}>
                <img className={Styles.image} />
                <div>
                    <button className={Styles.botaoA}>Atualizar</button>
                </div>
            </div>

            <div className={Styles.content}>
                <div>
                    <center>
                    <input   
                    className={styles.Pesquisa}            
                    type="text"
                    value={texto}
                    onChange={handleChange}
                    placeholder="Nome Completo" >
                    </input>
                    </center>
                </div>

                <div>
                    <center>
                    <input   
                    className={styles.Pesquisa}            
                    type="text"
                    value={texto}
                    onChange={handleChange}
                    placeholder="Email" >
                    </input>
                    </center>
                </div>

                <div>
                    <center>
                    <input   
                    className={styles.Pesquisa}            
                    type="text"
                    value={texto}
                    onChange={handleChange}
                    placeholder="Celular" >
                    </input>
                    </center>
                </div>

                <div>
                    <center>
                    <input   
                    className={styles.Pesquisa}            
                    type="text"
                    value={texto}
                    onChange={handleChange}
                    placeholder="Senha" >
                    </input>
                    </center>
                </div>

                <div>
                    <center>
                    <input   
                    className={styles.Pesquisa}            
                    type="text"
                    value={texto}
                    onChange={handleChange}
                    placeholder="Endereço" >
                    </input>
                    </center>
                </div>

                <div> 
                    <button className={styles.botaoD}>Desativar</button>
                </div>

            </div>
        </div>
    )
}