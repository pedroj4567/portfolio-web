import AboutMeSection from "./components/AboutMeSection";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import ProfesionalDataSection from "./components/ProfesionalDataSection";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  return (
    <main className="relative">
      <ThemeToggleButton />
      <Hero />
      <Divider />
      <AboutMeSection />
      <TechnologiesSection />
      <ProfesionalDataSection />
      <ProjectsSection />
    </main>
  );
}

export default App;
