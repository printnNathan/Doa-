import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import Navbar from '../../components/NavBar/Header';
import Anuncios from '../../components/Anuncios/Anuncios';
import Footer from '../../components/Footer/Footer2';

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
    useEffect(() => {
        fetch("https://localhost:7284/api/CadastrarONG", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setUsuario(json);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar usuários");
            });
    }, []);

    if (loading) {
      
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <Navbar />
            <Anuncios />
            <Footer />
        </div>
    );
}

export default Home;


