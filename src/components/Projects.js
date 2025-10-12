import { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import elevaHome from '../assets/images/eleva-home-atividade.jpeg';

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll suave para seção específica
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lista de projetos
  const projects = [
    {
      id: 'Eleva',
      title: 'Eleva',
      subtitle: 'Evolução para o Centro da Família',
      description:
        'App revolucionário que transforma o gerenciamento familiar em uma aventura épica. Mais que um app de tarefas - é o centro de organização e interação da família.',
      status: 'Em desenvolvimento ativo',
      image: elevaHome,
      tech: [
        'React Native',
        'Expo',
        'TypeScript',
        'Zustand',
        'React Query',
        'Reanimated',
      ],
      features: [
        'Metas Familiares e Recompensas Coletivas',
        'Tarefas Colaborativas Multi-usuário',
        'Mural da Família (Feed de Atividades)',
        'Calendário de Eventos Compartilhado',
        'Loja de Recompensas Personalizadas',
        'Sistema de XP e Níveis Individual/Familiar',
        'Torneios Familiares Dinâmicos',
        'Tutorial Interativo de Onboarding',
        'Modo Offline Inteligente',
        'Notificações Contextuais',
      ],
      newFeatures: [
        {
          title: 'Metas Familiares',
          description:
            'Barra de XP da Família preenchida conforme membros completam tarefas. Recompensas coletivas como "Noite de Pizza" ou "Passeio no Parque".',
        },
        {
          title: 'Tarefas Colaborativas',
          description:
            'Uma tarefa dividida em sub-tarefas para múltiplos membros. Ideal para "Limpar a Garagem" ou "Preparar Jantar de Domingo".',
        },
        {
          title: 'Mural da Família',
          description:
            'Feed central com conquistas, tarefas concluídas e reações (👍, 🎉, ❤️) para celebrar vitórias juntos.',
        },
        {
          title: 'Calendário Integrado',
          description:
            'Eventos importantes sincronizados: consultas médicas, provas escolares, viagens, aniversários com notificações inteligentes.',
        },
      ],
      tournamentModes: [
        {
          name: 'Sprint de Tarefas',
          description:
            'Competição de fim de semana - quem completa mais tarefas ganha!',
        },
        {
          name: 'Caça ao Tesouro',
          description:
            'Sequência de tarefas que revela pistas e prêmios no final.',
        },
        {
          name: 'Batalha contra o Tempo',
          description:
            'Família colabora para completar X tarefas antes do tempo acabar.',
        },
      ],
      libraries: [
        '@tanstack/react-query - Gerenciamento de estado do servidor',
        'zustand - Estado global leve e simples',
        'react-native-reanimated - Animações 60 FPS nativas',
        '@realm/react - Banco offline com sincronização',
      ],
      problem:
        'Apps de produtividade tradicionais são individuais, chatos e não criam conexão familiar. Famílias precisam de múltiplos apps para organização.',
      solution:
        'Familia Aventura é o centro único de organização familiar com gamificação social, transformando tarefas domésticas em aventuras colaborativas divertidas.',
      roadmap: [
        {
          phase: 'Q1 2024 - MVP Família',
          items: [
            'Sistema de tarefas colaborativas',
            'Metas familiares básicas',
            'Mural de atividades',
            'Personagens e XP individual',
          ],
        },
        {
          phase: 'Q2 2024 - Features Sociais',
          items: [
            'Torneios familiares customizados',
            'Calendário de eventos integrado',
            'Loja de recompensas personalizadas',
            'Sistema de notificações inteligentes',
          ],
        },
        {
          phase: 'Q3 2024 - Inteligência',
          items: [
            'Sugestões de tarefas por IA',
            'Analytics familiares avançados',
            'Integração com calendários externos',
            'Modo offline completo',
          ],
        },
        {
          phase: 'Q4 2024 - Expansão',
          items: [
            'Comunidades de famílias',
            'Desafios inter-famílias',
            'Marketplace de recompensas',
            'Acessibilidade completa',
          ],
        },
      ],
    },
  ];

  // Abre modal do projeto selecionado
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Etapas do processo
  const processSteps = [
    {
      icon: '🎯',
      title: 'Identificação',
      description:
        'Todo projeto nasce de um problema real que precisa ser resolvido.',
      color: 'var(--primary-blue)',
    },
    {
      icon: '🎨',
      title: 'Design',
      description:
        'Criação de interfaces intuitivas focadas na experiência do usuário.',
      color: 'var(--primary-purple)',
    },
    {
      icon: '🚀',
      title: 'Desenvolvimento',
      description:
        'Implementação usando as melhores práticas e tecnologias modernas.',
      color: 'var(--accent-blue)',
    },
    {
      icon: '📈',
      title: 'Evolução',
      description:
        'Melhoria contínua baseada no feedback e novas necessidades.',
      color: 'var(--accent-purple)',
    },
  ];

  return (
    <>
      <section id="projetos" className="section">
        <Container>
          {/* Cabeçalho */}
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <h1 className="section-title" data-aos="fade-up">
                Meus Projetos
              </h1>
              <p
                className="section-subtitle"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Ideias transformadas em soluções digitais inovadoras
              </p>
            </Col>
          </Row>

          {/* Projetos */}
          <Row className="mb-5">
            {projects.map((project, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card
                  className="card-custom h-100"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                    style={{
                      height: '250px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '24px',
                      borderTopRightRadius: '24px',
                    }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <h4 className="h5 text-gradient mb-2">{project.title}</h4>
                    <p className="small text-muted mb-2">{project.subtitle}</p>
                    <span
                      className="badge"
                      style={{
                        background: 'var(--gradient-accent)',
                        color: '#fff',
                        borderRadius: '20px',
                        padding: '6px 14px',
                      }}
                    >
                      {project.status}
                    </span>
                    <p
                      className="mt-3 flex-grow-1"
                      style={{ color: 'var(--text-light)' }}
                    >
                      {project.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge"
                          style={{
                            background: 'var(--bg-section)',
                            color: 'var(--text-light)',
                            border: '1px solid var(--border-light)',
                            padding: '6px 12px',
                            borderRadius: '15px',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      onClick={() => openProjectModal(project)}
                      className="btn-custom mt-auto"
                    >
                      🔍 Ver detalhes
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {/* Card placeholder próximo projeto */}
            <Col lg={6} className="mb-4">
              <Card
                className="card-custom h-100 border-dashed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                  <div
                    className="floating mb-3"
                    style={{
                      width: '90px',
                      height: '90px',
                      background: 'var(--gradient-accent)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                    }}
                  >
                    💡
                  </div>
                  <h5 className="text-gradient">Próximo Projeto</h5>
                  <p className="text-white">
                    Novas ideias estão sempre surgindo. Em breve, mais projetos
                    incríveis!
                  </p>
                  <Button
                    onClick={() => scrollToSection('contato')}
                    variant="outline-primary"
                    style={{ borderRadius: '25px' }}
                  >
                    🚀 Sugira uma ideia
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Processo de Desenvolvimento */}
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="section-title text-center mb-5" data-aos="fade-up">
                Processo de Desenvolvimento
              </h2>
              <p
                className="text-center text-white mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Como transformo ideias em produtos digitais de impacto
              </p>
              <Row>
                {processSteps.map((step, idx) => (
                  <Col
                    lg={3}
                    md={6}
                    key={idx}
                    className="mb-4 text-center"
                    data-aos="fade-up"
                    data-aos-delay={200 + idx * 100}
                  >
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        background: step.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.2rem',
                        color: '#fff',
                        margin: '0 auto 1.5rem',
                        boxShadow: `0 10px 30px ${step.color}40`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <h5 className="text-gradient">{step.title}</h5>
                    <p className="text-muted">{step.description}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal Detalhes Projeto */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header
          closeButton
          style={{
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <Modal.Title className="text-gradient">
            {selectedProject?.title} - Detalhes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: 'var(--bg-card)',
            color: 'var(--text-light)',
            maxHeight: '70vh',
            overflowY: 'auto',
          }}
        >
          {selectedProject && (
            <>
              <h5 className="text-gradient mb-2">🎯 Problema</h5>
              <p>{selectedProject.problem}</p>

              <h5 className="text-gradient mb-2">💡 Solução</h5>
              <p>{selectedProject.solution}</p>

              {/* Novas funcionalidades */}
              {selectedProject.newFeatures?.map((f, i) => (
                <Card key={i} className="card-custom mb-3 p-3">
                  <h6 className="text-gradient-alt">{f.title}</h6>
                  <p className="small text-white">{f.description}</p>
                </Card>
              ))}

              {/* Roadmap */}
              <h5 className="text-gradient mt-4 mb-2">🗺️ Roadmap</h5>
              {selectedProject.roadmap?.map((phase, i) => (
                <Card key={i} className="card-custom mb-3 p-3">
                  <h6 className="text-gradient-alt">{phase.phase}</h6>
                  <ul className="mb-0 text-white">
                    {phase.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </>
          )}
        </Modal.Body>
        <Modal.Footer
          style={{
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-light)',
          }}
        >
          <Button
            onClick={() => scrollToSection('contato')}
            className="btn-custom"
          >
            📩 Interessado? Fale comigo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Projects;
