import React, { useState } from "react";
import styles from './Requisicaodeservico.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import ApiService from "../../Services/ApiService";
import ToastService from "../../Services/ToastService";
import { useAsyncError } from "react-router-dom";


const RequisicaoDeServico = () => {
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


    async function PegarIdOng() {
        try {
            const response = await ApiService.get("/ONGs/listarPorID");
            return response.data.id;

        } catch (error) {
            ToastService.Error("Error ao cadastrar anuncio")
        }
    }


    const [titulo, setTitulo] = useState("");
    const [id_tipo, setID_tipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");
    const [imagensPedido, setImagensPedido] = useState([]);
    const [previa, setPrevia] = useState("");

    const CadastrandoRequisicao = async () => {
        try {
            const idOng = await PegarIdOng();

            const body = {
                titulo,
                id_tipo: 2,
                descricao,
                id_ong: idOng,
                status: true,
                tipoDoacao: {
                    id: 2
                },
                imagensPedido

            };
            await ApiService.post("/PedidosDoacao/cadastrarpedido", body);
            ToastService.Success("Pedido cadastrado com sucesso");
        } catch (error) {
            ToastService.Error("Erro ao cadastrar Pedido");
        }



    }

    return (
        <div>
            <NavBar />

            <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
            <div className={styles.form} >
                <div className={styles.CardEmail}>
                    <span className={styles.font1}>TÍTULO:</span>
                    <input type="text" name="usuario" placeholder="CONSERTO DE ENCANAMENTO" className={styles.Apelido} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>

                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>DESCRIÇÃO</span>
                    <input type="text" name="Senha" placeholder="SERVIÇO DOMÉSTICO" className={styles.Apelido2} value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                </div>

                <div className={styles.Cardapelido}>
                    <h5 className={styles.font1}>CONTATO</h5>
                    <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/15/15407.png' alt="Telefone" width={30} height={30} />
                    <span className={styles.font1}>(11)9914423541</span>
                </div>



                <div >
                    <img className={styles.imagem} src={previa} />
                </div>

                <input multiple type="file" accept="image/jpeg" onChange={handleFileChange} />


                <button onClick={CadastrandoRequisicao}>Cadastrar</button>

            </div>



        </div>

    );
};
export default RequisicaoDeServico;
