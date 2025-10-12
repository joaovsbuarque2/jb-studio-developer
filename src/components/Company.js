import { Card, Col, Container, Row } from 'react-bootstrap';

function Company() {
  const values = [
    {
      icon: '🚀',
      title: 'Inovação',
      description:
        'Estamos sempre explorando novas tecnologias para entregar soluções modernas e eficientes.',
    },
    {
      icon: '💡',
      title: 'Transparência',
      description:
        'Mantemos processos claros, comunicação aberta e total alinhamento com nossos parceiros.',
    },
    {
      icon: '🎯',
      title: 'Propósito',
      description:
        'Cada produto nasce para gerar impacto real e entregar valor sustentável aos usuários.',
    },
    {
      icon: '🤝',
      title: 'Colaboração',
      description:
        'Trabalhamos em parceria com nossos clientes, transformando ideias em conquistas conjuntas.',
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description:
        'Experiências digitais pensadas para o futuro: responsivas, rápidas e otimizadas para mobile.',
    },
    {
      icon: '🌟',
      title: 'Excelência',
      description:
        'Buscamos sempre a melhor experiência de uso, unindo design moderno e alto desempenho.',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Descoberta',
      description:
        'Analisamos cenários, mapeamos problemas reais e identificamos oportunidades de inovação.',
    },
    {
      step: '02',
      title: 'Planejamento',
      description:
        'Definição estratégica de metas, funcionalidades e roadmap para cada projeto.',
    },
    {
      step: '03',
      title: 'Prototipagem',
      description:
        'Validação ágil com protótipos funcionais, reduzindo riscos e acelerando resultados.',
    },
    {
      step: '04',
      title: 'Desenvolvimento',
      description:
        'Construção sólida com tecnologias modernas, aplicando as melhores práticas do mercado.',
    },
    {
      step: '05',
      title: 'Evolução Contínua',
      description:
        'Analisamos métricas, coletamos feedback e aprimoramos cada solução de forma iterativa.',
    },
  ];

  return (
    <section id="empresa" className="section">
      <Container>
        {/* Header */}
        <Row>
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center" data-aos="fade-up">
              JB Developer Studio
            </h1>
            <p
              className="section-subtitle text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Transformando ideias em soluções digitais de impacto
            </p>
          </Col>
        </Row>

        {/* Filosofia */}
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
                  <strong className="text-gradient">JB Developer Studio</strong>{' '}
                  nasceu para ser um ambiente de inovação, onde ideias ganham
                  vida e se transformam em produtos digitais que unem
                  tecnologia, design e propósito.
                </p>
                <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                  Funcionamos como um{' '}
                  <strong className="text-gradient">hub criativo</strong>,
                  combinando expertise técnica com visão estratégica. Nosso foco
                  está em criar soluções escaláveis, intuitivas e centradas no
                  usuário.
                </p>
                <p
                  className="fs-5 text-center"
                  style={{ color: 'var(--text-light)' }}
                >
                  Mais do que software, criamos experiências digitais que
                  fortalecem negócios e conectam pessoas.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Valores */}
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
              className="text-center text-white mb-5"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              Como conduzimos projetos digitais do conceito à entrega
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
                  Desenvolver soluções digitais que unem inovação, usabilidade e
                  impacto real — ajudando pessoas e empresas a crescer no mundo
                  conectado.
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
