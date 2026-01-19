import { Card, Col, Container, Row } from 'react-bootstrap';

function VeloAbout() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Automação Completa',
      description:
        'Cadastre seu cliente e a recorrência uma vez. O app cuida de gerar e enviar as cobranças PIX automaticamente.',
    },
    {
      icon: '📉',
      title: 'Redução da Inadimplência',
      description:
        'Lembretes automáticos e notificações profissionais ajudam a manter o fluxo de caixa saudável.',
    },
    {
      icon: '📊',
      title: 'Dashboard Financeiro',
      description:
        'Visualize em tempo real seu faturamento, pagamentos recebidos e pendências em um dashboard completo.',
    },
    {
      icon: '👔',
      title: 'Profissionalização',
      description:
        'Transmita confiança aos clientes com um sistema de cobrança claro, automatizado e profissional.',
    },
  ];

  const targetAudience = [
    'Professores particulares (música, idiomas, reforço escolar)',
    'Personal trainers e instrutores de academia',
    'Consultores e coaches',
    'Terapeutas (psicólogos, fisioterapeutas)',
    'Outros profissionais que recebem pagamentos mensais recorrentes',
  ];

  return (
    <>
      {/* Hero About */}
      <section className="velo-about-hero">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <h2 className="velo-section-title mb-4" data-aos="fade-up">
                Sobre o PIX Recorrente
              </h2>
              <p
                className="velo-section-subtitle mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                O aplicativo mobile completo que revoluciona a gestão de
                cobranças recorrentes via PIX para profissionais autônomos e
                MEIs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Problem Solution */}
      <section className="velo-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-up">
              <h3 className="section-subtitle mb-4">O Problema</h3>
              <p className="text-white mb-4">
                Profissionais autônomos e MEIs ainda dependem de controles
                manuais em planilhas, lembretes individuais por WhatsApp e
                gestão manual de pagamentos. Isso gera:
              </p>
              <ul className="problem-list">
                <li>Perda de tempo com follow-ups manuais</li>
                <li>Inadimplência por esquecimento</li>
                <li>Dificuldade em acompanhar pagamentos</li>
                <li>Perda de profissionalismo</li>
                <li>Falta de controle financeiro</li>
              </ul>
            </Col>
            <Col lg={6} data-aos="fade-up" data-aos-delay="200">
              <h3 className="section-subtitle mb-4">A Solução</h3>
              <p className="text-white mb-4">
                PIX Recorrente centraliza todo o fluxo de cobrança em um único
                aplicativo com automação inteligente:
              </p>
              <ul className="solution-list">
                <li>Automação de cobranças recorrentes</li>
                <li>Notificações automáticas e lembretes</li>
                <li>Dashboard financeiro em tempo real</li>
                <li>Integração nativa com PIX</li>
                <li>Profissionalismo e confiança</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits */}
      <section className="velo-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="velo-section-title" data-aos="fade-up">
                Benefícios Principais
              </h2>
              <p
                className="velo-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Tudo que você precisa para profissionalizar suas cobranças
              </p>
            </Col>
          </Row>

          <Row>
            {benefits.map((benefit, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card
                  className="velo-benefit-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center p-4">
                    <div className="benefit-icon mb-3">{benefit.icon}</div>
                    <h5 className="benefit-title mb-3">{benefit.title}</h5>
                    <p className="benefit-description">{benefit.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Target Audience */}
      <section className="velo-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-up">
              <h3 className="section-subtitle mb-4">Público-Alvo</h3>
              <p className="text-white mb-4">
                Perfeito para profissionais que trabalham com cobrança mensal
                recorrente:
              </p>
              <ul className="audience-list">
                {targetAudience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>
            <Col lg={6} data-aos="fade-up" data-aos-delay="200">
              <div className="audience-stats">
                <div className="stat-box">
                  <div className="stat-number">75%</div>
                  <div className="stat-label">
                    do mercado de trabalho brasileiro é informal
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">15M+</div>
                  <div className="stat-label">MEIs ativos no Brasil</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">R$ 1.2T</div>
                  <div className="stat-label">economia do setor informal</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision */}
      <section className="velo-vision-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <h2 className="vision-title mb-4 text-white">Nossa Missão</h2>
                <p className="vision-subtitle mb-5 text-white">
                  Democratizar a tecnologia de gestão financeira para
                  profissionais autônomos, permitindo que foquem no que fazem de
                  melhor enquanto o PIX Recorrente cuida das finanças.
                </p>
                <div className="vision-quote">
                  <blockquote>
                    "Simplificar a gestão de cobranças para MEIs e profissionais
                    autônomos, reduzindo inadimplência e profissionalizando o
                    setor informal brasileiro."
                  </blockquote>
                  <cite>— Equipe PIX Recorrente</cite>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VeloAbout;
