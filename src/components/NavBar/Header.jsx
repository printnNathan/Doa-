import React from 'react';
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
            <NavDropdown title={<span><FontAwesomeIcon icon={faLink} /> Link</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className={styles.navLink}>
            <FontAwesomeIcon icon={faComments} /> Chat
            </Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className={`me-2 ${styles.SearchInput}`}
              aria-label="Search"
            />
            <Button variant="outline-success" className={`${styles.SearchButton} btn`}>
            <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
