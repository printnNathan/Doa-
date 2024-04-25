import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faLink, faComments, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from 'react-icons/fa';
import styles from "./Header.module.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto">
            <Nav.Link href="#action1" className={styles.navLink}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link href="#action2" className={styles.navLink}>
              <FontAwesomeIcon icon={faList} /> Meus Anúncios
            </Nav.Link>
            <NavDropdown title={<span><FontAwesomeIcon icon={faLink} /> Quem somos</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sobre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Contatos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className={styles.navLink}>
              <FontAwesomeIcon icon={faComments} /> Chat
            </Nav.Link>
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
