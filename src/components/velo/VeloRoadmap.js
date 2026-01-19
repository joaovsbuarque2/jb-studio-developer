import { Card, Col, Container, Row } from 'react-bootstrap';

function VeloRoadmap() {
  const currentStatus = {
    completed: 75,
    inProgress: ['Webhook Efi', 'Recorrência automática'],
    planned: ['Emails Transacionais', 'Relatórios em PDF', 'Emissão de NFS-e'],
  };

  const roadmapItems = [
    {
      phase: 'Fase 1 - MVP Core',
      status: 'completed',
      icon: '🚀',
      color: '#00d4aa',
      description: 'Fundamentos do produto estabelecidos',
      items: [
        'Autenticação e perfil do usuário',
        'Gestão de clientes (CRUD)',
        'Criação de cobranças manuais',
        'Dashboard financeiro básico',
        'Notificações push locais',
        'Integração básica com Mercado Pago',
      ],
    },
    {
      phase: 'Fase 2 - Automação',
      status: 'in_progress',
      icon: '⚙️',
      color: '#ffcc00',
      description: 'Transformando o produto em uma solução automatizada',
      items: [
        'Webhooks de pagamento (Efi)',
        'Cobranças recorrentes automáticas',
        'Monitoramento em tempo real',
        'Integração avançada WhatsApp',
        'Sistema de assinatura premium',
        'Admin dashboard',
      ],
    },
    {
      phase: 'Fase 3 - Expansão',
      status: 'planned',
      icon: '📈',
      color: '#00aaff',
      description: 'Expandindo funcionalidades e alcance',
      items: [
        'Emails transacionais',
        'Relatórios em PDF',
        'Emissão de NFS-e',
        'Cartão de crédito',
        'Multi-idioma',
        'Backup de dados',
      ],
    },
    {
      phase: 'Fase 4 - Scale',
      status: 'planned',
      icon: '🌟',
      color: '#b0b0b0',
      description: 'Escalabilidade empresarial e inovação',
      items: [
        'API pública para integrações',
        'White-label para empresas',
        'Analytics avançado',
        'Suporte a múltiplas moedas',
        'Integração com ERPs',
        'IA para insights financeiros',
      ],
    },
  ];

  const metrics = [
    { label: 'Uptime do Sistema', value: '99%', icon: '⚡' },
    { label: 'Tempo de Resposta API', value: '< 500ms', icon: '🚀' },
    { label: 'Notificação em', value: '< 5s', icon: '🔔' },
    { label: 'Usuários Ativos', value: '50+', icon: '👥' },
  ];

  const kpis = {
    tecnicos: [
      '99% de uptime do sistema',
      'Tempo de resposta de API < 500ms',
      'Notificação enviada em < 5s após pagamento',
      'Zero erros críticos em produção',
    ],
    negocio: [
      '50 usuários ativos no primeiro mês',
      '20% conversão de trial → premium',
      'NPS > 8',
      '< 5% churn mensal',
    ],
    produto: [
      'Tempo médio de onboarding: < 10 minutos',
      'Média de 10+ cobranças criadas por usuário/mês',
      'Taxa de inadimplência reduzida em 30%',
      '3+ logins por semana por usuário ativo',
    ],
  };

  return (
    <>
      {/* Roadmap Hero */}
      <section className="velo-roadmap-hero">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <h2 className="velo-section-title mb-4" data-aos="fade-up">
                Roadmap e Status
              </h2>
              <p
                className="velo-section-subtitle mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Onde estamos e para onde vamos com o PIX Recorrente.
              </p>
              <div
                className="status-overview"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="status-circle">
                  <div
                    className="status-fill"
                    style={{ '--percentage': `${currentStatus.completed}%` }}
                  ></div>
                  <div className="status-text">
                    <span className="percentage">
                      {currentStatus.completed}%
                    </span>
                    <span className="label">Completo</span>
                  </div>
                </div>
                <div className="status-details">
                  <h4>Status Atual</h4>
                  <p className="mb-2">
                    <strong>Em Desenvolvimento:</strong>{' '}
                    {currentStatus.inProgress.join(', ')}
                  </p>
                  <p>
                    <strong>Próximos:</strong>{' '}
                    {currentStatus.planned.slice(0, 3).join(', ')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Current Metrics */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                Métricas Atuais
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Nossos indicadores de performance e objetivos
              </p>
            </Col>
          </Row>

          <Row>
            {metrics.map((metric, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card
                  className="metric-card text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body>
                    <div className="metric-icon mb-2">{metric.icon}</div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Roadmap Phases */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2
                className="velo-section-title text-center mb-5"
                data-aos="fade-up"
              >
                Fases de Desenvolvimento
              </h2>

              <div className="roadmap-timeline">
                {roadmapItems.map((phase, index) => (
                  <div
                    key={index}
                    className={`roadmap-phase ${phase.status}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    {/* Timeline connector */}
                    {index < roadmapItems.length - 1 && (
                      <div className="timeline-connector"></div>
                    )}

                    <div className="phase-content">
                      <div className="phase-icon-wrapper">
                        <div
                          className="phase-icon"
                          style={{ backgroundColor: phase.color }}
                        >
                          <span className="icon-emoji">{phase.icon}</span>
                        </div>
                        <div className="phase-status-indicator">
                          {phase.status === 'completed' && (
                            <span className="status-completed">✓</span>
                          )}
                          {phase.status === 'in_progress' && (
                            <span className="status-progress">⟳</span>
                          )}
                          {phase.status === 'planned' && (
                            <span className="status-planned">○</span>
                          )}
                        </div>
                      </div>

                      <div className="phase-details">
                        <div className="phase-header-info">
                          <h3 className="phase-title">{phase.phase}</h3>
                          <div className="phase-description">
                            {phase.description}
                          </div>
                        </div>

                        <div className="phase-items">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="phase-item">
                              <div className="item-dot"></div>
                              <span className="item-text">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* KPIs */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                KPIs e Metas
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Nossos objetivos para medir o sucesso do produto
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={4} className="mb-4">
              <Card className="kpi-card h-100" data-aos="fade-up">
                <Card.Header>
                  <h5 className="kpi-category">Técnicos</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="kpi-list">
                    {kpis.tecnicos.map((kpi, index) => (
                      <li key={index}>{kpi}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} className="mb-4">
              <Card
                className="kpi-card h-100"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Card.Header>
                  <h5 className="kpi-category">Negócio</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="kpi-list">
                    {kpis.negocio.map((kpi, index) => (
                      <li key={index}>{kpi}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} className="mb-4">
              <Card
                className="kpi-card h-100"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card.Header>
                  <h5 className="kpi-category">Produto</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="kpi-list">
                    {kpis.produto.map((kpi, index) => (
                      <li key={index}>{kpi}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VeloRoadmap;
