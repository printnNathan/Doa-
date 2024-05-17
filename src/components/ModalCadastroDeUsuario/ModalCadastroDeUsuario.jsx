import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';
import styles from './ModalCadastroDeUsuario.module.css'

export default function ModalCadastroUsuario({ modalAberto, setModalAberto }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%', 
           maxWidth: '800px', 
           maxHeight: '600px', 
            
        },
    };
    Modal.setAppElement('#root');
    
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
    const [fotodeperfil, setFotoperfil] = useState("")
    const [biografia, setBiografia] = useState("");
    const [previa, setPrevia] = useState("");


    async function Cadastrar() {
        try {
            const body = {
                nome,
                celular, 
                email,
                senha,
                cep,
                logradouro,
                numero,
                cidade,
                bairro,
                complemento,
                estado,
                biografia,
                base64 : fotodeperfil 
            };

            await ApiService.post("/CadastrarONG/cadastrarONG", body);
            ToastService.Success("Usuário cadastrado com sucesso!");
            setModalAberto(false);

        } catch (error) {
            ToastService.Error("Erro ao cadastrar usuário");
        }
    }

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            setPrevia(URL.createObjectURL(selectedFile));

            const reader = new FileReader();
            reader.onload = function (e) {
                const base64 = e.target.result.split(',')[1];
                setFotoperfil(base64);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setFotoperfil(null);
            setPrevia(null); // Limpa o base64 se nenhum arquivo estiver selecionado
        }
    };

    return (
        <Modal
            isOpen={modalAberto}
            style={customStyles}
        >
            <h2>Cadastre-se</h2>

            <div className={styles.Titulos}>
                 <span>Nome</span>
            </div>

            <div>
            <input placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}  className={styles.inputForm} />
            </div>

            <div className={styles.Titulos}>
                <span>Celular</span>
            </div>

            <div>
            <input placeholder='celular' value={celular} onChange={(e) => setCelular(e.target.value)} className={styles.inputForm} />
            </div>

            <div>
                <span>E-Mail</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}  className={styles.inputForm}/>
            </div>

            <div>
                 <span>Senha</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='Senha' type='Password' value={senha} onChange={(e) => setSenha(e.target.value)}  className={styles.inputForm}/>
            </div>

            <div>
            <span>Cep</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='cep' value={cep} onChange={(e) => setCep(e.target.value)}  className={styles.inputForm}/>
            </div>

            <div>
            <span>Logradouro</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='logradouro' value={logradouro} onChange={(e) => setLogradouro(e.target.value)} className={styles.inputForm} />
            </div>

            <div>
            <span>Numero</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='numero' value={numero} onChange={(e) => setNumero(e.target.value)} className={styles.inputForm} />
            </div>

            <div>
            <span>Cidade</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='cidade' value={cidade} onChange={(e) => setCidade(e.target.value)} className={styles.inputForm} />
            </div>

            <div>
            <span>Bairro</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='bairro' value={bairro} onChange={(e) => setBairro(e.target.value)} className={styles.inputForm} />
            </div>

            <div>
            <span>complemento</span>
            </div>

            <div className={"input-container"}>
            <input placeholder='complemento' value={complemento} onChange={(e) => setComplento(e.target.value)} className={styles.inputForm} />
            </div>

            <span>Estado</span>
            <div className={"input-container"}>
            <input placeholder='estado' value={estado} onChange={(e) => setEstado(e.target.value)} className={styles.inputForm} />
            </div>

            <span>Biografia</span>
            <div className={"input-container"}>
            <input placeholder='biografia' value={biografia} onChange={(e) => setBiografia(e.target.value)} className={styles.inputForm} />
            </div>
            
            <div>
                <img className={styles.imagem} src={previa}/>
            </div>

            <input type="file" accept="image/jpeg" onChange={handleFileChange} />


            <div>
            <button onClick={() => { setModalAberto(false) }}>Fechar</button>
            </div>

            <div>
            <button onClick={Cadastrar}>Cadastrar</button>
            </div>



        </Modal>
    )
}
