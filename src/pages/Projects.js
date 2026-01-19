import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 'velo',
      title: 'Velo',
      subtitle: 'PIX Recorrente',
      description:
        'Plataforma de pagamentos recorrentes via PIX, facilitando transações automáticas e seguras.',
      status: 'Em desenvolvimento',
      tech: ['React', 'Node.js', 'PIX'],
      link: '/velo',
    },
    {
      id: 'eleva',
      title: 'Eleva',
      subtitle: 'Produtividade que evolui com você',
      description:
        'App mobile gamificado em React Native que transforma tarefas em missões épicas com XP, torneios e desafios sociais.',
      status: 'Em desenvolvimento',
      tech: ['React Native', 'Expo', 'Gamificação'],
      link: '/projetos/eleva',
    },
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
          <Row className="justify-content-center">
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4 text-center">
                <Button
                  as={Link}
                  to={project.link}
                  className="btn-custom btn-lg"
                  style={{ minWidth: '200px' }}
                >
                  {project.title}
                </Button>
              </Col>
            ))}
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
                        margin: '0 auto 1rem',
                      }}
                    >
                      🎯
                    </div>
                    <h5>Identificação</h5>
                    <p className="text-muted">
                      Todo projeto nasce de um problema real que precisa ser
                      resolvido.
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
                        margin: '0 auto 1rem',
                      }}
                    >
                      🚀
                    </div>
                    <h5>Desenvolvimento</h5>
                    <p className="text-muted">
                      Criação com foco na experiência do usuário e nas melhores
                      práticas.
                    </p>
                  </div>
                </Col>

                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#28a745',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'white',
                        margin: '0 auto 1rem',
                      }}
                    >
                      📈
                    </div>
                    <h5>Evolução</h5>
                    <p className="text-muted">
                      Melhoria contínua baseada no feedback e novas
                      necessidades.
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
