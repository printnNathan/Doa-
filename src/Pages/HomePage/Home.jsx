import Navbar from '../../components/NavBar/Header';
import Anuncios from '../../components/Anuncios/Anuncios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        VerificarLogin();
        BuscarDadosUsuario();
    }, []);

    function VerificarLogin() {
        const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
        if (!usuarioEstaLogado) {
            navigate("/login");
        }
    }

    async function BuscarDadosUsuario() {
        debugger;
        const response = await ApiService.get('/Usuarios/getuserdata');
        if (response.status == 200) {
            setUsuario(response.data);
        }
    }

    return (
        <div>
            <div>Home</div>
            <div>{usuario.id}</div>
               <Navbar/>
              <Anuncios/>
              <Footer/>
        </div>
    );
}
export default Home
