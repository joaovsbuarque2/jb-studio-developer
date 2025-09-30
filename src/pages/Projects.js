import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 'eleva',
      title: 'Eleva',
      subtitle: 'Produtividade que evolui com você',
      description: 'App mobile gamificado em React Native que transforma tarefas em missões épicas com XP, torneios e desafios sociais.',
      status: 'Em desenvolvimento',
      tech: ['React Native', 'Expo', 'Gamificação'],
      link: '/projetos/eleva'
    }
  ];

  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="section-title">Meus Projetos</h1>
              <p className="section-subtitle">
                Ideias transformadas em soluções reais
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-alt section">
        <Container>
          <Row>
            {projects.map((project, index) => (
              <Col lg={6} xl={4} key={index} className="mb-4">
                <Card className="card-custom h-100">
                  <div 
                    style={{
                      height: '200px',
                      backgroundColor: '#f8f9fa',
                      border: '2px dashed #dee2e6',
                      borderRadius: '15px 15px 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: '#6c757d'
                    }}
                  >
                    Imagem do {project.title}
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <h4 className="h5 mb-2">{project.title}</h4>
                      <p className="text-muted small mb-2">{project.subtitle}</p>
                      <span 
                        className="badge"
                        style={{
                          backgroundColor: 'var(--primary-blue)',
                          color: 'white'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="mb-3 flex-grow-1">
                      {project.description}
                    </p>
                    
                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="badge bg-light text-dark border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      as={Link} 
                      to={project.link}
                      className="btn-custom mt-auto"
                    >
                      Ver mais
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
            <Col lg={6} xl={4} className="mb-4">
              <Card className="card-custom h-100 border-dashed">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="mb-3">
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--bg-light)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'var(--text-light)'
                      }}
                    >
                      💡
                    </div>
                  </div>
                  <h5>Próximo Projeto</h5>
                  <p className="text-muted">
                    Novas ideias estão sempre surgindo. 
                    Em breve, mais projetos incríveis!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Processo de Desenvolvimento</h2>
              
              <Row className="mt-5">
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--primary-blue)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'white',
                        margin: '0 auto 1rem'
                      }}
                    >
                      🎯
                    </div>
                    <h5>Identificação</h5>
                    <p className="text-muted">
                      Todo projeto nasce de um problema real que precisa ser resolvido.
                    </p>
                  </div>
                </Col>
                
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--primary-purple)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'white',
                        margin: '0 auto 1rem'
                      }}
                    >
                      🚀
                    </div>
                    <h5>Desenvolvimento</h5>
                    <p className="text-muted">
                      Criação com foco na experiência do usuário e nas melhores práticas.
                    </p>
                  </div>
                </Col>
                
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--text-dark)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'white',
                        margin: '0 auto 1rem'
                      }}
                    >
                      📈
                    </div>
                    <h5>Evolução</h5>
                    <p className="text-muted">
                      Melhoria contínua baseada no feedback e novas necessidades.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;