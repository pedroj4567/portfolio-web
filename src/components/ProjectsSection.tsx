import { LightBull } from "./icons";

const ProjectsSection = () => {
  return (
    <section className="h-[500px]">
      <div className="text-center  flex items-center justify-center py-8">
        <h1 className="text-2xl font-bold text-slate-600 mr-2">
          <span className="text-teal-600">Proyectos</span> e Ideas
        </h1>
        <div>
          <LightBull />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
