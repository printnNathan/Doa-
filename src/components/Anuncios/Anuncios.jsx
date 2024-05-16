// Anuncios.jsx
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PublicadosPanel from './PublicadosPanel';
import InativosPanel from './InativosPanel';
import Styles from '../Anuncios/Anuncios.module.css';
import Esferas from  '../../components/Esferas/Esferas';
import Footer from '../Footer/Footer2';
import NavBar from '../NavBar/Header';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

function Anuncios() {

  const [tabSelecionada, setTabSelecionada] = useState('1');

  const handleChange = (event, newValue) => {
    setTabSelecionada(newValue);
  };
  

  return (
    <div>
      <NavBar />
      <div className={Styles.TituloPrincipal}><h1>Meus Anúncios</h1></div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tabSelecionada}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={Styles.Painel}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Publicados" value="1" />
              <Tab label="Inativos" value="3" />
            </TabList>
          </Box>
          <Box sx={{ backgroundColor: "#d9d9d9", paddingLeft: "20%", paddingRight: "20%"  }} >

            <TabPanel value="1">
              <div className={Styles.anuncio}>
                <h1>Pendente
                <FontAwesomeIcon icon={faClock} />
                </h1>
               <div className={Styles.conteudo}>
                <img src="https://i0.wp.com/www.clickguarulhos.com.br/wp-content/uploads/2021/04/20210423-doacaoalimentos.jpg?fit=790%2C552&ssl=1" />
               <div>
                <h2>Doação de Alimento</h2>
                <h3>Publicado em 01/06/2024</h3>
                  </div>
                </div>
              </div>
              <PublicadosPanel />
            </TabPanel>
            <TabPanel value="3">
              <div className={Styles.anuncio}>
                <h1>Inativo
                <FontAwesomeIcon icon={faMinusCircle} />
                </h1>
               <div className={Styles.conteudo}>
                <img src="https://www.rateio.com/wp-content/uploads/2020/09/vazamento-condominio.jpg" style={{filter: 'grayscale(100%)'}}/>
               <div>
                <h2>Conserto de encanamento</h2>
                <h3>Publicado em 01/05/2024</h3>
                  </div>
                </div>
              </div>
              <InativosPanel />
            </TabPanel>

          </Box>
        </TabContext>
      </Box>
      <Esferas />
    </div>
  );
}

export default Anuncios;
