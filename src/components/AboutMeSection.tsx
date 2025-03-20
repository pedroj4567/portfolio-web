const AboutMeSection = () => {
  return (
    <section className="py5 md:py-8">
      <div className="">
        <div className=" flex flex-col items-center gap-5">
          <div className=" flex justify-center items-center">
            <h2 className="text-3xl text-slate-500 font-bold mr-4">
              Acerca de <span className="text-teal-600">mi</span>
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="currentColor"
              className="size-8 text-teal-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </div>
          <div className=" w-2/3 p-1 ">
            <p className="">
              <span className="font-bold text-teal-600">
                {" "}
                Hola a todos, soy Pedro Acosta,
              </span>
              {""} desarrollador e ingeniero en informática. Soy una persona
              apasionada por el desarrollo de software y los avances
              tecnológicos. Mi pasión se manifiesta en mi constante compromiso
              con la creación de soluciones tecnológicas innovadoras y
              eficientes. Con una combinación única de creatividad y análisis,
              abordo cada proyecto con una visión estratégica y una meticulosa
              atención a los detalles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
