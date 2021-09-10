import './App.css';
import NBar from './Components/NBar';
import Intro from './Components/Intro';
import Info from './Components/Info'
import FooterComp from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NBar></NBar>
      <Intro></Intro>
      <Info id="test"></Info>
      <FooterComp></FooterComp>
    </div>
  );
}

export default App
