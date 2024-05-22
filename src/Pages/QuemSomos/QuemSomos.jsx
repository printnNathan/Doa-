import NavBar from '../../components/NavBar/Header';
import styles from './QuemSomos.module.css';
import Footer2 from '../../components/Footer/Footer';
import Esferas from '../../components/Esferas/Esferas';
import React, { useEffect, useState } from 'react';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';

export default function QuemSomos() {
    const [texto, setTexto] = useState('');
    const tipoTela = 'QuemSomos';

    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    const navigate = useNavigate(); // TELA LOGIN, PARTE LOGIN...
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
                if (!usuarioEstaLogado) {
                    navigate("/QuemSomos");
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


            <NavBar />

            <div><h1 className={styles.Texto1}>Quem Somos</h1></div>

            <center><div><h1 className={styles.Texto2}> Abrale - Associação Brasileira de Linfoma e Leucemia</h1></div></center>

            
            <center>
            <input   
                className={styles.biografia}            
                type="text"
                value={texto}
                onChange={handleChange}
                placeholder="Digite a Biografia..." >
            </input>
            </center>
            
            
            <div className={styles.botao}><button><h5>Atualizar</h5></button></div>

            <Footer2 />
            <Esferas tipoTela={tipoTela} />
        </div>
    )

}


