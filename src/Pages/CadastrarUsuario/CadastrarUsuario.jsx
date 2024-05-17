import React, { useState, useEffect } from 'react';
import styles from './CadastrarUsuario.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import ApiService from '../../Services/ApiService';
import axios from 'axios';
import ToastService from '../../Services/ToastService';

const CadastrarUsuario = () => {

    const [nome, setNome] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplento] = useState("");
    const [estado, setEstado] = useState("");
    const [biografia, setBiografia] = useState("");

    useEffect(() => {
        ListarInformacoesONG();
    }, []);

    async function ListarInformacoesONG() {
        try {
            const response = await ApiService.get("/ONGs/listarPorID");

            setNome(response.data.nome)
            setEmail(response.data.email);
        } catch (error) {
            ToastService.Error('Erro')
        }
    }

    return (
        <div>
            <NavBar />

            <div className={styles.CardPrincipal}>

                <div>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

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
                        <h3 className={styles.TextoLogin}>E-mail: Esperando o back-end</h3>
                        <hr className={styles.Hr}></hr>
                        <h3 className={styles.TextoLogin}>Telefone: Esperando o back-end</h3>
                        <hr className={styles.Hr}></hr>
                        <h5>Foto de perfil</h5>
                        <img className={styles.img} src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*g09N-jl7JtVjVZGcd-vL2g.jpeg' alt="Foto de perfil" width={70} height={70} />
                        <span>Esperando o back</span>
                    </div>
                </form>
            </div>
            <div className={styles.CardPrincipal}>
                <div><h6 className={styles.CardPrincipal2}>Adicionar endereço +</h6></div>
            </div>
            <div className={styles.CardPrincipal}>
                <h3>Desativar minha conta</h3>

                <button className={styles.Desativar} >Desativar</button>

                <img src='https://img.freepik.com/vetores-premium/sinais-de-aviso-de-perigo-de-alta-tensao-isolado-em-um-fundo-branco_68708-427.jpg' alt="Alerta" width={80} height={90} />
                <span>Seu perfil será desabilitado e anúncios excluídos. Ative a conta quando quiser.</span>
            </div>
            <Footer />
        </div>
    );
}

export default CadastrarUsuario;