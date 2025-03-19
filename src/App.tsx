import AboutMeSection from "./components/AboutMeSection";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

function App() {
  return (
    <main className="">
      <Hero />
      <Divider />
      <AboutMeSection />
      <TechnologiesSection />
      <WorkExperienceSection />
    </main>
  );
}

export default App;
