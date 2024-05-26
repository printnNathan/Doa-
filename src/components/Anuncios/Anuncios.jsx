import NavBar from '../../components/NavBar/Header';
import { Box, Tab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PublicadosPanel from './PublicadosPanel';
import InativosPanel from './InativosPanel';
import Styles from '../Anuncios/Anuncios.module.css';
import Esferas from '../../components/Esferas/Esferas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { DoacaoProvider } from './DoacaoContext';
import ModalPedidoDoacao from '../ModalPedidoDoacao/ModalPedidoDoacao';
import AuthService from '../../Services/AuthService';
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';

function Anuncios() {
  const [tabSelecionada, setTabSelecionada] = useState('1');
  const [modalAberto, setModalAberto] = useState(false);
  const tipoTela = 'MeusAnuncios';

  const [loading, setLoading] = useState(true);

  const [doacoesAtivas, setDoacoesAtivas] = useState([]);
  const [doacoesInativas, setDoacoesInativas] = useState([]);

  const [doacaoSelecionada, setDoacaoSelecionada] = useState();

  const ongId = AuthService.PegarDadosUsuario()?.ID;

  useEffect(() => {
    refresh();
  }, []);

  async function refresh(){
    setLoading(true);
    await ListarDoacoesAtivas();
    await ListarDoacoesInativas();
    setLoading(false);
  }

  async function ListarDoacoesAtivas() {
    if (ongId) {
      try {
        const response = await ApiService.get(`/PedidosDoacao/ong/${ongId}`);
        setDoacoesAtivas(response);
      } catch (error) {
        ToastService.Error("Houve um erro no servidor ao listar doações\r\nTente novamente mais tarde.");
      } 
    }
  }

  async function ListarDoacoesInativas() {
    if (ongId) {
      try {
        const response = await ApiService.get(`/PedidosDoacao/Inativos/${ongId}`);
        setDoacoesInativas(response);
      } catch (error) {
        ToastService.Error("Houve um erro no servidor ao listar doações\r\nTente novamente mais tarde.");
      } 
    }
  }

  function abrirModal(doacao) {
    setDoacaoSelecionada(doacao);
    setModalAberto(true);
  }

  const handleChange = (event, newValue) => {
    setTabSelecionada(newValue);
  };

  return (
    <div>
      <ModalPedidoDoacao
        modalAberto={modalAberto}
        setModalAberto={setModalAberto}
        doacao={doacaoSelecionada}
      />
      <div className={Styles.TituloPrincipal}><h1>Meus Anúncios</h1></div>
      <Box sx={{ width: '50%', typography: 'body1', margin: '0 auto' }}>
        <TabContext value={tabSelecionada}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={Styles.Painel}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Publicados" value="1" />
              <Tab label="Inativos" value="3" />
            </TabList>
          </Box>
          <DoacaoProvider>
            <TabPanel value="1">
              <div className={Styles.anuncio}>
                <span>Publicados </span>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <PublicadosPanel abrirModal={abrirModal} doacoes={doacoesAtivas} loading={loading} refresh={refresh}/>
            </TabPanel>
            <TabPanel value="3">
              <div className={Styles.anuncio}>
                <span>Inativos </span>
                <FontAwesomeIcon icon={faMinusCircle} />
              </div>
              <InativosPanel abrirModal={abrirModal} doacoes={doacoesInativas} loading={loading} refresh={refresh}/>
            </TabPanel>
          </DoacaoProvider>
        </TabContext>
      </Box>
      <Esferas tipoTela={tipoTela} />
    </div>
  );
}

export default Anuncios;

