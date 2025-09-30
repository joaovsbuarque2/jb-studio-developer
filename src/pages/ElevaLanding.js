import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ElevaLanding() {
  const features = [
    {
      icon: '🎮',
      title: 'Gamificação Inteligente',
      description: 'Transforme suas tarefas em missões épicas. Ganhe XP, suba de nível e desbloqueie conquistas.'
    },
    {
      icon: '🏆',
      title: 'Torneios e Desafios',
      description: 'Compete com amigos em desafios de produtividade e participe de torneios semanais.'
    },
    {
      icon: '📊',
      title: 'Analytics Detalhado',
      description: 'Acompanhe seu progresso com relatórios visuais e insights sobre sua produtividade.'
    },
    {
      icon: '👥',
      title: 'Social e Colaborativo',
      description: 'Conecte-se com outros usuários, forme equipes e alcance objetivos juntos.'
    }
  ];

  const roadmapItems = [
    {
      phase: 'Fase 1',
      title: 'Core MVP',
      status: 'Em desenvolvimento',
      items: ['Sistema de tarefas básico', 'Gamificação inicial', 'Sistema de XP e níveis']
    },
    {
      phase: 'Fase 2',
      title: 'Social Features',
      status: 'Planejado',
      items: ['Sistema de amigos', 'Torneios básicos', 'Chat e mensagens']
    },
    {
      phase: 'Fase 3',
      title: 'Advanced Analytics',
      status: 'Futuro',
      items: ['Relatórios avançados', 'IA para sugestões', 'Integração com outras apps']
    }
  ];

  return (
    <>
      <section className="hero-banner">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="hero-content">
                <h1>Eleva</h1>
                <p>Produtividade que evolui com você</p>
                <p className="fs-5 mb-4">
                  O app mobile gamificado que transforma suas tarefas diárias 
                  em missões épicas. Ganhe XP, participe de torneios e transforme 
                  sua produtividade em uma aventura social.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button className="btn-custom" size="lg">
                    🚀 Em breve na App Store
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    as={Link}
                    to="/projetos"
                  >
                    ← Voltar aos projetos
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div 
                style={{
                  width: '250px',
                  height: '450px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '25px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem'
                }}
              >
                Mockup do App
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">O Problema que Resolvemos</h2>
              <p className="section-subtitle">
                Aplicativos de produtividade tradicionais são chatos e desmotivantes
              </p>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col lg={6} className="mb-4">
              <Card className="card-custom p-4 h-100">
                <Card.Body>
                  <h4 className="text-danger mb-3">😴 Problemas Atuais</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">❌ Interfaces monótonas e repetitivas</li>
                    <li className="mb-2">❌ Falta de motivação para continuar</li>
                    <li className="mb-2">❌ Nenhum elemento social ou competitivo</li>
                    <li className="mb-2">❌ Progresso difícil de visualizar</li>
                    <li className="mb-2">❌ Abandono após poucas semanas</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6} className="mb-4">
              <Card className="card-custom p-4 h-100">
                <Card.Body>
                  <h4 className="text-success mb-3">🎯 Nossa Solução</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">✅ Gamificação envolvente e divertida</li>
                    <li className="mb-2">✅ Sistema de recompensas e conquistas</li>
                    <li className="mb-2">✅ Competições sociais motivadoras</li>
                    <li className="mb-2">✅ Progresso visual e satisfatório</li>
                    <li className="mb-2">✅ Comunidade engajada e apoio mútuo</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-alt section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="section-title">Funcionalidades Principais</h2>
              <p className="section-subtitle">
                Tudo que você precisa para transformar produtividade em diversão
              </p>
            </Col>
          </Row>
          
          <Row>
            {features.map((feature, index) => (
              <Col lg={6} xl={3} key={index} className="mb-4">
                <Card className="card-custom h-100 text-center p-4">
                  <Card.Body>
                    <div className="fs-1 mb-3">{feature.icon}</div>
                    <h5 className="mb-3">{feature.title}</h5>
                    <p className="text-muted">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="section-title">Telas do App</h2>
              <p className="section-subtitle">
                Interface intuitiva e gamificada
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4">
              <div 
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#f8f9fa',
                  border: '2px dashed #dee2e6',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#6c757d'
                }}
              >
                Tela Principal
              </div>
            </Col>
            
            <Col md={4} className="mb-4">
              <div 
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#f8f9fa',
                  border: '2px dashed #dee2e6',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#6c757d'
                }}
              >
                Perfil e XP
              </div>
            </Col>
            
            <Col md={4} className="mb-4">
              <div 
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#f8f9fa',
                  border: '2px dashed #dee2e6',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#6c757d'
                }}
              >
                Torneios
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-alt section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="section-title">Roadmap de Desenvolvimento</h2>
              <p className="section-subtitle">
                O futuro do Eleva está sendo construído agora
              </p>
            </Col>
          </Row>
          
          <Row>
            {roadmapItems.map((item, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card className="card-custom h-100">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">{item.phase}</h5>
                      <span 
                        className={`badge ${
                          item.status === 'Em desenvolvimento' 
                            ? 'bg-primary' 
                            : item.status === 'Planejado' 
                            ? 'bg-warning' 
                            : 'bg-secondary'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    
                    <h6 className="mb-3">{item.title}</h6>
                    
                    <ul className="list-unstyled">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="mb-2">
                          <small>• {listItem}</small>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Card className="card-custom p-5">
                <Card.Body>
                  <h2 className="section-title">Quer acompanhar o desenvolvimento?</h2>
                  <p className="section-subtitle mb-4">
                    Entre em contato para receber updates sobre o Eleva e ser um dos 
                    primeiros a testar quando estiver pronto!
                  </p>
                  <Button 
                    as={Link} 
                    to="/contato" 
                    className="btn-custom" 
                    size="lg"
                  >
                    Entrar em Contato
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ElevaLanding;