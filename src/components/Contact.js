import { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
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

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      description:
        'Conecte-se comigo profissionalmente e acompanhe minha jornada.',
      color: '#0077b5',
      link: 'https://www.linkedin.com',
    },
    {
      name: 'GitHub',
      icon: '💻',
      description: 'Veja meus códigos e projetos open source em andamento.',
      color: '#333',
      link: 'https://github.com',
    },
    {
      name: 'Instagram',
      icon: '📸',
      description: 'Acompanhe bastidores, projetos e um pouco do dia a dia.',
      color: '#E4405F',
      link: 'https://www.instagram.com',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      description: 'Compartilho insights sobre tecnologia e inovação.',
      color: '#1DA1F2',
      link: 'https://twitter.com',
    },
  ];

  const contactReasons = [
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Aberto a parcerias estratégicas e trabalhos em conjunto.',
    },
    {
      icon: '💡',
      title: 'Ideias',
      description:
        'Tem uma ideia inovadora? Vamos conversar sobre possibilidades.',
    },
    {
      icon: '🎯',
      title: 'Projetos',
      description:
        'Precisa de desenvolvimento? Posso ajudar a tirar sua ideia do papel.',
    },
    {
      icon: '☕',
      title: 'Networking',
      description:
        'Aberto para uma boa conversa sobre tecnologia e tendências.',
    },
  ];

  return (
    <section id="contato" className="section">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center" data-aos="fade-up">
              Vamos Conversar?
            </h1>
            <p
              className="section-subtitle text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Entre em contato para trocar ideias, colaborar em projetos ou
              discutir tecnologia.
            </p>
          </Col>
        </Row>

        {/* Motivos */}
        <Row className="mb-5">
          {contactReasons.map((reason, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card
                className="card-custom h-100 text-center p-4"
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <Card.Body>
                  <div className="fs-1 mb-3">{reason.icon}</div>
                  <h5 className="mb-3 text-gradient">{reason.title}</h5>
                  <p style={{ color: 'var(--text-muted)' }}>
                    {reason.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Formulário */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert
                variant="success"
                className="text-center mb-4"
                data-aos="fade-in"
              >
                <strong>🎉 Mensagem enviada com sucesso!</strong> Em breve
                retornarei seu contato.
              </Alert>
            )}

            <Card
              className="card-custom p-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Card.Body>
                <h3 className="text-center mb-4 text-gradient">
                  📝 Envie sua mensagem
                </h3>
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
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="btn-custom"
                      size="lg"
                      style={{
                        transition: 'all 0.3s ease',
                        fontWeight: '600',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow =
                          '0 10px 25px rgba(6,182,212,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      🚀 Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Redes Sociais */}
        <Row className="mb-5">
          {socialLinks.map((social, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card
                className="card-custom h-100 text-center p-4"
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${social.color}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                data-aos="fade-up"
                data-aos-delay={700 + index * 100}
              >
                <Card.Body>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: social.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      margin: '0 auto',
                    }}
                  >
                    {social.icon}
                  </div>
                  <h5 className="mb-3 text-gradient mt-3">{social.name}</h5>
                  <p className="text-white mb-3">{social.description}</p>
                  <Button
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    style={{
                      borderRadius: '25px',
                      borderColor: social.color,
                      color: social.color,
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = social.color;
                      e.target.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = social.color;
                    }}
                  >
                    Acessar {social.name}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <Card
              className="card-custom p-5"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <Card.Body>
                <h3 className="mb-4 text-gradient">
                  🚀 Vamos criar algo incrível juntos!
                </h3>
                <p className="fs-5 text-white mb-4">
                  Sempre aberto a novas oportunidades, colaborações e conversas
                  interessantes. Se você tem uma ideia ou projeto em mente,
                  adoraria ouvir sobre ele!
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  💡{' '}
                  <em>
                    "As melhores ideias nascem da colaboração entre mentes
                    criativas."
                  </em>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
