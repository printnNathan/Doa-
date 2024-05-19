import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import Navbar from '../../components/NavBar/Header';
import Anuncios from '../../components/Anuncios/Anuncios';
import Footer from '../../components/Footer/Footer';
import styles from './MeusAnuncios.module.css';

const Home = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
                if (!usuarioEstaLogado) {
                    navigate("/login");
                    return;
                }
                
                const response = await ApiService.get('/CadastrarONG/CadastrarONG');
                if (response.status === 200) {
                    setUsuario(response.data);
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
                // Adicione tratamento de erro aqui, como exibir uma mensagem para o usuário
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [navigate]);

    if (loading) {
        return (
            <div className={styles.loading2}>
                <div className={styles.loading}></div>
            </div>
        );
    }

    return (
        <div>
        <div className={styles.homeLayout}>
            <Navbar className={styles.Navbar} />
            <Anuncios className={styles.Anuncios} />

        </div>
        <Footer className={styles.Footer} />
        </div>
    );
};

export default Home;



