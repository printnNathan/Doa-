import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importando useLocation
import styles from './CadastrarUsuario.module.css';
import Footer from '../../components/Footer/Footer2';
import NavBar from '../../components/NavBar/Header';
import Esferas from '../../components/Esferas/Esferas';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';

function CadastrarUsuario() {
  const [telefone, setTelefone] = useState('');
  const location = useLocation();
  const email = location.state ? location.state.email : '';

  const handleChange = (e) => {
    let inputTelefone = e.target.value.replace(/\D/g, '');

    if (inputTelefone.length >= 2) {
      inputTelefone = `(${inputTelefone.slice(0, 2)})${inputTelefone.slice(2)}`;
    }

    setTelefone(inputTelefone);
  };

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
      async function fetchData() {
          try {
                const usuarioEstaLogado = AuthService.VerificarSeUsuarioEstaLogado();
                if (!usuarioEstaLogado) {
                    navigate("/Perfil");
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
      <div className={styles.CardPrincipal}>
        <form>
          <span className={styles.DesativarTexto}>Meu cadastro</span>
          <div className={styles.CardEmail}>
            <span className={styles.font1}>Nome completo:</span>
            <input type="text" name="usuario" placeholder="Nome" className={styles.Email} />
          </div>
          <div className={styles.Cardapelido}>
            <span className={styles.font1}>Celular</span>
            <input type="text" name="Telefone" placeholder="Celular" value={telefone} onChange={handleChange} className={styles.Apelido}/>
            <div>
              <span className={styles.EsqueceuSenha}>(como aparecerá  publicamente)</span>
            </div>
          </div>
          <div>
            <button className={styles.BotãoDeEntrar}>Salvar alterações</button>
          </div>
        </form>
      </div>
      <div className={styles.CardPrincipal}>
        <form>
          <div>
            <span className={styles.DesativarTexto}>E-mail: {email}</span>
            <div className={styles.Hr}></div>
            <div>
              <img className={styles.img} src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*g09N-jl7JtVjVZGcd-vL2g.jpeg' alt="Foto de perfil" width={70} height={70} />
              <span className={styles.DesativarTexto}>Foto de perfil</span>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.CardPrincipal}>
        <div><h6 className={styles.CardPrincipal2}>Adicionar endereço +</h6></div>
      </div>
      <div className={styles.CardPrincipal}>
         <div className={styles.DesativarContainer}>
          <img src='https://img.freepik.com/vetores-premium/sinais-de-aviso-de-perigo-de-alta-tensao-isolado-em-um-fundo-branco_68708-427.jpg' alt="Alerta" width={80} height={90} />
          <span className={styles.DesativarTexto}>Desativar minha conta</span>
        </div>
        <button className={styles.Desativar} >Desativar</button>
        <span>Seu perfil será desabilitado e anúncios excluídos. Ative a conta quando quiser.</span>
      </div>
      <Footer />
      <Esferas />
    </div>
  );
}

export default CadastrarUsuario;
