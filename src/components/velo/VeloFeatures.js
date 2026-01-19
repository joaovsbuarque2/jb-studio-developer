import { Badge, Card, Col, Container, Row } from 'react-bootstrap';

function VeloFeatures() {
  const implementedFeatures = [
    {
      icon: '🔐',
      title: 'Autenticação de Usuários',
      status: '✅ Completo',
      description:
        'Firebase Auth com login, registro, recuperação de senha e Google Sign-In.',
    },
    {
      icon: '👥',
      title: 'Gestão de Clientes',
      status: '✅ Completo',
      description:
        'CRUD completo com validações, busca em tempo real e histórico de cobranças.',
    },
    {
      icon: '💳',
      title: 'Cobranças Recorrentes',
      status: '✅ Completo',
      description:
        'Criação, edição, listagem e gerenciamento de assinaturas automáticas.',
    },
    {
      icon: '📱',
      title: 'Geração de QR Code PIX',
      status: '✅ Completo',
      description:
        'Integração com Mercado Pago e Efi Pagamentos para geração automática.',
    },
    {
      icon: '📊',
      title: 'Dashboard Financeiro',
      status: '✅ Completo',
      description: 'Métricas, gráficos e análise de dados em tempo real.',
    },
    {
      icon: '🔔',
      title: 'Notificações Push',
      status: '✅ Completo',
      description:
        'Firebase Cloud Messaging com canais customizados para Android.',
    },
    {
      icon: '💬',
      title: 'Integração WhatsApp',
      status: '✅ Completo',
      description: 'Envio automático de cobranças e lembretes via WhatsApp.',
    },
    {
      icon: '👑',
      title: 'Sistema de Assinatura Premium',
      status: '✅ Completo',
      description:
        'Trial de 7 dias + planos mensal/anual com benefícios exclusivos.',
    },
  ];

  const techStack = [
    {
      category: 'Frontend',
      technologies: [
        {
          name: 'React Native',
          version: '0.72.17',
          use: 'Framework principal',
        },
        { name: 'TypeScript', version: '5.0.4', use: 'Tipagem estática' },
        {
          name: 'React Navigation',
          version: '6.x',
          use: 'Navegação entre telas',
        },
        {
          name: 'React Native Paper',
          version: '5.14.5',
          use: 'Componentes de UI',
        },
        {
          name: 'Victory Native',
          version: '41.20.1',
          use: 'Gráficos avançados',
        },
        { name: 'Zustand', version: '4.5.0', use: 'Gerenciamento de estado' },
      ],
    },
    {
      category: 'Backend/Cloud',
      technologies: [
        { name: 'Firebase Auth', version: '', use: 'Autenticação de usuários' },
        { name: 'Cloud Firestore', version: '', use: 'Banco de dados NoSQL' },
        { name: 'Cloud Functions', version: '', use: 'Backend serverless' },
        {
          name: 'Cloud Messaging (FCM)',
          version: '',
          use: 'Notificações push',
        },
      ],
    },
    {
      category: 'Gateways de Pagamento',
      technologies: [
        { name: 'Mercado Pago', version: '', use: 'Gateway principal' },
        { name: 'Efi Pagamentos', version: '', use: 'Gateway alternativo' },
      ],
    },
  ];

  const keyServices = [
    {
      name: 'chargesService.ts',
      description:
        'Gerencia operações de cobranças: criação, edição, listagem com filtros, integração com APIs de pagamento.',
    },
    {
      name: 'clientsService.ts',
      description:
        'CRUD completo de clientes, busca e filtros, validação de dados.',
    },
    {
      name: 'paymentService.ts',
      description:
        'Integração com Mercado Pago e Efi, geração de PIX, tratamento de webhooks.',
    },
    {
      name: 'subscriptionService.ts',
      description:
        'Gerenciamento de recorrências, atualização de status, cálculo de datas.',
    },
    {
      name: 'notificationService.ts',
      description:
        'Notificações push e locais, canais customizados, teste integrado.',
    },
    {
      name: 'whatsappService.ts',
      description:
        'Envio automático de cobranças via WhatsApp, templates de mensagens.',
    },
  ];

  return (
    <>
      {/* Features Hero */}
      <section className="velo-features-hero">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <h2 className="velo-section-title mb-4" data-aos="fade-up">
                Funcionalidades Implementadas
              </h2>
              <p
                className="velo-section-subtitle mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Um MVP robusto e completo, pronto para uso em produção.
              </p>
              <div
                className="status-bar"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="status-fill" style={{ width: '75%' }}></div>
                <span className="status-text">75% Completo</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Implemented Features */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h3
                className="section-subtitle mb-4 text-center"
                data-aos="fade-up"
              >
                Core do MVP (Completo)
              </h3>
              <Row>
                {implementedFeatures.map((feature, index) => (
                  <Col lg={3} md={6} key={index} className="mb-4">
                    <Card
                      className="velo-feature-card h-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                    >
                      <Card.Body className="text-center p-4">
                        <div className="feature-icon mb-3">{feature.icon}</div>
                        <Badge bg="success" className="mb-3">
                          {feature.status}
                        </Badge>
                        <h5 className="feature-title mb-3">{feature.title}</h5>
                        <p className="feature-description">
                          {feature.description}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                Stack Tecnológica
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Tecnologias modernas e robustas para máxima performance e
                escalabilidade
              </p>
            </Col>
          </Row>

          {techStack.map((category, catIndex) => (
            <Row key={catIndex} className="mb-5">
              <Col lg={12}>
                <h3 className="tech-category-title mb-4" data-aos="fade-up">
                  {category.category}
                </h3>
                <Row>
                  {category.technologies.map((tech, index) => (
                    <Col lg={4} md={6} key={index} className="mb-3">
                      <Card
                        className="tech-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                      >
                        <Card.Body>
                          <h5 className="tech-name">{tech.name}</h5>
                          {tech.version && (
                            <Badge bg="secondary" className="mb-2">
                              {tech.version}
                            </Badge>
                          )}
                          <p className="tech-use">{tech.use}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Key Services */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                Serviços Principais
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                A arquitetura robusta por trás do PIX Recorrente
              </p>
            </Col>
          </Row>

          <Row>
            {keyServices.map((service, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card
                  className="service-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body>
                    <h5 className="service-name mb-3">{service.name}</h5>
                    <p className="service-description">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VeloFeatures;
