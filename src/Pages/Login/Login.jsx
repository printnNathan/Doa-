import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../Services/ApiService';
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
<<<<<<< HEAD

    useEffect(() => {
        VerificarLogin();
    }, []);

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (usuarioEstaLogado) {
            navigate("/Login");
        }
    }

    function AbrirModal() {
        setModalAberto(true);
    }
=======
    const [loading, setLoading] = useState(false);
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49

    async function Login() {
        try {
            setLoading(true);

            const body = new URLSearchParams({
                email,
                senha,
            });

<<<<<<< HEAD
            const response = await ApiService.post("/CadastrarONG/Loginong", body);
=======
            const response = await axios.post('https://localhost:7284/api/CadastrarONG/Loginong', body);
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49
            const token = response.data.token;

            AuthService.SalvarToken(token);

<<<<<<< HEAD
            ToastService.Success("Seja bem vindo, " + email);
           
            navigate("/CadastrarUsuario");
            //setTimeout(() => {
            //window.location.reload();
            //}, 1000);
        }
        catch (error) {
=======
            ToastService.Success("Seja bem-vindo, " + email);
            navigate('/Meus anuncios');
        } catch (error) {
>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49
            if (error.response?.status === 401) {
                ToastService.Error("E-mail e/ou senha inválidos!");
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
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' className={styles.Email} />
                <span className={styles.font1}>Senha:</span>
                <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' type='password' className={styles.Senha} />
                <span className={styles.Modal}>Esqueceu a Senha</span>
                <button className={styles.Botao} onClick={Login} disabled={loading}>
                    {loading ? 'Carregando...' : 'Login'}
                </button>
                <div>
                    <span onClick={() => setModalAberto(true)} className={styles.Modal}>Novo por aqui? Cadastre-se</span>
                </div>
            </div>
            <Esferas />
        </div>
<<<<<<< HEAD
    )
}
=======
    );
}



>>>>>>> 74ee5a982b175917b1e5a6c767196a7f19589a49
