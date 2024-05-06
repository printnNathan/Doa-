import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import ToastService from '../../Services/ToastService';
import ModalCadastroUsuario from '../../components/ModalCadastroDeUsuario/ModalCadastroDeUsuario';
import styles from './Login.module.css';
import Esferas from '../../components/Esferas/Esferas';

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

            const response = await ApiService.post("/CadastrarONG/Loginong", body);
            const token = response.data.token;

            AuthService.SalvarToken(token);

            ToastService.Success("Seja bem vindo, " + email);
            navigate('/Perfil', { state: { email } });
            navigate('/')
        } catch (error) {
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
                <div className={styles.Titulo}> Login</div>
                <span className={styles.font1}>Email:</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' className={styles.Email} />
                <span className={styles.font1}>Senha</span>
                <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha'type='Password' className={styles.Senha} />
                <span className={styles.Modal}>Esqueceu a Senha</span>
                <button className={styles.Botao} onClick={Login}>Login</button>
                <div>
                    <span onClick={AbrirModal} className={styles.Modal}>Novo por aqui? Cadastre-se</span>
                </div>
            </div>
            <Esferas />
        </div>
    )
}


