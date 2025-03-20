import {
  frameworksAndLibrariesPerTechnologie,
  technologies,
} from "../data/data";
import { Code } from "./icons";

const TechnologiesSection = () => {
  return (
    <section className="min-w-full mt-10 pt-10 mx-auto py-10 flex flex-col items-center">
      <div className=" w-1/2 text-center  mb-10 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-slate-500 mr-4">Tecnologías</h2>{" "}
        <Code />
      </div>

      {/* Separar en componentes */}
      <div className="w-sm sm:w-5xl  ">
        <div
          className="collapse collapse-arrow bg-base-100  border mb-5 "
          tabIndex={0}
        >
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-slate-600 flex justify-between ">
            Lenguajes de programación
          </div>

          <div className="collapse-content text-sm">
            <ul className="list">
              <li className="list-row flex flex-col sm:flex-row">
                {technologies.map((tech) => {
                  return (
                    <div
                      className="flex flex-col gap-3 items-center  justify-evenly"
                      key={tech.id}
                    >
                      <p className="text-lg text-slate-600 font-bold">
                        {tech.name}
                      </p>
                      <div>
                        <tech.icon />
                      </div>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="collapse collapse-arrow bg-base-100 border  mb-5"
          tabIndex={1}
        >
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-slate-600 flex justify-between">
            Tecnologías Front-end y Mobile
          </div>

          <div className="collapse-content text-sm">
            <ul className="list">
              <li className="list-row flex flex-col sm:flex-row">
                {frameworksAndLibrariesPerTechnologie.frontend.map((tech) => {
                  return (
                    <div
                      className="flex gap-3 flex-col items-center  justify-evenly"
                      key={tech.id}
                    >
                      <p className="text-lg text-slate-600 font-bold">
                        {tech.name}
                      </p>
                      <div>
                        <tech.icon />
                      </div>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="collapse collapse-arrow bg-base-100  border  mb-5"
          tabIndex={2}
        >
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-slate-600 flex justify-between">
            Tecnologías Back-end
          </div>

          <div className="collapse-content text-sm">
            <ul className="list">
              <li className="list-row flex flex-col sm:flex-row">
                {frameworksAndLibrariesPerTechnologie.backend.map((tech) => {
                  return (
                    <div
                      className="flex gap-3 flex-col items-center  justify-evenly"
                      key={tech.id}
                    >
                      <p className="text-lg text-slate-600 font-bold">
                        {tech.name}
                      </p>
                      <div>
                        <tech.icon />
                      </div>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="collapse collapse-arrow bg-base-100 border  mb-5"
          tabIndex={3}
        >
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-slate-600 flex justify-between">
            Bases de datos
          </div>

          <div className="collapse-content text-sm">
            <ul className="list">
              <li className="list-row flex flex-col sm:flex-row">
                {frameworksAndLibrariesPerTechnologie.databases.map((tech) => {
                  return (
                    <div
                      className="flex gap-3 flex-col items-center  justify-evenly"
                      key={tech.id}
                    >
                      <p className="text-lg text-slate-600 font-bold">
                        {tech.name}
                      </p>
                      <div>
                        <tech.icon />
                      </div>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="collapse collapse-arrow bg-base-100  border  mb-5"
          tabIndex={4}
        >
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-slate-600  flex justify-between">
            Tecnologías de despliegue y cloud
          </div>

          <div className="collapse-content text-sm">
            <ul className="list">
              <li className="list-row flex flex-col sm:flex-row">
                {frameworksAndLibrariesPerTechnologie.cloud.map((tech) => {
                  return (
                    <div
                      className="flex gap-3 flex-col items-center  justify-evenly"
                      key={tech.id}
                    >
                      <p className="text-lg text-slate-600 font-bold">
                        {tech.name}
                      </p>
                      <div>
                        <tech.icon />
                      </div>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
