import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
      <section className="section-alt section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">
                Conheça nossos projetos Eleva ou Velo
              </h2>
              <p className="section-subtitle mb-4">
                Explore nossas soluções inovadoras em produtividade gamificada e
                pagamentos recorrentes via PIX.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button
                  as={Link}
                  to="/projetos/eleva"
                  className="btn-custom"
                  size="lg"
                >
                  Ver Eleva 🚀
                </Button>
                <Button as={Link} to="/velo" className="btn-custom" size="lg">
                  Ver Velo 💳
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
