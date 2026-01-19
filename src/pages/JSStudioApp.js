import About from '../components/About';
import Company from '../components/Company';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';

function JSStudioApp() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Company />
        <Projects />
        <Contact />
      </main>

      {/* Seção para navegar para os projetos */}
    </>
  );
}

export default JSStudioApp;
