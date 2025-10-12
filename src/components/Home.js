import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import logoJB from '../assets/images/logoJB.png';

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-banner">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} data-aos="fade-right">
            <div className="hero-content">
              <h1>JB Studio Developer</h1>
              <p>
                Criamos soluções digitais que unem tecnologia, design e
                inovação. Desenvolvimento de aplicativos, softwares e
                experiências criativas com foco em performance, usabilidade e
                futuro.
              </p>
              <div className="d-flex gap-4 flex-wrap justify-content-center justify-content-lg-start">
                <Button
                  onClick={() => scrollToSection('projetos')}
                  className="btn-custom"
                  size="lg"
                  style={{
                    boxShadow: '0 15px 35px rgba(6, 182, 212, 0.4)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                  }}
                >
                  Conheça nossos projetos
                </Button>
                <Button
                  onClick={() => scrollToSection('contato')}
                  variant="outline-light"
                  size="lg"
                  style={{
                    borderRadius: '30px',
                    padding: '15px 35px',
                    borderWidth: '2px',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow =
                      '0 10px 25px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Entre em contato
                </Button>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            className="text-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="floating hero-image-container"
              style={{
                maxWidth: '350px',
                width: '100%',
                aspectRatio: '1',
                background:
                  'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,163,0.2))',
                borderRadius: '50%',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid rgba(139,92,246,0.3)',
                padding: '20px',
                boxShadow: '0 20px 60px rgba(34,211,163,0.3)',
                transition: 'all 0.4s ease',
              }}
            >
              <Image
                src={logoJB}
                alt="Logo JB Studio Developer"
                className="hero-profile-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  transition: 'all 0.4s ease',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '20px',
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
