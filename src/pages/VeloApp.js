import VeloAbout from '../components/velo/VeloAbout';
import VeloContact from '../components/velo/VeloContact';
import VeloFeatures from '../components/velo/VeloFeatures';
import VeloFooter from '../components/velo/VeloFooter';
import VeloHeader from '../components/velo/VeloHeader';
import VeloHome from '../components/velo/VeloHome';
import VeloRoadmap from '../components/velo/VeloRoadmap';

function VeloApp() {
  return (
    <div className="velo-app">
      <VeloHeader />
      <main className="velo-main">
        <div id="home">
          <VeloHome />
        </div>
        <div id="sobre">
          <VeloAbout />
        </div>
        <div id="funcionalidades">
          <VeloFeatures />
        </div>
        <div id="roadmap">
          <VeloRoadmap />
        </div>
        <div id="contato">
          <VeloContact />
        </div>
      </main>
      <VeloFooter />
    </div>
  );
}

export default VeloApp;
