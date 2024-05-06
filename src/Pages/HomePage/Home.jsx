import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import Navbar from '../../components/NavBar/Header';
import Anuncios from '../../components/Anuncios/Anuncios';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

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
            }
        }

        fetchData();
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <Anuncios />
            <Footer />
        </div>
    );
}

export default Home;

