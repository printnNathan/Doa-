import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Requisicaodeservico.module.css';
import Esferas from "../../components/Esferas/Esferas";
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import ApiService from "../../Services/ApiService";
import ToastService from "../../Services/ToastService";
import AuthService from "../../Services/AuthService";

const RequisicaoDeServico = () => {


    function handleFileChange(event) {
        const selectedFiles = event.target.files;

        if (selectedFiles.length > 0) {
            const previas = [];
            const imagens = [];

            Array.from(selectedFiles).forEach(file => {
                previas.push(URL.createObjectURL(file));

                const reader = new FileReader();
                reader.onload = function (e) {
                    const base64 = e.target.result.split(',')[1];
                    imagens.push(base64);

                    // Atualize o estado após todos os arquivos serem processados
                    if (imagens.length === selectedFiles.length) {
                        setImagens(imagens);
                    }
                };
                reader.readAsDataURL(file);
            });

            console.log(imagens)
            setPrevia(previas);
        } else {
            setImagens(null);
            setPrevia(null); // Limpa as imagens e previas se nenhum arquivo estiver selecionado
        }
    }


    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagens, setImagens] = useState("");
    const [previa, setPrevia] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const idOng = AuthService.PegarDadosUsuario().ID;
            console.log(idOng);
            const imagensPedido = [];

            imagens.forEach(imagem => {
                imagensPedido.push({ base64: imagem })
            });

            const body = {
                titulo,
                id_tipo: 2,
                descricao,
                id_ong: idOng,
                status: true,
                imagensPedido
            };

            await ApiService.post("/PedidosDoacao/cadastrarpedido", body);
        } catch (error) {
            ToastService.Error("Erro ao cadastrar Pedido");
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
                        {previa && (
                            <img className={styles.previewImage} src={previa} alt={`Preview`} />
                        )}
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
                                <button type="submit" className={styles.submitButton} onClick={handleSubmit}>Concluir</button>
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
