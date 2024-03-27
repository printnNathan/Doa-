import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



function Anuncios() {
  const [tabSelecionada, setTabSelecionada] = useState('1');

  const handleChange = (event, newValue) => {
    setTabSelecionada(newValue);
  };

  return (
    <div>
      <div><h1>Anúncios</h1></div>
      {/* 
            <ul className={styles.anuncios}>
                <li><h2 className={styles.anuncios}>Publicados</h2></li>      
                <li><h2>Pendentes</h2></li>
                <li><h2>Inativos</h2></li>
                <li><h2>Expirados</h2></li>
            </ul> */}

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tabSelecionada}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Publicados" value="1" />
              <Tab label="Pendentes" value="2" />
              <Tab label="Inativos" value="3" />
              <Tab label="Expirados" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">Publicados</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Four</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}


export default Anuncios;
