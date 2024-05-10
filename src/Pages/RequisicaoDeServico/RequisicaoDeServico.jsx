import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Requisicaodeservico.module.css';
import Esferas from "../../components/Esferas/Esferas";
import Footer from '../../components/Footer/Footer2';
import NavBar from '../../components/NavBar/Header';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';

const RequisicaoDeServico = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cep, setCep] = useState('');
    const [idTipoDoacao, setIdTipoDoacao] = useState('');
    const [nomeTipoDoacao, setNomeTipoDoacao] = useState('');
    const [idONG, setIdONG] = useState('');
    const [nomeONG, setNomeONG] = useState('');
    const [emailONG, setEmailONG] = useState('');
    const [senhaONG, setSenhaONG] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await ApiService.post('/PedidosDoacao/CadastrarPedidos', {
                titulo: titulo,
                descricao: descricao,
                cep: cep,
                iD_ONG: parseInt(idONG),
                iD_Tipo: parseInt(idTipoDoacao),
                ong: { 
                    nome: nomeONG,
                    email: emailONG,
                    senha: senhaONG
                },
                tipoDoacao: { nome: nomeTipoDoacao } 
            });
            console.log('Pedido enviado com sucesso:', response.data);
            ToastService.Success("Pedido enviado com sucesso!");
        } catch (error) {
            console.error('Erro ao enviar pedido:', error);
            ToastService.Error("Erro ao enviar pedido. Por favor, tente novamente.");
        }
    };

    return(
        <div>
            <NavBar />
            <div className={styles.barra}>
                <div className={styles.form}>
                 <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
                <div className={styles.CardEmail}>
                    <span className={styles.font1}>TÍTULO:</span>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}  className={styles.Apelido}/>
                </div>
                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>DESCRIÇÃO</span>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)}  className={styles.Apelido2}/>
                </div> 
                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>LOCALIZAÇÃO</span>
                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}  className={styles.Apelido}/>
                </div> 
                <div className={styles.Cardapelido}>
                    <label>ID do Tipo de Doação:</label>
                    <input type="text" value={idTipoDoacao} onChange={(e) => setIdTipoDoacao(e.target.value)}  className={styles.Apelido}/>
                    <label>Nome do Tipo de Doação:</label>
                    <input type="text" value={nomeTipoDoacao} onChange={(e) => setNomeTipoDoacao(e.target.value)}  className={styles.Apelido}/>
                </div> 
                <div className={styles.Cardapelido}>
                    <label>ID da ONG:</label>
                    <input type="text" value={idONG} onChange={(e) => setIdONG(e.target.value)}  className={styles.Apelido}/>
                    <label>Nome da ONG:</label>
                    <input type="text" value={nomeONG} onChange={(e) => setNomeONG(e.target.value)}  className={styles.Apelido}/>
                    <label>Email da ONG:</label>
                    <input type="text" value={emailONG} onChange={(e) => setEmailONG(e.target.value)}  className={styles.Apelido}/>
                    <label>Senha da ONG:</label>
                    <input type="password" value={senhaONG} onChange={(e) => setSenhaONG(e.target.value)}  className={styles.Apelido}/>
                </div> 
                <div className={styles.Foto}>
                    <button>Fotos</button>
                    <p></p>        
                </div>  
                <div className={styles.Cardapelido}>
                    <form onSubmit={handleSubmit}>
                    <h5 className={styles.font1}>CONTATO</h5>
                    <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/15/15407.png' alt="Telefone" width={30} height={30} />
                    <span className={styles.font2}>(11)9914423541</span>
                    <Link to="/home">
                    <button type="submit">Concluir</button>
                    </Link>
                    <Link to="/Escolherc">
                    <button>Cancelar</button>
                    </Link>
                    </form> 
                </div>   
                </div>  
            </div>
             
            <Footer style={{ marginTop: "1000px" }}/>  
        </div>
    )
}
export default RequisicaoDeServico;
