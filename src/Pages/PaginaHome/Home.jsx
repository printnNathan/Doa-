import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/Header';
import Anuncios from '../../components/Anuncios/Anuncios';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Anuncios/>
      <Footer/>
    </div>
  )
}

export default Home