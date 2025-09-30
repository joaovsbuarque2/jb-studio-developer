import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import fotoCampo from '../assets/images/foto-campo.jpg';

function About() {
  const stacks = [
    'React', 'React Native', 'Expo', 'Vue.js', 'Angular', 
    'Next.js', 'Bootstrap', 'Figma', 'Git', 'JavaScript', 'TypeScript'
  ];

  return (
    <section id="sobre" className="section">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center" data-aos="fade-up">
              Sobre Mim
            </h1>
            <p className="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
              Minha jornada como desenvolvedor e pessoa
            </p>
            
            {/* História Profissional */}
            <Card className="card-custom p-4 mb-5" data-aos="fade-up" data-aos-delay="200">
              <Card.Body>
                <h3 className="h4 mb-4 text-gradient">🚀 Jornada Profissional</h3>
                <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                  Comecei a programar com 18/19 anos, movido pela curiosidade e paixão por tecnologia. 
                  Durante 4-5 anos, tive a oportunidade de atuar em empresas incríveis como 
                  <strong className="text-gradient"> Getty</strong> e <strong className="text-gradient">Klever</strong> (Crypto & NFT Market), onde pude 
                  aprender muito sobre desenvolvimento e trabalhar com tecnologias modernas.
                </p>
                
                <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                  Ao longo dessa jornada, trabalhei com diversas tecnologias: <strong>React</strong>, 
                  <strong> React Native</strong>, <strong>Vue.js</strong>, <strong>Angular</strong> e 
                  <strong> Next.js</strong>. Cada projeto foi uma oportunidade de crescimento e 
                  aprendizado constante.
                </p>
                
                <p className="fs-5" style={{ color: 'var(--text-light)' }}>
                  Depois de alguns anos intensos, decidi dar uma pausa para refletir e me reconectar 
                  com minha paixão original. Agora estou retornando ao desenvolvimento com mais ideias, 
                  mais vontade e uma visão mais clara do que quero construir.
                </p>
              </Card.Body>
            </Card>

            {/* História do Casamento */}
            <Row className="align-items-center mb-5">
              <Col lg={6} data-aos="fade-right" data-aos-delay="300">
                <Card className="card-custom p-4">
                  <Card.Body>
                    <h3 className="h4 mb-4 text-gradient">💕 Minha Maior Inspiração</h3>
                    <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                      Há 3 anos, disse "sim" para a pessoa que mudou completamente 
                      a minha perspectiva sobre sonhos e possibilidades. Minha esposa 
                      não é apenas minha parceira de vida - ela é quem mais acredita 
                      no meu potencial, mesmo quando eu mesmo duvido.
                    </p>
                    
                    <p className="fs-5 mb-4" style={{ color: 'var(--text-light)' }}>
                      Durante toda essa jornada como desenvolvedor, ela sempre foi 
                      minha maior incentivadora. Nos momentos de incerteza, quando 
                      eu pensava em desistir ou mudar de rumo, ela estava lá lembrando-me 
                      do porquê comecei e me motivando a continuar.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={6} className="text-center" data-aos="fade-left" data-aos-delay="400">
                <div 
                  style={{
                    width: '350px',
                    height: '350px',
                    background: 'var(--bg-card)',
                    border: '2px dashed var(--border-light)',
                    borderRadius: '20px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    color: 'var(--text-muted)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Image src={fotoCampo} alt="Foto do Casamento" rounded fluid style={{ maxHeight: '100%', borderRadius: '15px' }} />
                </div>
              </Col>
            </Row>

            {/* Frase destaque */}
            <Card className="card-custom p-5 mb-5" data-aos="zoom-in" data-aos-delay="500">
              <Card.Body className="text-center">
                <h2 className="h3 mb-4">💫</h2>
                <blockquote className="blockquote">
                  <p className="fs-4 fst-italic mb-4 text-gradient">
                    "Meu casamento me fez crescer e acreditar mais em mim mesmo. 
                    Minha esposa é quem mais me motiva a transformar ideias em realidade."
                  </p>
                </blockquote>
                <p style={{ color: 'var(--text-muted)' }}>
                  Esta é a força que move todos os meus projetos e sonhos.
                </p>
              </Card.Body>
            </Card>

            {/* Objetivo */}
            <Card className="card-custom p-4 mb-5" data-aos="fade-up" data-aos-delay="600">
              <Card.Body>
                <h3 className="h4 mb-4 text-gradient">🎯 Meu Objetivo</h3>
                <p className="fs-5" style={{ color: 'var(--text-light)' }}>
                  Meu objetivo é me tornar um desenvolvedor cada vez mais completo, com foco especial 
                  em <strong className="text-gradient">mobile</strong>, <strong className="text-gradient">UI/UX</strong> e <strong className="text-gradient">gamificação</strong>. 
                  Acredito que a tecnologia deve ser divertida, útil e transformadora.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Stacks */}
        <Row>
          <Col lg={10} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="700">
              Minhas Stacks
            </h2>
            <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="800">
              Tecnologias que domino e utilizo nos meus projetos
            </p>
            
            <div className="d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-delay="900">
              {stacks.map((stack, index) => (
                <span 
                  key={index} 
                  className="stack-item"
                  data-aos="zoom-in"
                  data-aos-delay={1000 + (index * 100)}
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