import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// Placeholder for app screenshot - user will add later
// import veloHomeImg from '../../assets/images/velo-home-screenshot.png';

function VeloHome() {
  const stats = [
    { icon: '💰', number: 'R$ 50K+', label: 'Faturamento Gerenciado' },
    { icon: '👥', number: '200+', label: 'Clientes Ativos' },
    { icon: '📊', number: '95%', label: 'Taxa de Sucesso' },
    { icon: '⚡', number: '24/7', label: 'Automação Completa' },
  ];

  const quickFeatures = [
    {
      icon: '🔄',
      title: 'Cobranças Recorrentes',
      description:
        'Configure uma vez e esqueça. O app cuida de tudo automaticamente.',
    },
    {
      icon: '🔔',
      title: 'Lembretes Inteligentes',
      description:
        'Notificações automáticas reduzem inadimplência e mantém o fluxo de caixa.',
    },
    {
      icon: '📱',
      title: 'Centralização Total',
      description:
        'Tudo em um lugar: clientes, cobranças, pagamentos e relatórios.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="velo-hero">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div data-aos="fade-up">
                <div className="velo-badge mb-4">
                  <span className="badge bg-gradient text-white">
                    🚀 MVP Completo
                  </span>
                </div>

                <h1 className="velo-hero-title mb-4">
                  Simplificando a gestão de
                  <span className="text-gradient"> cobranças</span>
                  <br />
                  para profissionais
                </h1>

                <p className="velo-hero-subtitle mb-5">
                  PIX Recorrente automatiza suas cobranças mensais, reduz
                  inadimplência e centraliza tudo em um dashboard profissional.
                  Perfeito para MEIs e profissionais autônomos.
                </p>

                <div className="hero-buttons d-flex flex-wrap gap-3">
                  <Button className="btn-velo-primary" size="lg">
                    <span className="me-2">📱</span>
                    Baixar Agora
                  </Button>
                </div>

                <div className="hero-stats mt-5">
                  <Row>
                    {stats.map((stat, index) => (
                      <Col
                        xs={6}
                        lg={3}
                        key={index}
                        className="text-center mb-3"
                      >
                        <div className="stat-item">
                          <div className="stat-icon">{stat.icon}</div>
                          <div className="stat-number">{stat.number}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <div data-aos-delay="200">
                <div className="velo-phone-mockup">
                  <div className="phone-frame">
                    {/* Placeholder for app screenshot */}
                    <div className="app-screenshot-placeholder">
                      <div className="placeholder-content">
                        <span>📱</span>
                        <p>
                          App Screenshot
                          <br />
                          Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Features */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                Por que escolher o PIX Recorrente?
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Automação inteligente para profissionais que valorizam seu
                tempo.
              </p>
            </Col>
          </Row>

          <Row>
            {quickFeatures.map((feature, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card
                  className="velo-feature-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon mb-3">{feature.icon}</div>
                    <h5 className="feature-title mb-3">{feature.title}</h5>
                    <p className="feature-description">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="velo-cta-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <h2 className="cta-title mb-4 text-white">
                  Pronto para profissionalizar suas cobranças?
                </h2>
                <p className="cta-subtitle mb-5 text-white">
                  Junte-se a centenas de profissionais que já automatizaram seu
                  fluxo de cobrança e reduziram inadimplências.
                </p>
                <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
                  <Button className="btn-velo-primary" size="lg">
                    <span className="me-2">📱</span>
                    Baixar para iOS
                  </Button>
                  <Button className="btn-velo-primary" size="lg">
                    <span className="me-2">🤖</span>
                    Baixar para Android
                  </Button>
                </div>
                <p className="mt-2 text-muted">
                  <small>
                    Em desenvolvimento • Cadastre-se para early access
                  </small>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VeloHome;
