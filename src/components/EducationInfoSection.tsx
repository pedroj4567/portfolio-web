const EducationInfoSection = () => {
  return (
    <article className=" h-full">
      <div className="my-10 flex items-center justify-center">
        <h2 className="text-3xl text-slate-600 text-center mr-3">
          Formacion <span className="text-teal-600 font-bold">Academica</span>
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-8 text-teal-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      </div>

      <div>
        <ul className="list bg-base-100 rounded-box  w-sm sm:w-lg">
          <li className="list-row border border-slate-400/20 mb-5 shadow-md">
            <div>
              <div className="text-xl font-bold text-teal-600">
                <p>Ingeniero en informática</p>
              </div>
              <div className="text-xs uppercase font-semibold opacity-60 flex">
                Universidad Nacional Romulo Gallegos
                <a
                  href="https://www.instagram.com/oficial_unerg/?hl=es"
                  className="mx-2"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <p className="list-col-wrap text-sm">
              Ingeniero en informática de la UNERG. Especializado en desarrollo
              de software, gestión de proyectos y creación de soluciones
              innovadoras.
            </p>
          </li>
          <li className="list-row border border-slate-400/20 mb-5 shadow-md">
            <div>
              <div className="text-xl font-bold text-teal-600">
                <p>Bachiller en Procesamiento de datos</p>
              </div>
              <div className="text-xs uppercase font-semibold opacity-60 flex">
                U.E.C.A "Angel de la Guarda"
                <a
                  href="https://www.facebook.com/ueca.angeldelaguarda.9/"
                  className="mx-2"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <p className="list-col-wrap text-sm">
              Como bachiller en Procesamiento de Datos, he tenido la oportunidad
              de implementar herramientas tecnológicas en diversas entidades
              estadales, logrando mejorar su operatividad en un 70%.
            </p>
          </li>

          <li className="list-row border border-slate-400/20 mb-5 shadow-md">
            <div>
              <div className="text-xl font-bold text-teal-600">
                <p>Desarrollador Web con Javascript Moderno</p>
              </div>
              <div className="text-xs uppercase font-semibold opacity-60 flex">
                UDEMY
              </div>

              <a
                className="badge bg-teal-600 text-white mt-2 hover:bg-teal-700 transition-all"
                href="https://www.udemy.com/certificate/UC-383ae4bb-da25-4ca3-a1b8-06a96346ae0c/"
              >
                Ver Certificado
              </a>
            </div>
            <p className="list-col-wrap text-sm">
              Estudié JavaScript Moderno con Juan Pablo de la Torre en Udemy,
              dominando ES6+, asincronía, APIs y frameworks. Ahora desarrollo
              aplicaciones web dinámicas y eficientes
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default EducationInfoSection;
