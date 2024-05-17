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

                    if (previews.length === selectedFiles.length) {
                        setPrevia(previews);
                        setImagensPedido(images);
                    }
                };

                reader.readAsDataURL(currentFile);
            }
        } else {
            setImagensPedido([]);
            setPrevia([]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await ApiService.post('/PedidosDoacao/cadastrarpedido', {
                titulo,
                descricao,
                cep,
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

    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <h1 className={styles.text}>Agora, compartilhe algumas informações sobre seu produto</h1>
                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <span className={styles.label}>TÍTULO:</span>
                        <input 
                            type="text" 
                            placeholder="CONSERTO DE ENCANAMENTO" 
                            className={styles.input} 
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <span className={styles.label}>DESCRIÇÃO:</span>
                        <input 
                            type="text" 
                            placeholder="SERVIÇO DOMÉSTICO" 
                            className={styles.input} 
                            value={descricao} 
                            onChange={(e) => setDescricao(e.target.value)} 
                        />
                    </div>
                    <div className={styles.previewContainer}>
                        {previa.map((src, index) => (
                        <img key={index} className={styles.previewImage} src={src} alt={`Preview ${index}`} />
                        ))}
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            multiple 
                            type="file" 
                            accept="image/jpeg" 
                            onChange={handleFileChange} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <form onSubmit={handleSubmit}>
                            <h5 className={styles.label}>CONTATO</h5>
                            <img 
                                className={styles.icon} 
                                src='https://cdn-icons-png.flaticon.com/512/15/15407.png' 
                                alt="Telefone" 
                                width={30} 
                                height={30} 
                            />
                            <span className={styles.contact}>(11) 99144-23541</span>
                            <div className={styles.buttonGroup}>
                                <button type="submit" className={styles.submitButton}>Concluir</button>
                                <Link to="/EscolherCategoria">
                                    <button type="button" className={styles.cancelButton}>Cancelar</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            <Esferas />
        </div>
    );
}

export default RequisicaoDeServico;


