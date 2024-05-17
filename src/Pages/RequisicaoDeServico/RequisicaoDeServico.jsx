import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Requisicaodeservico.module.css';
import Esferas from "../../components/Esferas/Esferas";
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';
import { useNavigate } from 'react-router-dom';

const RequisicaoDeServico = () => {
    const navigate = useNavigate();
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
            navigate('/MeusAnuncios');
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
                <div className={styles.Foto}>
                    <button>Fotos</button>
                    <p></p>        
                </div>  
                <div className={styles.Cardapelido}>
                    <form onSubmit={handleSubmit}>
                    <h5 className={styles.font1}>CONTATO</h5>
                    <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/15/15407.png' alt="Telefone" width={30} height={30} />
                    <span className={styles.font2}>(11)9914423541</span>
                    <button type="submit">Concluir</button>
                    <Link to="/EscolherCategoria">
                    <button>Cancelar</button>
                    </Link>
                    </form> 
                </div>   
                </div>  
            </div>
             
            <Footer style={{ marginTop: "1000px" }}/>  
            <Esferas/>
        </div>
    )
}
export default RequisicaoDeServico;
