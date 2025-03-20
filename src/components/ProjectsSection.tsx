import { personalWork } from "../data/data";
import CardProject from "./CardProject";
import { LightBull } from "./icons";

const ProjectsSection = () => {
  return (
    <section className="mx-auto py-14 ">
      <div className="text-center  flex items-center justify-center mb-15">
        <h1 className="text-3xl font-bold text-slate-600 mr-2">
          <span className="text-teal-600">Proyectos</span> e Ideas
        </h1>
        <div>
          <LightBull />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
        {personalWork.map((work, index) => (
          <div key={index}>
            <CardProject
              caption={work.caption}
              link={work.link}
              tag={work.tag}
              title={work.title}
              image={work.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
