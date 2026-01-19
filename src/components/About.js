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
    'TypeScript',
  ];

  return (
    <section id="sobre" className="section">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            {/* Título */}
            <h1 className="section-title text-center" data-aos="fade-up">
              Sobre Nós
            </h1>
            <p
              className="section-subtitle text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Nossa trajetória, propósito e compromisso
            </p>

            {/* Jornada Profissional */}
            <Card
              className="card-custom p-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Card.Body>
                <h3 className="h4 mb-4 text-gradient">🚀 Quem Somos</h3>
                <p className="fs-5 mb-4 about-text-high-contrast">
                  Somos um estúdio de desenvolvimento especializado em soluções
                  digitais inovadoras. Nossa missão é transformar ideias em
                  produtos funcionais e experiências que conectam pessoas e
                  negócios ao futuro da tecnologia.
                </p>

                <p className="fs-5 mb-4 about-text-high-contrast">
                  Ao longo dos últimos anos, acumulamos experiência em projetos
                  de diferentes portes e segmentos, colaborando com empresas
                  como <strong className="text-gradient">Getty</strong> e{' '}
                  <strong className="text-gradient">Klever</strong>. Nossos
                  trabalhos envolvem desde aplicações corporativas até soluções
                  voltadas ao mercado de cripto e inovação digital.
                </p>

                <p className="fs-5 about-text-high-contrast">
                  Trabalhamos com tecnologias modernas como{' '}
                  <strong>React</strong>, <strong>React Native</strong>,{' '}
                  <strong>Next.js</strong> e <strong>Vue.js</strong>, sempre com
                  foco em escalabilidade, design centrado no usuário e
                  excelência técnica.
                </p>
              </Card.Body>
            </Card>

            {/* Valores e Inspiração */}
            <Card
              className="card-custom p-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Card.Body>
                <h3 className="h4 mb-4 text-gradient">💡 Nossos Valores</h3>
                <p className="fs-5 mb-4 about-text-high-contrast">
                  Acreditamos que tecnologia é mais do que código. É sobre{' '}
                  <strong>propósito</strong>, <strong>pessoas</strong> e{' '}
                  <strong>transformação</strong>.
                </p>

                <p className="fs-5 mb-4 about-text-high-contrast">
                  Por isso, atuamos com ética, criatividade e foco em resultados
                  reais, sempre buscando agregar valor e construir parcerias
                  sólidas e de confiança.
                </p>
              </Card.Body>
            </Card>

            {/* Objetivo */}
            <Card
              className="card-custom p-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Card.Body>
                <h3 className="h4 mb-4 text-gradient">🎯 Nossa Missão</h3>
                <p className="fs-5 about-text-high-contrast">
                  Desenvolver soluções digitais que unem design, performance e
                  inovação, entregando resultados que impulsionam negócios e
                  encantam usuários.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Stacks */}
        <Row>
          <Col lg={10} className="mx-auto text-center">
            <h2
              className="section-title"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Nossas Stacks
            </h2>
            <p
              className="about-subtitle-contrast mb-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Tecnologias que utilizamos para entregar projetos robustos e
              escaláveis
            </p>

            <div
              className="d-flex flex-wrap justify-content-center"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              {stacks.map((stack, index) => (
                <span
                  key={index}
                  className="stack-item"
                  data-aos="zoom-in"
                  data-aos-delay={1000 + index * 100}
                >
                  {stack}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
