import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function VeloContact() {
  const faqs = [
    {
      question: 'Quando o PIX Recorrente será lançado oficialmente?',
      answer:
        'O MVP está completo e em testes finais. Previsão de lançamento: 15-30 dias.',
    },
    {
      question: 'Há versão gratuita?',
      answer:
        'Sim! Haverá uma versão gratuita robusta com funcionalidades principais, além de uma versão premium com recursos avançados.',
    },
    {
      question: 'Como funciona a cobrança recorrente?',
      answer:
        'Configure o cliente uma vez definindo valor, frequência e data de vencimento. O app gera automaticamente as cobranças PIX e envia lembretes.',
    },
    {
      question: 'É seguro usar o PIX Recorrente?',
      answer:
        'Sim, utilizamos criptografia de ponta a ponta e integração com gateways certificados (Mercado Pago e Efi). Seus dados estão protegidos.',
    },
    {
      question: 'Posso testar o app antes do lançamento?',
      answer:
        'Em breve abriremos beta testing para usuários selecionados. Cadastre-se na newsletter para ser notificado.',
    },
  ];

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'suporte@pixrecorrente.com.br',
      href: 'mailto:suporte@pixrecorrente.com.br',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '(11) 99999-9999',
      href: 'https://wa.me/5511999999999',
    },
    {
      icon: '📚',
      title: 'Documentação',
      value: 'docs.pixrecorrente.com.br',
      href: 'https://docs.pixrecorrente.com.br',
    },
  ];

  const team = [
    {
      name: 'João Victor',
      role: 'Desenvolvedor Full-Stack',
      description:
        'Especialista em React Native e Firebase, responsável pela arquitetura do app.',
    },
    {
      name: 'Equipe PIX Recorrente',
      role: 'Desenvolvimento & Design',
      description:
        'Time dedicado a criar a melhor experiência para profissionais autônomos.',
    },
  ];

  return (
    <>
      {/* Contact Hero */}
      <section className="velo-contact-hero">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <h2 className="velo-section-title mb-4" data-aos="fade-up">
                Entre em Contato
              </h2>
              <p
                className="velo-section-subtitle mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Tire suas dúvidas, dê feedback ou simplesmente diga olá. Estamos
                aqui para ajudar!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Row>
                {contactInfo.map((contact, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <Card
                      className="contact-card text-center h-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Card.Body>
                        <div className="contact-icon mb-3">{contact.icon}</div>
                        <h5 className="contact-title">{contact.title}</h5>
                        <a
                          href={contact.href}
                          className="contact-link"
                          target={
                            contact.href.startsWith('http')
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            contact.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                        >
                          {contact.value}
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                Perguntas Frequentes
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Respostas para as dúvidas mais comuns sobre o PIX Recorrente
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="mx-auto">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="faq-card mb-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body>
                    <h5 className="faq-question">{faq.question}</h5>
                    <p className="faq-answer">{faq.answer}</p>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                Quem Está Por Trás
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Conheça a equipe dedicada ao sucesso dos profissionais
                brasileiros
              </p>
            </Col>
          </Row>

          <Row>
            {team.map((member, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card
                  className="team-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <Card.Body className="text-center">
                    <div className="team-avatar mb-3">
                      <span className="avatar-placeholder">👤</span>
                    </div>
                    <h5 className="team-name">{member.name}</h5>
                    <p className="team-role">{member.role}</p>
                    <p className="team-description">{member.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="velo-cta-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <h2 className="cta-title mb-4 text-white">
                  Pronto para Começar?
                </h2>
                <p className="cta-subtitle mb-5 text-white">
                  Junte-se à nossa newsletter e seja o primeiro a saber quando o
                  PIX Recorrente for lançado. Early access disponível em breve!
                </p>
                <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
                  <Button className="btn-velo-primary" size="lg">
                    <span className="me-2">📧</span>
                    Cadastrar na Newsletter
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    onClick={() =>
                      window.open('https://wa.me/5511999999999', '_blank')
                    }
                  >
                    <span className="me-2">💬</span>
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VeloContact;
