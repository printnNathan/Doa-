import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './Requisicaodeservico.module.css';
import Esferas from "../../components/Esferas/Esferas";
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import ApiService from "../../Services/ApiService";
import ToastService from "../../Services/ToastService";

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
    const [imagensPedido, setImagensPedido] = useState([]);
    const [previa, setPrevia] = useState([]);

    function handleFileChange(event) {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const previews = [];
            const images = [];

            for (let i = 0; i < selectedFiles.length; i++) {
                const reader = new FileReader();
                const currentFile = selectedFiles[i];

                reader.onload = function (e) {
                    previews.push(URL.createObjectURL(currentFile));
                    images.push({ base64: e.target.result.split(',')[1] });

                    // Se todas as imagens foram carregadas, atualize os estados
                    if (previews.length === selectedFiles.length) {
                        setPrevia(previews);
                        setImagensPedido(images);
                    }
                };

                reader.readAsDataURL(currentFile);
            }
        } else {
            setImagensPedido([]);
            setPrevia([]); // Limpa as prévias se nenhum arquivo estiver selecionado
        }
    };

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

    async function PegarIdOng() {
        try {
            const response = await ApiService.get("/ONGs/listarPorID");
            return response.data.id;
        } catch (error) {
            ToastService.Error("Erro ao obter ID da ONG");
        }
    }

    return (
        <div>
            <NavBar />
            <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
            <div className={styles.form}>
                <div className={styles.CardEmail}>
                    <span className={styles.font1}>TÍTULO:</span>
                    <input 
                        type="text" 
                        placeholder="CONSERTO DE ENCANAMENTO" 
                        className={styles.Apelido} 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                    />
                </div>
                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>DESCRIÇÃO</span>
                    <input 
                        type="text" 
                        placeholder="SERVIÇO DOMÉSTICO" 
                        className={styles.Apelido2} 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                    />
                </div>
                <div className={styles.Foto}>
                    <input 
                        multiple 
                        type="file" 
                        accept="image/jpeg" 
                        onChange={handleFileChange} 
                    />
                </div>
                <div className={styles.Cardapelido}>
                    <form onSubmit={handleSubmit}>
                        <h5 className={styles.font1}>CONTATO</h5>
                        <img 
                            className={styles.img} 
                            src='https://cdn-icons-png.flaticon.com/512/15/15407.png' 
                            alt="Telefone" 
                            width={30} 
                            height={30} 
                        />
                        <span className={styles.font1}>(11)9914423541</span>
                        <button type="submit">Concluir</button>
                        <Link to="/EscolherCategoria">
                            <button type="button">Cancelar</button>
                        </Link>
                    </form>
                </div>
                <div>
                    {previa.map((src, index) => (
                        <img key={index} className={styles.imagem} src={src} alt={`Preview ${index}`} />
                    ))}
                </div>
            </div>
            <Footer style={{ marginTop: "1000px" }} />
            <Esferas />
        </div>
    );
}

export default RequisicaoDeServico;

