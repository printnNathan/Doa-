import React from 'react';
import './footer.modules.css'; // Importando o arquivo CSS para estilização
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faMap, faEnvelope, faPhone, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPhoenixFramework, faPhoenixSquadron, faEvernote } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Links Úteis</h2>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInfoCircle} /> Sobre nós</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faPhone} /> Contato</a></li>
        </ul>
      </div>
      <div>
        <h2>Redes Sociais</h2>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
        </ul>
      </div>
      <div>
        <h2>Contato</h2>
        <ul>
        <li><a href="#"><FontAwesomeIcon icon={faMap} /> Endereço: Av. Exemplo, 123 - Cidade  </a></li>
          <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /> Email: exemplo@email.com </a></li>
          <li><a href="#"><FontAwesomeIcon icon={faPhone} />  Telefone: (00) 1234-5678  </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
