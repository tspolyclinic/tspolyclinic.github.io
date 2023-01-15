
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroSection from './component/IntroSection'
import AboutUs from './component/AboutUs';
import Management from './component/Management';
import GuidingPrinciples from './component/GudingPrinciples';
import Staff from './component/Staff';
import Commitment from './component/Commitment';
import OurService from './component/OurService';

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
    </div>
  );
}

export default App;
