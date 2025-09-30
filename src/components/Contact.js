import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
      description: 'Conecte-se comigo profissionalmente e acompanhe minha jornada',
      color: '#0077b5',
      link: '#'
    },
    {
      name: 'GitHub',
      icon: '💻',
      description: 'Veja meus códigos e contribua com os projetos open source',
      color: '#333',
      link: '#'
    },
    {
      name: 'Instagram',
      icon: '📸',
      description: 'Acompanhe o dia a dia dos projetos e um pouco da vida pessoal',
      color: '#E4405F',
      link: '#'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      description: 'Pensamentos rápidos sobre tecnologia, desenvolvimento e inovação',
      color: '#1DA1F2',
      link: '#'
    }
  ];

  const contactReasons = [
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Quer colaborar em um projeto? Tenho sempre interesse em partnerships e trabalhos conjuntos.'
    },
    {
      icon: '💡',
      title: 'Ideias',
      description: 'Tem uma ideia inovadora? Adoro discutir conceitos e possibilidades de implementação.'
    },
    {
      icon: '🎯',
      title: 'Projetos',
      description: 'Precisa de desenvolvimento? Vamos conversar sobre como posso ajudar a tirar sua ideia do papel.'
    },
    {
      icon: '☕',
      title: 'Networking',
      description: 'Apenas quer trocar uma ideia sobre tecnologia? Sempre aberto para uma conversa interessante!'
    }
  ];

  return (
    <section id="contato" className="section">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center" data-aos="fade-up">
              Vamos Conversar?
            </h1>
            <p className="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
              Entre em contato para trocar ideias, colaborar em projetos ou apenas bater um papo sobre tecnologia
            </p>
          </Col>
        </Row>

        {/* Motivos para Contato */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="text-center mb-4 text-gradient" data-aos="fade-up" data-aos-delay="200">
              Por que entrar em contato?
            </h2>
            <Row>
              {contactReasons.map((reason, index) => (
                <Col lg={3} md={6} key={index} className="mb-4">
                  <Card 
                    className="card-custom h-100 text-center p-4"
                    data-aos="fade-up"
                    data-aos-delay={300 + (index * 100)}
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
          </Col>
        </Row>

        {/* Formulário de Contato */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert variant="success" className="text-center mb-4" data-aos="fade-in">
                <strong>🎉 Mensagem enviada com sucesso!</strong> Obrigado pelo contato, retornarei em breve.
              </Alert>
            )}
            
            <Card className="card-custom p-4" data-aos="fade-up" data-aos-delay="700">
              <Card.Body>
                <h3 className="text-center mb-4 text-gradient">📝 Envie sua mensagem</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label style={{ color: 'var(--text-light)' }}>Nome Completo</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          required
                          style={{ 
                            borderRadius: '15px', 
                            padding: '15px',
                            background: 'var(--bg-section)',
                            border: '1px solid var(--border-light)',
                            color: 'var(--text-light)'
                          }}
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label style={{ color: 'var(--text-light)' }}>E-mail</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          style={{ 
                            borderRadius: '15px', 
                            padding: '15px',
                            background: 'var(--bg-section)',
                            border: '1px solid var(--border-light)',
                            color: 'var(--text-light)'
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: 'var(--text-light)' }}>Mensagem</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me sobre sua ideia, projeto ou apenas diga olá... 
                      
Alguns tópicos que me interessam:
• Projetos de desenvolvimento mobile
• Ideias de gamificação
• Colaborações em React/React Native
• Discussões sobre UI/UX
• Oportunidades de networking"
                      required
                      style={{ 
                        borderRadius: '15px', 
                        padding: '15px',
                        background: 'var(--bg-section)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-light)'
                      }}
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="btn-custom" 
                      size="lg"
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
          <Col lg={10} className="mx-auto">
            <h2 className="text-center mb-4 text-gradient" data-aos="fade-up" data-aos-delay="800">
              🌐 Me encontre nas redes
            </h2>
            <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="900">
              Várias formas de se conectar e acompanhar meu trabalho
            </p>
            
            <Row>
              {socialLinks.map((social, index) => (
                <Col lg={3} md={6} key={index} className="mb-4">
                  <Card 
                    className="card-custom h-100 text-center p-4"
                    data-aos="fade-up"
                    data-aos-delay={1000 + (index * 100)}
                  >
                    <Card.Body>
                      <div className="mb-3">
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
                            margin: '0 auto'
                          }}
                        >
                          {social.icon}
                        </div>
                      </div>
                      <h5 className="mb-3 text-gradient">{social.name}</h5>
                      <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                        {social.description}
                      </p>
                      <Button 
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline-primary"
                        style={{ 
                          borderRadius: '25px',
                          borderColor: social.color,
                          color: social.color
                        }}
                      >
                        Acessar {social.name}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Call to Action Final */}
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <Card className="card-custom p-5" data-aos="zoom-in" data-aos-delay="1400">
              <Card.Body>
                <h3 className="mb-4 text-gradient">🚀 Vamos criar algo incrível juntos!</h3>
                <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                  Sempre aberto a novas oportunidades, colaborações e conversas interessantes. 
                  Se você tem uma ideia ou projeto em mente, adoraria ouvir sobre ele!
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  💡 <em>"As melhores ideias nascem da colaboração entre mentes criativas."</em>
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