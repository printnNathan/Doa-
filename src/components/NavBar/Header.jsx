import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faLink, faComments, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto">
          <Link to="/Perfil" className={styles.navLink}>
              <FontAwesomeIcon icon={faPortrait} /> Perfil
            </Link>
            <Link to="/EscolherC" className={styles.navLink}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <Link to="/Meus Anuncios" className={styles.navLink}>
              <FontAwesomeIcon icon={faList} /> Meus Anúncios
            </Link>
            <Link to="/QuemSomos" className={styles.navLink}>
            <FontAwesomeIcon icon={faLink} /> Quem somos
            </Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="pesquise"
              placeholder="Pesquise"
              className={`me-2 ${styles.SearchInput}`}
              aria-label="Pesquise"
            />
            <div>
              <Button variant="outline-success" className={`btn ${styles.SearchButton}`}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
