import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import About from '../components/About';
import Company from '../components/Company';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';

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
                Um app de produtividade gamificado que está revolucionando como
                as pessoas gerenciam suas tarefas.
              </p>
              <Button as={Link} to="/eleva" className="btn-custom" size="lg">
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
