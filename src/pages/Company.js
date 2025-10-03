import { Card, Col, Container, Row } from 'react-bootstrap';

function Company() {
  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="section-title">JB Studio Developer</h1>
              <p className="section-subtitle">
                O armazém de ideias e projetos pessoais
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-alt section">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <Card className="card-custom p-4">
                <Card.Body>
                  <h2 className="h3 mb-4 text-center">Nossa Filosofia</h2>

                  <p className="fs-5 mb-4">
                    A <strong>JB Studio Developer</strong> não é apenas uma
                    empresa - é o meu "armazém de ideias e projetos pessoais".
                    Aqui, cada projeto nasce de uma paixão genuína por resolver
                    problemas reais através da tecnologia.
                  </p>

                  <p className="fs-5 mb-4">
                    Funciona como um <strong>portfólio vivo</strong>, onde cada
                    ideia ganha forma e se transforma em soluções concretas. Não
                    se trata apenas de desenvolver aplicativos, mas de criar
                    experiências que façam diferença na vida das pessoas.
                  </p>

                  <p className="fs-5 mb-4">
                    Cada projeto que desenvolvo aqui terá sua própria{' '}
                    <strong>landing page</strong>
                    com descrição detalhada, funcionalidades principais e
                    roadmap de evolução. É uma vitrine transparente do meu
                    trabalho e do meu processo criativo.
                  </p>

                  <p className="fs-5">
                    O objetivo é manter um visual{' '}
                    <strong>limpo e institucional</strong>, como se fosse uma
                    vitrine digital onde cada projeto tem seu espaço para
                    brilhar e contar sua própria história.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Nossos Valores</h2>

              <Row className="mt-5">
                <Col md={4} className="mb-4">
                  <Card className="card-custom h-100 text-center p-3">
                    <Card.Body>
                      <h4 className="h5 mb-3">🚀 Inovação</h4>
                      <p>
                        Cada projeto é uma oportunidade de explorar novas
                        tecnologias e abordagens criativas.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} className="mb-4">
                  <Card className="card-custom h-100 text-center p-3">
                    <Card.Body>
                      <h4 className="h5 mb-3">💡 Transparência</h4>
                      <p>
                        Processo aberto, roadmaps claros e comunicação honesta
                        sobre cada etapa dos projetos.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} className="mb-4">
                  <Card className="card-custom h-100 text-center p-3">
                    <Card.Body>
                      <h4 className="h5 mb-3">🎯 Propósito</h4>
                      <p>
                        Todos os projetos nascem com o objetivo de resolver
                        problemas reais e gerar valor para os usuários.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Company;
