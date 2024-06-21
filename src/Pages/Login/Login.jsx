import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import ToastService from '../../Services/ToastService';
import ModalCadastroUsuario from '../../components/ModalCadastroDeUsuario/ModalCadastroDeUsuario';
import styles from './Login.module.css';
import Esferas from '../../components/Esferas/Esferas';
import axios from 'axios';

export default function Cadastro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [modalAberto, setModalAberto] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        verificarLogin();
    }, []);

    function verificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (usuarioEstaLogado) {
            navigate("/");
        }
    }

    async function login() {
        if (!email || !senha) {
            ToastService.Error("Por favor, preencha todos os campos.");
            return;
        }
        try {
            setLoading(true);
            const body = new URLSearchParams({
                email,
                senha,
            });

            const response = await axios.post('https://localhost:7284/api/CadastrarONG/Loginong', body);
            const token = response.data.token;
            AuthService.SalvarToken(token);
            const validado = response.data.validado;
            console.log('Token salvo:', AuthService.PegarToken());
            ToastService.Success("Seja bem-vindo, " + email);
            navigate('/');

        } catch (error) {
            if (error.response?.status === 401) {
                ToastService.Error("E-mail e/ou senha inválidos!");
            } 
            else if (error.response.status === 428) {
                ToastService.Error("Sua conta difjsoldfj");
            } else {
                ToastService.Error("Houve um erro ao realizar o login. Tente novamente mais tarde.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <ModalCadastroUsuario
                modalAberto={modalAberto}
                setModalAberto={setModalAberto}
            />
            <div className={styles.CardPrincipal}>
                <div className={styles.Titulo}>Login</div>
                <span className={styles.font1}>Email:</span>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='E-mail'
                    className={styles.Email}
                />
                <span className={styles.font1}>Senha:</span>
                <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder='Senha'
                    type='password'
                    className={styles.Senha}
                />
                <span className={styles.Modal}>Esqueceu a Senha</span>
                <button
                    className={styles.Botao}
                    onClick={login}
                    disabled={loading}
                >
                    {loading ? 'Carregando...' : 'Login'}
                </button>
                <div>
                    <span
                        onClick={() => setModalAberto(true)}
                        className={styles.Modal}
                    >
                        Novo por aqui? Cadastre-se
                    </span>
                </div>
            </div>
            <Esferas />
        </div>
    );
}
