import React, { useEffect, useState } from 'react'
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from "react-router-dom";
import ToastService from '../../Services/ToastService';
import ModalCadastroUsuario from '../../components/ModalCadastroDeUsuario/ModalCadastroDeUsuario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './Login.module.css';
import Bolas from  '../../components/Bolas/Bolas';


export default function Cadastro() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [modalAberto, setModalAberto] = useState(false);

    useEffect(() => {
        VerificarLogin();
    }, []);

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (usuarioEstaLogado) {
            navigate("/login");
        }
    }

    function AbrirModal() {
        setModalAberto(true);
    }

    async function Login() {
        try {
            const body = new URLSearchParams({
                email,
                senha,
            });

            const response = await ApiService.post("/Usuarios/Login", body);
            const token = response.data.token;

            AuthService.SalvarToken(token);

            ToastService.Success("Seja bem vindo, " + email);
           
            navigate("/Home");
            //setTimeout(() => {
            //window.location.reload();
            //}, 1000);
        }
        catch (error) {
            if (error.response?.status === 401) {
                ToastService.Error("E-mail e/ou senha inválidos!");
                return;
            }
            ToastService.Error("Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.");
        }
    }

    return (
        <div>
            <ModalCadastroUsuario
                modalAberto={modalAberto}
                setModalAberto={setModalAberto}
            />
            
            <div className={styles.CardPrincipal}>
                <span>Login</span>
                <span className={styles.font1}>Email:</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' className={styles.Email} />

                <span className={styles.font1}>Senha</span>
                <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha'type='Password' className={styles.Senha} />
                <div className={styles.EsqueceuSenha}>Esqueceu a Senha</div>

                <button className={styles.Botao} onClick={Login}>Login</button>

                <div>
                <button className={styles.Botao2} onClick={AbrirModal}>Novo por aqui? Cadastre-se</button>
                </div>
            </div>
            <Bolas/>

        </div>
    )
}


