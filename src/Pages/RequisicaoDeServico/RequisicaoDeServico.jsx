import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Requisicaodeservico.module.css';
import Esferas from "../../components/Esferas/Esferas";
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
<<<<<<< HEAD
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
=======
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
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49

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
<<<<<<< HEAD

            <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
            <div className={styles.form} >
                <div className={styles.CardEmail}>
                    <span className={styles.font1}>TÍTULO:</span>
                    <input type="text" name="usuario" placeholder="CONSERTO DE ENCANAMENTO" className={styles.Apelido} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
=======
            <div className={styles.barra}>
                <div className={styles.form}>
                 <h1 className={styles.TextoLogin}>Agora, compartilhe algumas informações sobre seu produto</h1>
                <div className={styles.CardEmail}>
                    <span className={styles.font1}>TÍTULO:</span>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}  className={styles.Apelido}/>
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49
                </div>

                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>DESCRIÇÃO</span>
<<<<<<< HEAD
                    <input type="text" name="Senha" placeholder="SERVIÇO DOMÉSTICO" className={styles.Apelido2} value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                </div>

=======
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)}  className={styles.Apelido2}/>
                </div> 
                <div className={styles.Cardapelido}>
                    <span className={styles.font1}>LOCALIZAÇÃO</span>
                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}  className={styles.Apelido}/>
                </div> 
                <div className={styles.Foto}>
                    <button>Fotos</button>
                    <p></p>        
                </div>  
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49
                <div className={styles.Cardapelido}>
                    <form onSubmit={handleSubmit}>
                    <h5 className={styles.font1}>CONTATO</h5>
                    <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/15/15407.png' alt="Telefone" width={30} height={30} />
<<<<<<< HEAD
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
=======
                    <span className={styles.font2}>(11)9914423541</span>
                   
                    <Link to="/MeusAnuncios">
                    <button type="submit">Concluir</button>
                    </Link>
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
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49
export default RequisicaoDeServico;
