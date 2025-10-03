import { Card, Col, Container, Row } from 'react-bootstrap';

function Marriage() {
  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="section-title">Nossa História</h1>
              <p className="section-subtitle">
                O amor que transforma sonhos em realidade
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-alt section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Card className="card-custom p-4">
                <Card.Body>
                  <p className="fs-5 mb-4">
                    Há 3 anos, disse "sim" para a pessoa que mudou completamente
                    a minha perspectiva sobre sonhos e possibilidades. Minha
                    esposa não é apenas minha parceira de vida - ela é quem mais
                    acredita no meu potencial, mesmo quando eu mesmo duvido.
                  </p>

                  <p className="fs-5 mb-4">
                    Durante toda essa jornada como desenvolvedor, ela sempre foi
                    minha maior incentivadora. Nos momentos de incerteza, quando
                    eu pensava em desistir ou mudar de rumo, ela estava lá
                    lembrando-me do porquê comecei e me motivando a continuar.
                  </p>

                  <p className="fs-5">
                    Ela sempre me incentivou a acreditar nas minhas ideias e a
                    investir meu tempo naquilo que realmente amo fazer. Graças
                    ao seu apoio incondicional, hoje tenho coragem de
                    transformar ideias em realidade.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} className="text-center">
              <div
                style={{
                  width: '350px',
                  height: '350px',
                  backgroundColor: '#f8f9fa',
                  border: '2px dashed #dee2e6',
                  borderRadius: '15px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: '#6c757d',
                }}
              >
                Foto de casamento aqui
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <Card className="card-custom p-5">
                <Card.Body>
                  <h2 className="h3 mb-4">💫</h2>
                  <blockquote className="blockquote">
                    <p className="fs-4 fst-italic mb-4">
                      "Meu casamento me fez crescer e acreditar mais em mim
                      mesmo. Minha esposa é quem mais me motiva a transformar
                      ideias em realidade."
                    </p>
                  </blockquote>
                  <p className="text-muted">
                    Esta é a força que move todos os meus projetos e sonhos.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-alt section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Momentos Especiais</h2>
              <p className="mb-5">Algumas memórias que carrego no coração</p>

              <Row>
                <Col md={6} className="mb-4">
                  <div
                    style={{
                      width: '100%',
                      height: '250px',
                      backgroundColor: '#f8f9fa',
                      border: '2px dashed #dee2e6',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: '#6c757d',
                    }}
                  >
                    Foto pessoal 1
                  </div>
                </Col>

                <Col md={6} className="mb-4">
                  <div
                    style={{
                      width: '100%',
                      height: '250px',
                      backgroundColor: '#f8f9fa',
                      border: '2px dashed #dee2e6',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: '#6c757d',
                    }}
                  >
                    Foto pessoal 2
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Marriage;
