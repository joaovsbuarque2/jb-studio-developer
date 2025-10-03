import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

function ElevaContact() {
  const contactMethods = [
    {
      icon: '💬',
      title: 'Discord Community',
      description:
        'Junte-se à nossa comunidade ativa de beta testers e entusiastas',
      action: 'Entrar no Discord',
      // highlight: '2.5K+ membros',
    },
    {
      icon: '📧',
      title: 'Email Direto',
      description: 'Para parcerias, feedback detalhado ou suporte técnico',
      action: 'Enviar Email',
      highlight: 'Resposta em 24h',
    },
    {
      icon: '🐦',
      title: 'Redes Sociais',
      description: 'Acompanhe updates, behind-the-scenes e novidades',
      action: 'Seguir no Twitter',
      highlight: 'Updates diários',
    },
    {
      icon: '📱',
      title: 'Beta Testing',
      description: 'Seja um dos primeiros a testar novas funcionalidades',
      action: 'Inscrever-se no Beta',
      highlight: 'Acesso antecipado',
    },
  ];

  const faqs = [
    {
      question: 'Quando o Eleva será lançado oficialmente?',
      answer:
        'Estamos planejando o lançamento da versão 1.0 para Q4 2025. No momento, temos uma versão beta disponível para testers selecionados.',
    },
    {
      question: 'O app será gratuito?',
      answer:
        'Sim! O Eleva terá uma versão gratuita robusta com todas as funcionalidades principais. Também ofereceremos uma versão premium com recursos avançados.',
    },
    {
      question: 'Posso sugerir funcionalidades?',
      answer:
        'Absolutamente! Nossa comunidade no Discord é o melhor lugar para sugestões. Muitas das funcionalidades atuais vieram de ideias da comunidade.',
    },
    {
      question: 'Como funciona o sistema de beta testing?',
      answer:
        'Nossos beta testers recebem acesso antecipado às novas funcionalidades, podem reportar bugs e participam ativamente do desenvolvimento do produto.',
    },
  ];

  return (
    <>
      <section className="eleva-contact-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="eleva-page-title text-white" data-aos="fade-up">
                Vamos Conversar!
              </h1>
              <p
                className="eleva-page-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Seja para tirar dúvidas, dar sugestões ou fazer parte da nossa
                comunidade, estamos aqui para você.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eleva-section">
        <Container>
          <Row>
            {contactMethods.map((method, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card
                  className="contact-method-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center p-4">
                    <div className="method-icon mb-3">{method.icon}</div>
                    <h5 className="method-title mb-3">{method.title}</h5>
                    <p className="method-description mb-3">
                      {method.description}
                    </p>
                    <div className="method-highlight mb-3">
                      <small className="text-primary fw-bold">
                        {method.highlight}
                      </small>
                    </div>
                    <Button className="btn-eleva-outline" size="sm">
                      {method.action}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="eleva-section-alt">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="contact-form-card" data-aos="fade-up">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <h3 className="form-title">Envie uma Mensagem</h3>
                    <p className="form-subtitle">
                      Preencha o formulário abaixo e entraremos em contato o
                      mais breve possível
                    </p>
                  </div>

                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nome *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Seu nome completo"
                            className="eleva-form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="seu@email.com"
                            className="eleva-form-control"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Assunto *</Form.Label>
                      <Form.Select className="eleva-form-control">
                        <option>Selecione um assunto</option>
                        <option>Sugestão de funcionalidade</option>
                        <option>Reportar bug</option>
                        <option>Parceria</option>
                        <option>Beta testing</option>
                        <option>Suporte</option>
                        <option>Outro</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Mensagem *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Conte-nos mais sobre sua mensagem..."
                        className="eleva-form-control"
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button className="btn-eleva-primary" size="lg">
                        <span className="me-2">📤</span>
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

      <section className="eleva-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2
                className="eleva-section-title text-center mb-5"
                data-aos="fade-up"
              >
                Perguntas Frequentes
              </h2>

              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="faq-card mb-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Card.Body className="p-4">
                      <h6 className="faq-question mb-3">{faq.question}</h6>
                      <p className="faq-answer mb-0">{faq.answer}</p>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eleva-section-alt">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="community-cta-box" data-aos="fade-up">
                <h3 className="cta-title mb-4">🌟 Faça Parte da Revolução</h3>
                <p className="cta-description mb-4">
                  O Eleva está crescendo rapidamente e você pode fazer parte
                  dessa jornada. Junte-se à nossa comunidade e ajude a construir
                  o futuro da produtividade.
                </p>

                <div className="community-benefits">
                  <Row>
                    <Col md={4} className="mb-3">
                      <div className="benefit-item">
                        <div className="benefit-icon">🎯</div>
                        <div className="benefit-text">Early Access</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div className="benefit-item">
                        <div className="benefit-icon">💬</div>
                        <div className="benefit-text">Voz Ativa</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div className="benefit-item">
                        <div className="benefit-icon">🏆</div>
                        <div className="benefit-text">
                          Recompensas Exclusivas
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <Button className="btn-eleva-primary" size="lg">
                  <span className="me-2">🚀</span>
                  Entrar na Comunidade
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ElevaContact;
