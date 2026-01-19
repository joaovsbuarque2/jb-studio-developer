import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              {showAlert && (
                <Alert variant="success" className="text-center">
                  <strong>Mensagem enviada com sucesso!</strong> Obrigado pelo
                  contato, retornarei em breve.
                </Alert>
              )}

              <Card className="card-custom p-4">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Nome Completo</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            required
                            style={{ borderRadius: '10px', padding: '12px' }}
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            required
                            style={{ borderRadius: '10px', padding: '12px' }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Mensagem</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-me sobre sua ideia, projeto ou apenas diga olá..."
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button type="submit" className="btn-custom" size="lg">
                        Enviar Mensagem
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title text-center mb-5">
                Outras Formas de Contato
              </h2>

              <Row>
                <Col md={6} className="mb-4">
                  <Card className="card-custom h-100 text-center p-4">
                    <Card.Body>
                      <div className="mb-3">
                        <div
                          style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#0077b5',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            color: 'white',
                            margin: '0 auto',
                          }}
                        >
                          💼
                        </div>
                      </div>
                      <h5 className="mb-3">LinkedIn</h5>
                      <p className="text-muted mb-3">
                        Conecte-se comigo profissionalmente e acompanhe minha
                        jornada
                      </p>
                      <Button
                        variant="outline-primary"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ borderRadius: '20px' }}
                      >
                        Acessar LinkedIn
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} className="mb-4">
                  <Card className="card-custom h-100 text-center p-4">
                    <Card.Body>
                      <div className="mb-3">
                        <div
                          style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#333',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            color: 'white',
                            margin: '0 auto',
                          }}
                        >
                          💻
                        </div>
                      </div>
                      <h5 className="mb-3">GitHub</h5>
                      <p className="text-muted mb-3">
                        Veja meus códigos e contribua com os projetos open
                        source
                      </p>
                      <Button
                        variant="outline-dark"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ borderRadius: '20px' }}
                      >
                        Ver GitHub
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-alt section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Card className="card-custom p-5">
                <Card.Body>
                  <h3 className="mb-4">🚀 Vamos criar algo incrível juntos!</h3>
                  <p className="fs-5 text-muted">
                    Sempre aberto a novas oportunidades, colaborações e
                    conversas interessantes. Se você tem uma ideia ou projeto em
                    mente, adoraria ouvir sobre ele!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
