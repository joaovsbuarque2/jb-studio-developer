import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Importar logo
import logoJB from '../../assets/images/logo-jb.png';

function ElevaFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produto: [
      { name: 'Funcionalidades', path: '/eleva/funcionalidades' },
      { name: 'Roadmap', path: '/eleva/roadmap' },
      { name: 'Sobre o Eleva', path: '/eleva/sobre' },
    ],
    suporte: [
      { name: 'Contato', path: '/eleva/contato' },
      { name: 'FAQ', path: '/eleva/contato#faq' },
      { name: 'Comunidade Discord', href: '#' },
    ],
    empresa: [
      { name: 'JS Studio', path: '/js-studio' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: '🐦', name: 'Twitter', href: '#' },
    { icon: '📘', name: 'Facebook', href: '#' },
    { icon: '📷', name: 'Instagram', href: '#' },
    { icon: '💬', name: 'Discord', href: '#' },
  ];

  return (
    <footer className="eleva-footer">
      <Container>
        <Row className="eleva-footer-newsletter">
          <Col lg={8} className="mx-auto text-center">
            <h3 className="newsletter-title">Fique por dentro das novidades</h3>
            <p className="newsletter-subtitle">
              Seja o primeiro a saber sobre novas funcionalidades, updates e o
              lançamento oficial
            </p>
            <div className="newsletter-form">
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Seu email"
                />
                <Button className="btn-eleva-primary newsletter-btn">
                  📧 Inscrever-se
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="eleva-footer-main">
          <Col lg={4} className="mb-4">
            <div className="footer-brand">
              <h3 className="brand-title">
                <img
                  src={logoJB}
                  alt="JB Studio"
                  className="eleva-brand-logo"
                />
                Eleva
              </h3>
              <p className="brand-description">
                O app de produtividade gamificado que transforma suas tarefas
                diárias em uma aventura épica. Evolua sua produtividade de forma
                divertida e social.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="footer-title">Produto</h5>
            <ul className="footer-links">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="footer-title">Suporte</h5>
            <ul className="footer-links">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  {link.path ? (
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="footer-title">Empresa</h5>
            <ul className="footer-links">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  {link.path ? (
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={2} className="mb-4">
            <h5 className="footer-title">Download</h5>
            <div className="download-links">
              <Button className="download-btn mb-2" size="sm" disabled>
                📱 App Store
                <small className="d-block">Em breve</small>
              </Button>
              <Button className="download-btn" size="sm" disabled>
                🤖 Google Play
                <small className="d-block">Em breve</small>
              </Button>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="eleva-footer-bottom">
          <Col md={6}>
            <p className="copyright">
              © {currentYear} Eleva by JS Studio. Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-meta">
              <span className="version-info">Versão Beta 1.0</span>
              <span className="separator">•</span>
              <span className="build-info">Build: {Date.now()}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ElevaFooter;
