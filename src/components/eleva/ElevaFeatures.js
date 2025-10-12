import { useState } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';

// Importar screenshots do app
import elevaConfTemaImg from '../../assets/images/eleva-conf-tema.jpeg';
import elevaConfSupImg from '../../assets/images/eleva-confi-sup.jpeg';
import elevaCriarTarfaImg from '../../assets/images/eleva-criar-tarfa.jpeg';
import elevaCriarTorneioImg from '../../assets/images/eleva-criar-torneio.jpeg';
import elevaHomeImg from '../../assets/images/eleva-home-atividade.jpeg';

function ElevaFeatures() {
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState({
    title: '',
    description: '',
  });

  const openModal = (imageSrc, title, description) => {
    setModalImage(imageSrc);
    setModalCaption({ title, description });
  };

  const closeModal = () => {
    setModalImage(null);
    setModalCaption({ title: '', description: '' });
  };

  const features = [
    {
      icon: '🎮',
      title: 'Sistema de Gamificação Completo',
      description:
        'XP, níveis, conquistas, badges especiais e um sistema de progressão que mantém você sempre motivado.',
      tags: ['XP', 'Níveis', 'Conquistas', 'Badges'],
    },
    {
      icon: '🏆',
      title: 'Torneios e Competições',
      description:
        'Participe de torneios semanais, desafios mensais e competições especiais com recompensas exclusivas.',
      tags: ['Torneios', 'Rankings', 'Recompensas', 'Competição'],
    },
    {
      icon: '👥',
      title: 'Comunidade e Social',
      description:
        'Conecte-se com amigos, forme equipes, compartilhe conquistas e motivem-se mutuamente.',
      tags: ['Amigos', 'Equipes', 'Chat', 'Compartilhamento'],
    },
    {
      icon: '📊',
      title: 'Analytics Avançados',
      description:
        'Relatórios detalhados, gráficos de progresso, insights de produtividade e análise de padrões.',
      tags: ['Relatórios', 'Gráficos', 'Insights', 'Análise'],
    },
    {
      icon: '🎯',
      title: 'Missões e Objetivos',
      description:
        'Missões diárias, objetivos semanais, metas personalizadas e desafios progressivos.',
      tags: ['Missões', 'Objetivos', 'Metas', 'Desafios'],
    },
    {
      icon: '🎨',
      title: 'Personalização',
      description:
        'Temas customizáveis, avatares únicos, widgets personalizáveis e interface adaptável.',
      tags: ['Temas', 'Avatares', 'Widgets', 'Interface'],
    },
    {
      icon: '🔔',
      title: 'Notificações Inteligentes',
      description:
        'Lembretes contextuais, notificações motivacionais e alertas de oportunidades.',
      tags: ['Lembretes', 'Motivação', 'Contexto', 'Oportunidades'],
    },
    {
      icon: '🔗',
      title: 'Integrações Poderosas',
      description:
        'Conecte com Google Calendar, Notion, Slack, Trello e mais de 50 apps populares.',
      tags: ['Calendar', 'Notion', 'Slack', 'Automação'],
    },
  ];

  const upcomingFeatures = [
    {
      icon: '🤖',
      title: 'IA Assistant',
      description:
        'Assistente pessoal que aprende seus hábitos e sugere otimizações.',
      status: 'Em desenvolvimento',
    },
    {
      icon: '🌍',
      title: 'Modo Cooperativo',
      description:
        'Trabalhe em projetos colaborativos com sistema de XP compartilhado.',
      status: 'Planejado',
    },
    {
      icon: '💎',
      title: 'Marketplace de Itens',
      description: 'Compre e venda itens cosméticos, temas e power-ups únicos.',
      status: 'Futuro',
    },
  ];

  return (
    <>
      <section className="eleva-features-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="eleva-page-title text-white" data-aos="fade-up">
                Funcionalidades que Fazem a Diferença
              </h1>
              <p
                className="eleva-page-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Descubra como cada feature foi pensada para tornar sua jornada
                de produtividade mais divertida e eficaz.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eleva-section">
        <Container>
          <Row>
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card
                  className="eleva-feature-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <Card.Body className="p-4">
                    <div className="feature-header mb-3">
                      <div className="feature-icon">{feature.icon}</div>
                      <h5 className="feature-title">{feature.title}</h5>
                    </div>

                    <p className="feature-description mb-3">
                      {feature.description}
                    </p>

                    <div className="feature-tags">
                      {feature.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="eleva-tag me-1 mb-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
                Em Desenvolvimento
              </h2>
              <p
                className="eleva-section-subtitle text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Funcionalidades incríveis que estão chegando em breve
              </p>
            </Col>
          </Row>

          <Row>
            {upcomingFeatures.map((feature, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card
                  className="eleva-upcoming-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center p-4">
                    <div className="upcoming-icon mb-3">{feature.icon}</div>
                    <h5 className="upcoming-title mb-3">{feature.title}</h5>
                    <p className="upcoming-description mb-3">
                      {feature.description}
                    </p>
                    <Badge
                      className={`status-badge ${feature.status.toLowerCase().replace(' ', '-')}`}
                    >
                      {feature.status}
                    </Badge>
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
                Veja o Eleva em Ação
              </h2>
              \
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card
                className="screenshot-card"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="screenshot-container">
                  <img
                    src={elevaHomeImg}
                    alt="Tela inicial - Atividades e gamificação"
                    className="screenshot-img"
                    loading="lazy"
                    onClick={() =>
                      openModal(
                        elevaHomeImg,
                        'Tela Principal',
                        'Atividades gamificadas e progresso visual',
                      )
                    }
                  />
                  <div className="screenshot-overlay">
                    <h6>Tela Principal</h6>
                    <p>Atividades gamificadas e progresso visual</p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card
                className="screenshot-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="screenshot-container">
                  <img
                    src={elevaCriarTarfaImg}
                    alt="Criar nova tarefa"
                    className="screenshot-img"
                    loading="lazy"
                    onClick={() =>
                      openModal(
                        elevaCriarTarfaImg,
                        'Criar Tarefa',
                        'Interface intuitiva para adicionar atividades',
                      )
                    }
                  />
                  <div className="screenshot-overlay">
                    <h6>Criar Tarefa</h6>
                    <p>Interface intuitiva para adicionar atividades</p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card
                className="screenshot-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="screenshot-container">
                  <img
                    src={elevaCriarTorneioImg}
                    alt="Criar torneio"
                    className="screenshot-img"
                    loading="lazy"
                    onClick={() =>
                      openModal(
                        elevaCriarTorneioImg,
                        'Torneios',
                        'Criação de competições sociais',
                      )
                    }
                  />
                  <div className="screenshot-overlay">
                    <h6>Torneios</h6>
                    <p>Criação de competições sociais</p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card
                className="screenshot-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="screenshot-container">
                  <img
                    src={elevaConfTemaImg}
                    alt="Configurações de tema"
                    className="screenshot-img"
                    loading="lazy"
                    onClick={() =>
                      openModal(
                        elevaConfTemaImg,
                        'Personalização',
                        'Temas e configurações visuais',
                      )
                    }
                  />
                  <div className="screenshot-overlay">
                    <h6>Personalização</h6>
                    <p>Temas e configurações visuais</p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card
                className="screenshot-card"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="screenshot-container">
                  <img
                    src={elevaConfSupImg}
                    alt="Configurações de suporte"
                    className="screenshot-img"
                    loading="lazy"
                    onClick={() =>
                      openModal(
                        elevaConfSupImg,
                        'Suporte',
                        'Central de ajuda e configurações',
                      )
                    }
                  />
                  <div className="screenshot-overlay">
                    <h6>Suporte</h6>
                    <p>Central de ajuda e configurações</p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card
                className="screenshot-card coming-soon"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="screenshot-container">
                  <div className="coming-soon-content">
                    <div className="coming-soon-icon">🚀</div>
                    <h6>Mais Telas</h6>
                    <p>Novos recursos chegando em breve!</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eleva-section-alt">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="feature-highlight-box" data-aos="fade-up">
                <h3 className="highlight-title mb-4 text-white">
                  🎮 Gamificação Nunca Foi Tão Divertida
                </h3>
                <p className="highlight-description text-white">
                  Nosso sistema de gamificação vai além de pontos simples.
                  Criamos uma experiência RPG completa onde cada tarefa
                  concluída, cada meta alcançada e cada dia produtivo contribui
                  para sua evolução em um universo rico e envolvente.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ElevaFeatures;
