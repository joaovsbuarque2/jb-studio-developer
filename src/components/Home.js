import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-banner">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} data-aos="fade-right">
            <div className="hero-content">
              <h1>Olá 👋, eu sou João Vitor Buarque</h1>
              <p>
                Desenvolvedor Front-end & Mobile apaixonado por tecnologia, 
                criatividade, games e boas histórias.
              </p>
              <div className="d-flex gap-4 flex-wrap justify-content-center justify-content-lg-start">
                <Button 
                  onClick={() => scrollToSection('projetos')}
                  className="btn-custom"
                  size="lg"
                  style={{ 
                    boxShadow: '0 15px 35px rgba(6, 182, 212, 0.4)',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  🚀 Conheça meus projetos
                </Button>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  variant="outline-light" 
                  size="lg"
                  style={{ 
                    borderRadius: '30px', 
                    padding: '15px 35px',
                    borderWidth: '2px',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  💬 Vamos conversar
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={4} className="text-center" data-aos="fade-left" data-aos-delay="200">
            <div 
              className="floating"
              style={{
                width: '300px',
                height: '300px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            >
              Sua foto aqui
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;