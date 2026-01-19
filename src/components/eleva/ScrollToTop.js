import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          title="Voltar ao topo"
        >
          ↑
        </Button>
      )}
    </>
  );
}

export default ScrollToTop;
