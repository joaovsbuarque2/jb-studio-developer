import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkStyle = {
    color: 'var(--text-light)',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: 'var(--accent-cyan)',
  };

  return (
    <Navbar expand="lg" className="header-fixed">
      <Container>
        <Navbar.Brand
          onClick={() => scrollToSection('home')}
          className="fw-bold fs-4 text-gradient"
          style={{ cursor: 'pointer' }}
        >
          JB Developer Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { id: 'home', label: 'Home' },
              { id: 'sobre', label: 'Sobre' },
              { id: 'empresa', label: 'Empresa' },
              { id: 'projetos', label: 'Projetos' },
              { id: 'contato', label: 'Contato' },
            ].map((item) => (
              <Nav.Link
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                {item.label}
              </Nav.Link>
            ))}

            <Nav.Link
              as={Link}
              to="/eleva"
              style={{
                color: 'var(--accent-cyan)',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'white')}
              onMouseLeave={(e) =>
                (e.target.style.color = 'var(--accent-cyan)')
              }
            >
              ⚡ Eleva
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
