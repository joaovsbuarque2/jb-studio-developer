import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Company from '../components/Company';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function JSStudioApp() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Company />
        <Projects />
        <Contact />
      </main>
      
      {/* Seção para navegar para o Eleva */}
      <section className="section-alt section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Conheça nosso projeto Eleva</h2>
              <p className="section-subtitle mb-4">
                Um app de produtividade gamificado que está revolucionando como as pessoas gerenciam suas tarefas.
              </p>
              <Button 
                as={Link} 
                to="/eleva" 
                className="btn-custom" 
                size="lg"
              >
                Descobrir Eleva 🚀
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default JSStudioApp;