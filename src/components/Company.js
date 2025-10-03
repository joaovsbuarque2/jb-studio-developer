import { Card, Col, Container, Row } from 'react-bootstrap';

function Company() {
  const values = [
    {
      icon: '🚀',
      title: 'Inovação',
      description:
        'Cada projeto é uma oportunidade de explorar novas tecnologias e abordagens criativas.',
    },
    {
      icon: '💡',
      title: 'Transparência',
      description:
        'Processo aberto, roadmaps claros e comunicação honesta sobre cada etapa dos projetos.',
    },
    {
      icon: '🎯',
      title: 'Propósito',
      description:
        'Todos os projetos nascem com o objetivo de resolver problemas reais e gerar valor para os usuários.',
    },
    {
      icon: '🎮',
      title: 'Gamificação',
      description:
        'Acredito que a tecnologia deve ser divertida e envolvente, transformando tarefas em experiências.',
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description:
        'Foco especial em desenvolvimento mobile, criando experiências otimizadas para dispositivos móveis.',
    },
    {
      icon: '🌟',
      title: 'Experiência',
      description:
        'UI/UX bem pensada, priorizando sempre a experiência e satisfação do usuário final.',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Descoberta',
      description:
        'Identificação de problemas reais e oportunidades de inovação no mercado.',
    },
    {
      step: '02',
      title: 'Conceituação',
      description:
        'Desenvolvimento da ideia central, validação do conceito e definição de objetivos.',
    },
    {
      step: '03',
      title: 'Prototipagem',
      description:
        'Criação de protótipos funcionais para testar e refinar a solução proposta.',
    },
    {
      step: '04',
      title: 'Desenvolvimento',
      description:
        'Implementação usando as melhores práticas e tecnologias mais adequadas.',
    },
    {
      step: '05',
      title: 'Iteração',
      description:
        'Melhoria contínua baseada em feedback real e métricas de usuário.',
    },
  ];

  return (
    <section id="empresa" className="section">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center" data-aos="fade-up">
              JB Studio Developer
            </h1>
            <p
              className="section-subtitle text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              O armazém de ideias que se transformam em soluções reais
            </p>
          </Col>
        </Row>

        {/* Filosofia Principal */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card
              className="card-custom p-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Card.Body>
                <h2 className="h3 mb-4 text-gradient text-center">
                  Nossa Filosofia
                </h2>

                <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                  A{' '}
                  <strong className="text-gradient">JB Studio Developer</strong>{' '}
                  não é apenas uma empresa - é o meu "armazém de ideias e
                  projetos pessoais". Aqui, cada projeto nasce de uma paixão
                  genuína por resolver problemas reais através da tecnologia.
                </p>

                <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                  Funciona como um{' '}
                  <strong className="text-gradient">portfólio vivo</strong>,
                  onde cada ideia ganha forma e se transforma em soluções
                  concretas. Não se trata apenas de desenvolver aplicativos, mas
                  de criar experiências que façam diferença na vida das pessoas.
                </p>

                <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                  Cada projeto que desenvolvo aqui terá sua própria{' '}
                  <strong className="text-gradient">landing page</strong>
                  com descrição detalhada, funcionalidades principais e roadmap
                  de evolução. É uma vitrine transparente do meu trabalho e do
                  meu processo criativo.
                </p>

                <p
                  className="fs-5 text-center"
                  style={{ color: 'var(--text-light)' }}
                >
                  O objetivo é manter um visual{' '}
                  <strong className="text-gradient">
                    limpo e institucional
                  </strong>
                  , como se fosse uma vitrine digital onde cada projeto tem seu
                  espaço para brilhar e contar sua própria história.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Nossos Valores */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2
              className="section-title text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Nossos Valores
            </h2>

            <Row>
              {values.map((value, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">
                  <Card
                    className="card-custom h-100 text-center p-4"
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                  >
                    <Card.Body>
                      <div className="fs-1 mb-3">{value.icon}</div>
                      <h4 className="h5 mb-3 text-gradient">{value.title}</h4>
                      <p style={{ color: 'var(--text-muted)' }}>
                        {value.description}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Metodologia */}
        <Row>
          <Col lg={10} className="mx-auto">
            <h2
              className="section-title text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Nossa Metodologia
            </h2>
            <p
              className="text-center text-muted mb-5"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              Como transformamos ideias em produtos digitais de impacto
            </p>

            <Row>
              {methodology.map((item, index) => (
                <Col lg={12} key={index} className="mb-4">
                  <Card
                    className="card-custom p-4"
                    data-aos="fade-right"
                    data-aos-delay={1000 + index * 150}
                  >
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={2} className="text-center mb-3 mb-md-0">
                          <div
                            style={{
                              width: '60px',
                              height: '60px',
                              background: 'var(--gradient-primary)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                              color: 'white',
                              margin: '0 auto',
                            }}
                          >
                            {item.step}
                          </div>
                        </Col>
                        <Col md={3}>
                          <h5 className="mb-2 text-gradient">{item.title}</h5>
                        </Col>
                        <Col md={7}>
                          <p
                            className="mb-0"
                            style={{ color: 'var(--text-light)' }}
                          >
                            {item.description}
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Missão */}
        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <Card
              className="card-custom p-5"
              data-aos="zoom-in"
              data-aos-delay="1500"
            >
              <Card.Body className="text-center">
                <h3 className="mb-4 text-gradient">🌟 Nossa Missão</h3>
                <p className="fs-4 mb-0" style={{ color: 'var(--text-light)' }}>
                  Criar soluções tecnológicas que não apenas resolvem problemas,
                  mas também inspiram, divertem e conectam pessoas através da
                  inovação digital.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Company;
