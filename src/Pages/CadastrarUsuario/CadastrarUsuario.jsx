import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Header';
import Esferas from '../../components/Esferas/Esferas';
import CardPerfil from '../../components/CardPerfil/CardPerfil';

const CadastrarUsuario = () => {
  return (
    <div>
      <NavBar />
      <CardPerfil/>
      <Footer />
      <Esferas />
    </div>
  );
}

export default CadastrarUsuario;



