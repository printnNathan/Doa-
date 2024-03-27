import React from 'react';
import { View, StyleSheet } from 'react'
import Navbar from '../src/components/NavBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/Footer/footer';
import Anuncios from '../src/components/Anuncios/anuncios';

function App() {
  return (
    <div>
        <Navbar/>
        <Footer/>
        <Anuncios/>
    </div>
  );
}

export default App;
