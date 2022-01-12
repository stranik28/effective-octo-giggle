import './App.css';
import Header from "./blocks/header";
import Skills from "./blocks/skills";
import Support from "./blocks/support";
import Drupal_experts from "./blocks/drupal_experts";
import Tarifs from "./blocks/tarifs";
import Recent_cases from "./blocks/recent_cases";
import Our_team from "./blocks/our_team";
import Down from "./blocks/down";
import FAQ from "./blocks/FAQ/FAQ";
import Partners from "./blocks/workers_slider/partners";
import Sliderok from "./blocks/slider_rev/slider";

function App() {
  return (
      <div className="App">
          <Header/>
          <Skills/>
          <Support/>
          <Drupal_experts/>
          <Tarifs/>
          <Recent_cases/>
          <Our_team />
          <Sliderok/>
          <Partners/>
          <FAQ />
          <Down />
      </div>
  );
}

export default App;
