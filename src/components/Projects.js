import { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 'Eleva',
      title: 'Eleva',
      subtitle: 'Evolução para o Centro da Família',
      description: 'App revolucionário que transforma o gerenciamento familiar em uma aventura épica. Mais que um app de tarefas - é o centro de organização e interação da família.',
      status: 'Em desenvolvimento ativo',
      tech: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'React Query', 'Reanimated'],
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
        'Notificações Contextuais'
      ],
      newFeatures: [
        {
          title: 'Metas Familiares',
          description: 'Barra de XP da Família preenchida conforme membros completam tarefas. Recompensas coletivas como "Noite de Pizza" ou "Passeio no Parque".'
        },
        {
          title: 'Tarefas Colaborativas',
          description: 'Uma tarefa dividida em sub-tarefas para múltiplos membros. Ideal para "Limpar a Garagem" ou "Preparar Jantar de Domingo".'
        },
        {
          title: 'Mural da Família',
          description: 'Feed central com conquistas, tarefas concluídas e reações (👍, 🎉, ❤️) para celebrar vitórias juntos.'
        },
        {
          title: 'Calendário Integrado',
          description: 'Eventos importantes sincronizados: consultas médicas, provas escolares, viagens, aniversários com notificações inteligentes.'
        }
      ],
      tournamentModes: [
        {
          name: 'Sprint de Tarefas',
          description: 'Competição de fim de semana - quem completa mais tarefas ganha!'
        },
        {
          name: 'Caça ao Tesouro',
          description: 'Sequência de tarefas que revela pistas e prêmios no final.'
        },
        {
          name: 'Batalha contra o Tempo',
          description: 'Família colabora para completar X tarefas antes do tempo acabar.'
        }
      ],
      libraries: [
        '@tanstack/react-query - Gerenciamento de estado do servidor',
        'zustand - Estado global leve e simples',
        'react-native-reanimated - Animações 60 FPS nativas',
        '@realm/react - Banco offline com sincronização'
      ],
      problem: 'Apps de produtividade tradicionais são individuais, chatos e não criam conexão familiar. Famílias precisam de múltiplos apps para organização.',
      solution: 'Familia Aventura é o centro único de organização familiar com gamificação social, transformando tarefas domésticas em aventuras colaborativas divertidas.',
      roadmap: [
        { 
          phase: 'Q1 2024 - MVP Família', 
          items: [
            'Sistema de tarefas colaborativas', 
            'Metas familiares básicas', 
            'Mural de atividades',
            'Personagens e XP individual'
          ] 
        },
        { 
          phase: 'Q2 2024 - Features Sociais', 
          items: [
            'Torneios familiares customizados', 
            'Calendário de eventos integrado', 
            'Loja de recompensas personalizadas',
            'Sistema de notificações inteligentes'
          ] 
        },
        { 
          phase: 'Q3 2024 - Inteligência', 
          items: [
            'Sugestões de tarefas por IA', 
            'Analytics familiares avançados', 
            'Integração com calendários externos',
            'Modo offline completo'
          ] 
        },
        { 
          phase: 'Q4 2024 - Expansão', 
          items: [
            'Comunidades de famílias', 
            'Desafios inter-famílias', 
            'Marketplace de recompensas',
            'Acessibilidade completa'
          ] 
        }
      ]
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const processSteps = [
    {
      icon: '🎯',
      title: 'Identificação',
      description: 'Todo projeto nasce de um problema real que precisa ser resolvido.',
      color: 'var(--primary-blue)'
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Criação de interfaces intuitivas focadas na experiência do usuário.',
      color: 'var(--primary-purple)'
    },
    {
      icon: '🚀',
      title: 'Desenvolvimento',
      description: 'Implementação usando as melhores práticas e tecnologias modernas.',
      color: 'var(--accent-blue)'
    },
    {
      icon: '📈',
      title: 'Evolução',
      description: 'Melhoria contínua baseada no feedback e novas necessidades.',
      color: 'var(--accent-purple)'
    }
  ];

  return (
    <>
      <section id="projetos" className="section">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h1 className="section-title text-center" data-aos="fade-up">
                Meus Projetos
              </h1>
              <p className="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
                Ideias transformadas em soluções digitais inovadoras
              </p>
            </Col>
          </Row>

          {/* Projetos Atuais */}
          <Row className="mb-5">
            {projects.map((project, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card 
                  className="card-custom h-100"
                  data-aos="fade-up"
                  data-aos-delay={200 + (index * 100)}
                >
                  <div 
                    style={{
                      height: '250px',
                      background: 'var(--gradient-rainbow)',
                      borderRadius: '24px 24px 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      color: 'white',
                      position: 'relative'
                    }}
                  >
                    🎮
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <h4 className="h5 mb-2 text-gradient">{project.title}</h4>
                      <p style={{ color: 'var(--text-muted)' }} className="small mb-2">
                        {project.subtitle}
                      </p>
                      <span 
                        className="badge"
                        style={{
                          background: 'var(--gradient-accent)',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '20px'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="mb-3 flex-grow-1" style={{ color: 'var(--text-light)' }}>
                      {project.description}
                    </p>
                    
                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="badge"
                            style={{
                              background: 'var(--bg-section)',
                              color: 'var(--text-light)',
                              border: '1px solid var(--border-light)',
                              padding: '6px 12px',
                              borderRadius: '15px'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => openProjectModal(project)}
                      className="btn-custom mt-auto"
                    >
                      Ver detalhes completos
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
            {/* Próximo Projeto */}
            <Col lg={6} className="mb-4">
              <Card 
                className="card-custom h-100 border-dashed"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="mb-3">
                    <div 
                      className="floating"
                      style={{
                        width: '100px',
                        height: '100px',
                        background: 'var(--gradient-accent)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem'
                      }}
                    >
                      💡
                    </div>
                  </div>
                  <h5 className="text-gradient">Próximo Projeto</h5>
                  <p style={{ color: 'var(--text-muted)' }}>
                    Novas ideias estão sempre surgindo. 
                    Em breve, mais projetos incríveis que vão transformar a forma 
                    como interagimos com a tecnologia!
                  </p>
                  <Button 
                    onClick={() => scrollToSection('contato')}
                    variant="outline-primary"
                    style={{ borderRadius: '25px' }}
                  >
                    Sugira uma ideia
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Processo de Desenvolvimento */}
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="500">
                Processo de Desenvolvimento
              </h2>
              <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="600">
                Como transformo ideias em produtos digitais de impacto
              </p>
              
              <Row>
                {processSteps.map((step, index) => (
                  <Col lg={3} md={6} key={index} className="mb-4">
                    <div 
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-delay={700 + (index * 100)}
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
                          fontSize: '2.5rem',
                          color: 'white',
                          margin: '0 auto 1.5rem',
                          boxShadow: `0 10px 30px ${step.color}40`
                        }}
                      >
                        {step.icon}
                      </div>
                      <h5 className="mb-3 text-gradient">{step.title}</h5>
                      <p style={{ color: 'var(--text-muted)' }}>
                        {step.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal de Projeto */}
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
            border: 'none',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          <Modal.Title className="text-gradient">
            {selectedProject?.title} - Detalhes Completos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body 
          style={{ 
            background: 'var(--bg-card)', 
            color: 'var(--text-light)',
            maxHeight: '70vh',
            overflowY: 'auto'
          }}
        >
          {selectedProject && (
            <>
              <div className="mb-4">
                <h5 className="text-gradient">🎯 Problema que Resolve</h5>
                <p className="lead-text">{selectedProject.problem}</p>
              </div>
              
              <div className="mb-4">
                <h5 className="text-gradient">💡 Nossa Solução</h5>
                <p className="lead-text">{selectedProject.solution}</p>
              </div>
              
              {selectedProject.newFeatures && (
                <div className="mb-4">
                  <h5 className="text-gradient">🚀 Novas Funcionalidades Principais</h5>
                  {selectedProject.newFeatures.map((feature, index) => (
                    <Card key={index} className="card-custom mb-3 p-3">
                      <Card.Body>
                        <h6 className="text-gradient-alt">{feature.title}</h6>
                        <p className="mb-0 small-text">{feature.description}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
              
              {selectedProject.tournamentModes && (
                <div className="mb-4">
                  <h5 className="text-gradient">🏆 Modos de Torneios Familiares</h5>
                  <Row>
                    {selectedProject.tournamentModes.map((mode, index) => (
                      <Col md={4} key={index} className="mb-2">
                        <Card className="card-custom p-2 h-100">
                          <Card.Body className="text-center">
                            <h6 className="text-gradient-alt small">{mode.name}</h6>
                            <p className="mb-0 small-text">{mode.description}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
              
              <div className="mb-4">
                <h5 className="text-gradient">⚡ Todas as Funcionalidades</h5>
                <Row>
                  {selectedProject.features?.map((feature, index) => (
                    <Col md={6} key={index} className="mb-2">
                      <div className="d-flex align-items-center">
                        <span className="text-gradient me-2">•</span>
                        <span className="small-text">{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              
              {selectedProject.libraries && (
                <div className="mb-4">
                  <h5 className="text-gradient">🛠️ Stack Tecnológica</h5>
                  <ul className="list-unstyled">
                    {selectedProject.libraries.map((lib, index) => (
                      <li key={index} className="mb-2">
                        <span className="text-gradient-alt">▸</span> 
                        <span className="small-text ms-2">{lib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mb-4">
                <h5 className="text-gradient">🗺️ Roadmap Detalhado</h5>
                {selectedProject.roadmap?.map((phase, index) => (
                  <Card key={index} className="card-custom mb-3 p-3">
                    <Card.Body>
                      <h6 className="text-gradient-alt">{phase.phase}</h6>
                      <Row>
                        {phase.items.map((item, itemIndex) => (
                          <Col md={6} key={itemIndex} className="mb-1">
                            <div className="d-flex align-items-start">
                              <span className="text-gradient me-2">→</span>
                              <span className="small-text">{item}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer 
          style={{ 
            background: 'var(--bg-card)', 
            border: 'none',
            borderTop: '1px solid var(--border-light)'
          }}
        >
          <Button 
            onClick={() => scrollToSection('contato')}
            className="btn-custom"
          >
            Interessado? Entre em contato
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Projects;