import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero-banner">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="hero-content">
                <h1>Olá 👋, eu sou João Vitor Buarque</h1>
                <p>
                  Desenvolvedor Front-end & Mobile apaixonado por tecnologia, 
                  criatividade, games e boas histórias.
                </p>
                <Button 
                  as={Link} 
                  to="/projetos" 
                  className="btn-custom"
                  size="lg"
                >
                  Conheça meus projetos
                </Button>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div 
                style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}
              >
                Sua foto aqui
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Bem-vindo ao meu universo digital</h2>
              <p className="section-subtitle">
                Aqui você encontra minha jornada como desenvolvedor, meus projetos 
                pessoais e um pouco da minha história. Cada linha de código é uma 
                nova aventura, e cada projeto é uma oportunidade de crescer.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;