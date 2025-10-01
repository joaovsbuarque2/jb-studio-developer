import { Card, Col, Container, Row } from 'react-bootstrap';

// Importar imagem para a seção sobre
import elevaHomeImg from '../../assets/images/eleva-home-atividade.jpeg';

function ElevaAbout() {
  const problems = [
    {
      icon: '😴',
      title: 'Apps Monótonos',
      description: 'Interfaces cinzas e sem vida que desmotivam após poucos dias de uso.'
    },
    {
      icon: '📋',
      title: 'Listas Intermináveis',
      description: 'To-do lists que só crescem, gerando ansiedade ao invés de produtividade.'
    },
    {
      icon: '🔥',
      title: 'Falta de Motivação',
      description: 'Sem recompensas ou reconhecimento pelo progresso alcançado.'
    },
    {
      icon: '👤',
      title: 'Experiência Solitária',
      description: 'Jornada individual sem apoio da comunidade ou elementos sociais.'
    }
  ];

  const solutions = [
    {
      icon: '🎮',
      title: 'Gamificação Envolvente',
      description: 'Cada tarefa é uma missão. Cada dia produtivo é uma vitória épica.'
    },
    {
      icon: '🏆',
      title: 'Sistema de Recompensas',
      description: 'XP, níveis, conquistas e badges que celebram cada progresso.'
    },
    {
      icon: '👥',
      title: 'Comunidade Ativa',
      description: 'Torneios, rankings e colaboração que mantém você motivado.'
    },
    {
      icon: '📈',
      title: 'Progresso Visual',
      description: 'Gráficos e relatórios que mostram sua evolução de forma clara.'
    }
  ];

  const team = [
    {
      name: 'João Vitor da Silva Buarque',
      role: 'CEO & Founder',
      description: 'Desenvolvedor apaixonado por gamificação e produtividade.',
      avatar: '👨‍💻'
    },
    {
      name: 'Equipe JS Studio',
      role: 'Development Team',
      description: 'Time dedicado a criar experiências digitais incríveis.',
      avatar: '👥'
    }
  ];

  return (
    <>
      <section className="eleva-about-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="eleva-page-title" data-aos="fade-up">
                A História por Trás do Eleva
              </h1>
              <p className="eleva-page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Como surgiu a ideia de revolucionar a forma como as pessoas 
                encaram suas tarefas diárias.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eleva-section">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <div data-aos="fade-right">
                <h2 className="eleva-section-title">Nossa Missão</h2>
                <p className="eleva-section-text">
                  Transformar a produtividade de uma obrigação chata em uma 
                  experiência divertida e social. Acreditamos que quando você 
                  se diverte fazendo algo, naturalmente se torna melhor nisso.
                </p>
                <p className="eleva-section-text">
                  O Eleva nasceu da frustração com apps de produtividade tradicionais 
                  que prometem muito mas entregam experiências monótonas. Nossa missão 
                  é simple: fazer você amar ser produtivo.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mission-visual" data-aos="fade-left">
                <div className="mission-image-container">
                  <img 
                    src={elevaHomeImg} 
                    alt="Interface do Eleva mostrando gamificação"
                    className="mission-image"
                    loading="lazy"
                  />
                  <div className="mission-overlay">
                    <h3>🎯 Nossa Visão</h3>
                    <p>
                      Ser o app de produtividade mais amado do mundo, 
                      criando uma comunidade global de pessoas que 
                      evoluem juntas através da gamificação.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eleva-section-alt">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="eleva-section-title" data-aos="fade-up">
                O Problema que Identificamos
              </h2>
              <p className="eleva-section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Por que apps de produtividade tradicionais falham?
              </p>
            </Col>
          </Row>
          
          <Row>
            {problems.map((problem, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card 
                  className="problem-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center p-4">
                    <div className="problem-icon mb-3">{problem.icon}</div>
                    <h5 className="problem-title mb-3">{problem.title}</h5>
                    <p className="problem-description">{problem.description}</p>
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
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="eleva-section-title" data-aos="fade-up">
                Nossa Solução Inovadora
              </h2>
              <p className="eleva-section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Como o Eleva resolve cada um desses problemas
              </p>
            </Col>
          </Row>
          
          <Row>
            {solutions.map((solution, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card 
                  className="solution-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center p-4">
                    <div className="solution-icon mb-3">{solution.icon}</div>
                    <h5 className="solution-title mb-3">{solution.title}</h5>
                    <p className="solution-description">{solution.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="eleva-section-alt">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="eleva-section-title" data-aos="fade-up">
                Quem está por trás do Eleva
              </h2>
              <p className="eleva-section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Conheça a equipe apaixonada que está construindo o futuro da produtividade
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            {team.map((member, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card 
                  className="team-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center p-4">
                    <div className="team-avatar mb-3">{member.avatar}</div>
                    <h5 className="team-name mb-2">{member.name}</h5>
                    <p className="team-role mb-3">{member.role}</p>
                    <p className="team-description">{member.description}</p>
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
              <div className="about-cta-box" data-aos="fade-up">
                <h3 className="cta-title mb-4">
                  Quer Fazer Parte dessa Jornada?
                </h3>
                <p className="cta-description mb-4">
                  O Eleva está em constante evolução e sua opinião é fundamental 
                  para criarmos a melhor experiência possível. Junte-se à nossa 
                  comunidade e ajude a moldar o futuro da produtividade gamificada.
                </p>
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">Beta Testers</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Tarefas Completadas</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Satisfação</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ElevaAbout;