const AboutMeSection = () => {
  return (
    <section className="py5 md:py-8">
      <div className="">
        <div className=" flex flex-col items-center gap-5">
          <div className="">
            <h2 className="text-3xl text-slate-500 font-bold ">
              Acerca de <span className="text-teal-600">mi</span>
            </h2>
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
