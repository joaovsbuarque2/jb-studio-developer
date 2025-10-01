import ElevaHome from '../components/eleva/ElevaHome';
import ElevaAbout from '../components/eleva/ElevaAbout';
import ElevaFeatures from '../components/eleva/ElevaFeatures';
import ElevaRoadmap from '../components/eleva/ElevaRoadmap';
import ElevaContact from '../components/eleva/ElevaContact';
import ElevaHeader from '../components/eleva/ElevaHeader';
import ElevaFooter from '../components/eleva/ElevaFooter';
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