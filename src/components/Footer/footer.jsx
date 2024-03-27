import React from 'react';
import './footer.modules.css'; // Importando o arquivo CSS para estilização

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Links Úteis</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
      <div>
        <h2>Redes Sociais</h2>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div>
        <h2>Contato</h2>
        <p>Endereço: Av. Exemplo, 123 - Cidade</p>
        <p>Email: exemplo@email.com</p>
        <p>Telefone: (00) 1234-5678</p>
      </div>
    </footer>
  );
}

export default Footer;
