import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';

function ElevaRoadmap() {
  const roadmapPhases = [
    {
      phase: 'Fase 1',
      title: 'MVP Core',
      subtitle: 'Fundação Sólida',
      status: 'completed',
      progress: 100,
      timeline: 'Q4 2024',
      features: [
        { name: 'Sistema básico de tarefas', completed: true },
        { name: 'Gamificação inicial (XP e níveis)', completed: true },
        { name: 'Interface moderna e responsiva', completed: true },
        { name: 'Sistema de conquistas básico', completed: true },
        { name: 'Perfil de usuário', completed: true }
      ],
      highlight: 'Base sólida para toda a experiência gamificada'
    },
    {
      phase: 'Fase 2',
      title: 'Social & Competição',
      subtitle: 'Conectando Pessoas',
      status: 'in-progress',
      progress: 75,
      timeline: 'Q1 2025',
      features: [
        { name: 'Sistema de amigos e seguidores', completed: true },
        { name: 'Rankings e leaderboards', completed: true },
        { name: 'Torneios semanais básicos', completed: true },
        { name: 'Chat e mensagens', completed: false },
        { name: 'Equipes e grupos', completed: false },
        { name: 'Feed de atividades sociais', completed: false }
      ],
      highlight: 'Transformando produtividade em experiência social'
    },
    {
      phase: 'Fase 3',
      title: 'Analytics & IA',
      subtitle: 'Inteligência Avançada',
      status: 'planned',
      progress: 25,
      timeline: 'Q2 2025',
      features: [
        { name: 'Dashboard de analytics avançado', completed: false },
        { name: 'Relatórios de produtividade', completed: false },
        { name: 'IA para sugestões personalizadas', completed: false },
        { name: 'Insights comportamentais', completed: false },
        { name: 'Automações inteligentes', completed: false },
        { name: 'Integração com calendários', completed: false }
      ],
      highlight: 'Usando dados para otimizar sua produtividade'
    },
    {
      phase: 'Fase 4',
      title: 'Ecossistema',
      subtitle: 'Plataforma Completa',
      status: 'future',
      progress: 0,
      timeline: 'Q3 2025',
      features: [
        { name: 'API pública para desenvolvedores', completed: false },
        { name: 'Marketplace de plugins', completed: false },
        { name: 'Integração com 50+ apps', completed: false },
        { name: 'Sistema de recompensas premium', completed: false },
        { name: 'Modo empresarial', completed: false },
        { name: 'Versão web completa', completed: false }
      ],
      highlight: 'Criando um ecossistema completo de produtividade'
    }
  ];

  const upcomingFeatures = [
    {
      icon: '🤖',
      title: 'Assistente IA Personalizado',
      description: 'IA que aprende seus padrões e sugere otimizações',
      eta: 'Março 2025',
      category: 'IA'
    },
    {
      icon: '🏰',
      title: 'Guilds e Organizações',
      description: 'Crie e gerencie comunidades com objetivos compartilhados',
      eta: 'Abril 2025',
      category: 'Social'
    },
    {
      icon: '🎨',
      title: 'Editor de Temas Avançado',
      description: 'Customize completamente a aparência do seu app',
      eta: 'Maio 2025',
      category: 'UX'
    },
    {
      icon: '📊',
      title: 'Business Analytics',
      description: 'Dashboard corporativo para gestão de equipes',
      eta: 'Junho 2025',
      category: 'Business'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'primary';
      case 'planned': return 'warning';
      case 'future': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Concluído';
      case 'in-progress': return 'Em Desenvolvimento';
      case 'planned': return 'Planejado';
      case 'future': return 'Futuro';
      default: return status;
    }
  };

  return (
    <>
      <section className="eleva-roadmap-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="eleva-page-title" data-aos="fade-up">
                Roadmap de Desenvolvimento
              </h1>
              <p className="eleva-page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Acompanhe nossa jornada para criar a plataforma de produtividade 
                mais avançada e divertida do mundo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eleva-section">
        <Container>
          <div className="roadmap-timeline">
            {roadmapPhases.map((phase, index) => (
              <div 
                key={index} 
                className={`roadmap-phase ${phase.status}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Row className="align-items-center">
                  <Col lg={4}>
                    <div className="phase-info">
                      <div className="phase-header">
                        <Badge 
                          bg={getStatusColor(phase.status)}
                          className="phase-badge mb-2"
                        >
                          {phase.phase}
                        </Badge>
                        <h3 className="phase-title">{phase.title}</h3>
                        <p className="phase-subtitle">{phase.subtitle}</p>
                      </div>
                      
                      <div className="phase-meta">
                        <div className="phase-status mb-2">
                          <Badge bg={getStatusColor(phase.status)}>
                            {getStatusText(phase.status)}
                          </Badge>
                          <span className="timeline ms-2">{phase.timeline}</span>
                        </div>
                        
                        <div className="phase-progress">
                          <div className="d-flex justify-content-between mb-1">
                            <small>Progresso</small>
                            <small>{phase.progress}%</small>
                          </div>
                          <ProgressBar 
                            variant={getStatusColor(phase.status)}
                            now={phase.progress} 
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  
                  <Col lg={8}>
                    <Card className="phase-content">
                      <Card.Body>
                        <h5 className="features-title mb-3">Funcionalidades</h5>
                        <Row>
                          {phase.features.map((feature, featureIndex) => (
                            <Col sm={6} key={featureIndex} className="mb-2">
                              <div className={`feature-item ${feature.completed ? 'completed' : 'pending'}`}>
                                <span className="feature-icon">
                                  {feature.completed ? '✅' : '🔄'}
                                </span>
                                <span className="feature-name">{feature.name}</span>
                              </div>
                            </Col>
                          ))}
                        </Row>
                        
                        <div className="phase-highlight mt-3">
                          <p className="highlight-text">
                            <strong>💡 Destaque:</strong> {phase.highlight}
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="eleva-section-alt">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="eleva-section-title" data-aos="fade-up">
                Funcionalidades em Destaque
              </h2>
              <p className="eleva-section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Recursos especiais que estamos desenvolvendo com muito carinho
              </p>
            </Col>
          </Row>
          
          <Row>
            {upcomingFeatures.map((feature, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card 
                  className="upcoming-feature-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="p-4">
                    <div className="feature-header mb-3">
                      <div className="feature-icon">{feature.icon}</div>
                      <div className="feature-meta">
                        <h5 className="feature-title">{feature.title}</h5>
                        <div className="feature-category-eta">
                          <Badge className="category-badge me-2">
                            {feature.category}
                          </Badge>
                          <span className="eta-text">{feature.eta}</span>
                        </div>
                      </div>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="eleva-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="roadmap-cta-box" data-aos="fade-up">
                <h3 className="cta-title mb-4">
                  🚀 Influencie Nosso Roadmap
                </h3>
                <p className="cta-description mb-4">
                  Sua opinião é fundamental! Participe da nossa comunidade no Discord, 
                  vote nas próximas funcionalidades e ajude a moldar o futuro do Eleva.
                </p>
                
                <div className="community-stats">
                  <Row>
                    <Col md={4} className="text-center mb-3">
                      <div className="stat-number">2.5K+</div>
                      <div className="stat-label">Membros no Discord</div>
                    </Col>
                    <Col md={4} className="text-center mb-3">
                      <div className="stat-number">150+</div>
                      <div className="stat-label">Sugestões Implementadas</div>
                    </Col>
                    <Col md={4} className="text-center mb-3">
                      <div className="stat-number">98%</div>
                      <div className="stat-label">Features Entregues no Prazo</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ElevaRoadmap;