import { Card, Col, Container, Row } from 'react-bootstrap';

function About() {
  const stacks = [
    'React',
    'React Native',
    'Expo',
    'Vue.js',
    'Angular',
    'Next.js',
    'Bootstrap',
    'Figma',
    'Git',
    'JavaScript',
  ];

  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1 className="section-title text-center">Sobre Mim</h1>
              <div className="section-subtitle text-center">
                Minha jornada como desenvolvedor
              </div>

              <Card className="card-custom p-4 mb-4">
                <Card.Body>
                  <p className="fs-5 mb-4">
                    Comecei a programar com 18/19 anos, movido pela curiosidade
                    e paixão por tecnologia. Durante 4-5 anos, tive a
                    oportunidade de atuar em empresas incríveis como
                    <strong> Getty</strong> e <strong>Klever</strong> (Crypto &
                    NFT Market), onde pude aprender muito sobre desenvolvimento
                    e trabalhar com tecnologias modernas.
                  </p>

                  <p className="fs-5 mb-4">
                    Ao longo dessa jornada, trabalhei com diversas tecnologias:{' '}
                    <strong>React</strong>,<strong> React Native</strong>,{' '}
                    <strong>Vue.js</strong>, <strong>Angular</strong> e
                    <strong> Next.js</strong>. Cada projeto foi uma oportunidade
                    de crescimento e aprendizado constante.
                  </p>

                  <p className="fs-5 mb-4">
                    Depois de alguns anos intensos, decidi dar uma pausa para
                    refletir e me reconectar com minha paixão original. Agora
                    estou retornando ao desenvolvimento com mais ideias, mais
                    vontade e uma visão mais clara do que quero construir.
                  </p>

                  <p className="fs-5">
                    Meu objetivo é me tornar um desenvolvedor cada vez mais
                    completo, com foco especial em <strong>mobile</strong>,{' '}
                    <strong>UI/UX</strong> e <strong>gamificação</strong>.
                    Acredito que a tecnologia deve ser divertida, útil e
                    transformadora.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-alt">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="section-title text-center">Minhas Stacks</h2>
              <p className="text-center text-muted mb-5">
                Tecnologias que domino e utilizo nos meus projetos
              </p>

              <div className="d-flex flex-wrap justify-content-center">
                {stacks.map((stack, index) => (
                  <span key={index} className="stack-item">
                    {stack}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
