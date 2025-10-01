import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Importar logo
import logoJB from '../../assets/images/logo-jb.png';

function ElevaHeader() {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false);
  };

  const handleDownloadClick = () => {
    // Simula ação de download ou redirecionamento para stores
    alert('Em breve nas lojas de aplicativos! 🚀\n\nCadastre-se em nossa newsletter para ser notificado quando o app estiver disponível.');
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="navbar-custom eleva-navbar"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/eleva" 
          className="brand-eleva"
          onClick={() => scrollToSection('home')}
        >
          <img 
            src={logoJB} 
            alt="JB Studio" 
            className="eleva-brand-logo"
          />
          <div className="eleva-brand-text">
            <span className="eleva-brand-name">ELEVA</span>
            <span className="eleva-brand-subtitle">by JB Studio</span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="eleva-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        
        <Navbar.Collapse id="eleva-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              onClick={() => scrollToSection('home')}
            >
              Início
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('sobre')}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('funcionalidades')}
            >
              Funcionalidades
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('roadmap')}
            >
              Roadmap
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('contato')}
            >
              Contato
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Button 
              as={Link}
              to="/js-studio"
              variant="outline-light"
              size="sm"
              className="me-2"
              onClick={() => setExpanded(false)}
            >
              ← JS Studio
            </Button>
            <Button 
              className="btn-eleva-cta"
              size="sm"
              onClick={handleDownloadClick}
            >
              🚀 Baixar App
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ElevaHeader;