import ElevaAbout from '../components/eleva/ElevaAbout';
import ElevaContact from '../components/eleva/ElevaContact';
import ElevaFeatures from '../components/eleva/ElevaFeatures';
import ElevaFooter from '../components/eleva/ElevaFooter';
import ElevaHeader from '../components/eleva/ElevaHeader';
import ElevaHome from '../components/eleva/ElevaHome';
import ElevaRoadmap from '../components/eleva/ElevaRoadmap';
import ScrollToTop from '../components/eleva/ScrollToTop';
import ScrollToTopOnRouteChange from '../components/eleva/ScrollToTopOnRouteChange';

function ElevaApp() {
  return (
    <div className="eleva-app">
      <ScrollToTopOnRouteChange />
      <ElevaHeader />
      <main className="eleva-main">
        <div id="home">
          <ElevaHome />
        </div>
        <div id="sobre">
          <ElevaAbout />
        </div>
        <div id="funcionalidades">
          <ElevaFeatures />
        </div>
        <div id="roadmap">
          <ElevaRoadmap />
        </div>
        <div id="contato">
          <ElevaContact />
        </div>
      </main>
      <ElevaFooter />
      <ScrollToTop />
    </div>
  );
}

export default ElevaApp;
