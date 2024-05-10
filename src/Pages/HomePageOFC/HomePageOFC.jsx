import React from 'react';
import NavBar from '../../components/NavBar/Header';
import Footer from '../../components/Footer/Footer2';
import './HomePageOFC.module.css';
import { Link } from 'react-router-dom';
import EscolherC from '../EscolherCategoria/EscolherCategoria';

const HomePageOFC = () => {
  return (
    <div className="homepage">
      <NavBar />
      <header>
        <h1>Gerenciador de Doações</h1>
        <nav>
          <ul>
          <Link to="/EscolherC">
            <li><a href="#">Doar</a></li>
          </Link>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-image">
            <img src="hero-image.jpg" alt="Imagem de herói" />
          </div>
          <div className="hero-text">
            <h2>Faça a diferença na vida de alguém!</h2>
            <p>Doe para o Gerenciador de Doações e ajude a transformar a vida de pessoas necessitadas.</p>
            <button>Doar agora</button>
          </div>
        </section>

        <section className="about">
          <h2>Sobre nós</h2>
          <p>O Gerenciador de Doações é uma organização sem fins lucrativos que conecta doadores a projetos sociais que precisam de ajuda. Nossa missão é facilitar o processo de doação e garantir que seus recursos sejam utilizados de forma eficiente e transparente.</p>
        </section>

        <section className="projects">
          <h2>Projetos em destaque</h2>
          <div className="projects-grid">
            {/* Incluir cards de projetos aqui */}
          </div>
        </section>

        <section className="call-to-action">
          <h2>Junte-se a nós!</h2>
          <p>Doe, seja voluntário ou divulgue o Gerenciador de Doações para seus amigos e familiares. Cada contribuição faz a diferença!</p>
          <button>Saiba mais</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Gerenciador de Doações</p>
      </footer>
      <Footer />
    </div>
  );
};

export default HomePageOFC;