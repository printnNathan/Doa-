import React from 'react';
import './Footer.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faMap, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer2(doacao) {
  return (
    <footer className="footer2">
      <div>
      <h2>Links Úteis</h2>
        <ul>
          <li><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="EscolherCategoria"><FontAwesomeIcon icon={faInfoCircle} />Categoria</a></li>
          <li><a href="perfil"><FontAwesomeIcon icon={faPhone} /> Perfil</a></li>
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
        <li><a href="#"><FontAwesomeIcon icon={faMap} /> Endereço: Av. Ermelinda, 123 - São Paulo  </a></li>
          <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /> Email: doamais@email.com </a></li>
          <li><a href="#"><FontAwesomeIcon icon={faPhone} />  Telefone: (11) 4002-8922  </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer2;