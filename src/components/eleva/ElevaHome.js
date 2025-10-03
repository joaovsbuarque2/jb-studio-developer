import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// Importar imagens do app
import elevaHomeImg from '../../assets/images/eleva-home-atividade.jpeg';

function ElevaHome() {
  const stats = [
    { icon: '🎯', number: '10K+', label: 'Tarefas Completadas' },
    { icon: '🏆', number: '500+', label: 'Usuários Ativos' },
    { icon: '⚡', number: '95%', label: 'Taxa de Retenção' },
    { icon: '🎮', number: '24/7', label: 'Diversão Garantida' },
  ];

  const quickFeatures = [
    {
      icon: '🎮',
      title: 'Gamificação Total',
      description: 'Transforme sua produtividade em um jogo épico',
    },
    {
      icon: '👥',
      title: 'Social & Competitivo',
      description: 'Compete com amigos e suba nos rankings',
    },
    {
      icon: '📊',
      title: 'Análises Inteligentes',
      description: 'Insights profundos sobre sua produtividade',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="eleva-hero">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div data-aos="fade-up">
                <div className="eleva-badge mb-4">
                  <span className="badge bg-gradient text-white">
                    🚀 Versão Beta Disponível
                  </span>
                </div>

                <h1 className="eleva-hero-title mb-4">
                  Produtividade que
                  <span className="text-gradient"> Evolui</span>
                  <br />
                  com Você
                </h1>

                <p className="eleva-hero-subtitle mb-5">
                  O primeiro app de produtividade completamente gamificado.
                  Transforme suas tarefas em missões épicas, ganhe XP, participe
                  de torneios e faça parte de uma comunidade incrível.
                </p>

                <div className="hero-buttons d-flex flex-wrap gap-3">
                  <Button className="btn-eleva-primary" size="lg">
                    <span className="me-2">🚀</span>
                    Baixar Agora
                  </Button>
                </div>

                {/* <div className="hero-stats mt-5">
                  <Row>
                    {stats.map((stat, index) => (
                      <Col xs={6} lg={3} key={index} className="text-center mb-3">
                        <div className="stat-item">
                          <div className="stat-icon">{stat.icon}</div>
                          <div className="stat-number">{stat.number}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div> */}
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <div data-aos-delay="200">
                <div className="eleva-phone-mockup">
                  <div className="phone-frame">
                    <img
                      src={elevaHomeImg}
                      alt="Tela inicial do Eleva - Atividades e gamificação"
                      className="app-screenshot"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Features */}
      <section className="eleva-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="eleva-section-title" data-aos="fade-up">
                Por que escolher o Eleva?
              </h2>
              <p
                className="eleva-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Não é só mais um app de tarefas. É uma experiência completa.
              </p>
            </Col>
          </Row>

          <Row>
            {quickFeatures.map((feature, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card
                  className="eleva-feature-card h-100"
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
      <section className="eleva-cta-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <h2 className="cta-title mb-4 text-white">
                  Pronto para Evoluir sua Produtividade?
                </h2>
                <p className="cta-subtitle mb-5 text-white">
                  Junte-se a milhares de usuários que já transformaram suas
                  tarefas em uma aventura épica.
                </p>
                <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
                  <Button className="btn-eleva-primary" size="lg">
                    <span className="me-2">📱</span>
                    Baixar para iOS
                  </Button>
                  <Button className="btn-eleva-primary" size="lg">
                    <span className="me-2">🤖</span>
                    Baixar para Android
                  </Button>
                </div>
                <p className="mt-2 text-muted">
                  <small>
                    Disponível em breve • Cadastre-se para early access
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

export default ElevaHome;
