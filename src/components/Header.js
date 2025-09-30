import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="header-fixed">
      <Container>
        <Navbar.Brand 
          onClick={() => scrollToSection('home')} 
          className="fw-bold fs-4 text-gradient"
          style={{ cursor: 'pointer' }}
        >
          JB Studio Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => scrollToSection('home')}
              style={{ color: 'var(--text-light)', cursor: 'pointer' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('sobre')}
              style={{ color: 'var(--text-light)', cursor: 'pointer' }}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('empresa')}
              style={{ color: 'var(--text-light)', cursor: 'pointer' }}
            >
              Empresa
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('projetos')}
              style={{ color: 'var(--text-light)', cursor: 'pointer' }}
            >
              Projetos
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('contato')}
              style={{ color: 'var(--text-light)', cursor: 'pointer' }}
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;