
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroSection from './component/IntroSection'
import AboutUs from './component/AboutUs';
import Management from './component/Management';
import GuidingPrinciples from './component/GudingPrinciples';
import Staff from './component/Staff';
import Commitment from './component/Commitment';
import OurService from './component/OurService';
import MultispecalityCare from './component/MultispecalityCare';
import ValuesVisionMission from './component/ValuesVisionMission';
import Team from './component/Team';
import Footer from './component/Footer'
import Contact from './component/Contact';
import WhyUs from './component/WhyUs';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <AboutUs />
      <Management />
      <GuidingPrinciples />
      <Staff />
      <Commitment />
      <OurService />
      <MultispecalityCare />
      <ValuesVisionMission />
      <Team />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
