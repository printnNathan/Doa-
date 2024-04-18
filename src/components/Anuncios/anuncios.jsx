// Anuncios.jsx
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PublicadosPanel from './PublicadosPanel';
import PendentesPanel from './PendentesPanel';
import InativosPanel from './InativosPanel';
import ExpiradosPanel from './ExpiradosPanel';
<<<<<<< HEAD
import styles from '../Anuncios/Anuncios.module.css';
import Footer from '../Footer/Footer';
=======
import Styles from '../Anuncios/Anuncios.module.css';
>>>>>>> 58d64b80db709cf0b7218ab2d3c387a8490605a7
import NavBar from '../NavBar/Header'

function Anuncios() {

  const [tabSelecionada, setTabSelecionada] = useState('1');

  const handleChange = (event, newValue) => {
    setTabSelecionada(newValue);
  };



  return (
    <div>

      <div className={styles.QuadroDeAnuncios}>
      <NavBar/>
      </div>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tabSelecionada}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.Painel}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Publicados" value="1" />
              <Tab label="Pendentes" value="2" />
              <Tab label="Inativos" value="3" />
              <Tab label="Expirados" value="4" />
            </TabList>
          </Box>
          <Box sx={{ paddingLeft: "20%", paddingRight: "20%"  }} >

            <TabPanel value="1"><PublicadosPanel /></TabPanel>
            <TabPanel value="2"><PendentesPanel /></TabPanel>
            <TabPanel value="3"><InativosPanel /></TabPanel>
            <TabPanel value="4"><ExpiradosPanel /></TabPanel>

          </Box>
        </TabContext>
      </Box>
    </div>
  );
}

export default Anuncios;
