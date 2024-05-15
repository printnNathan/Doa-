import React, { useEffect, useState } from 'react';
import styles from './QuemSomos.module.css';
import NavBar from '../../components/NavBar/Header';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';

function QuemSomos() {
    const [texto, setTexto] = useState('');

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
            <NavBar />

            <div className={styles.Texto1}>Quem Somos</div>
            <div className={styles.Texto2}>Abrale - Associação Brasileira de Linfoma e Leucemia</div>

            <input
                type="text"
                value={texto}
                onChange={handleChange}
                placeholder="Digite a Biografia..."
            />
            <p>{texto}</p>

            <div className="quem-somos-container">
                <img src="https://abrale.org.br/wp-content/uploads/2020/10/logo-abrale.png"
                    alt="" // Descrição da imagem
                    className="img1"
                />
            </div>
        </div>
    );
}

export default QuemSomos;