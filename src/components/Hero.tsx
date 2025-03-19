import Avatar from "./Avatar";
import PillTab from "./PillTab";

const Hero = () => {
  return (
    <section className=" h-1/2 py-5 min-w-full">
      <div className=" mx-auto  transition-all max-w-sm w-70 sm:w-80">
        <Avatar />
      </div>
      <div className=" w-full text-center text-xl">
        <div className="mt-5">
          <h2 className="font-bold text-3xl">Pedro Acosta</h2>
          <span className="text-slate-500">Ingeniero en informática</span>
        </div>

        <div className="mt-5">
          <p className="w-full flex items-center sm:justify-center  text-sm flex-col md:flex-row gap-8">
            <PillTab text={"Backend Developer"} primary={true} />
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col justify-evenly mt-6 ">
        <p>
          <span>Correo:</span> pedroj4567@gmail.com
        </p>
        <p>
          <span>Telefono:</span> pedroj4567@gmail.com
        </p>
        <p>
          <span>Ubicacion:</span> pedroj4567@gmail.com
        </p>
      </div> */}
    </section>
  );
};

export default Hero;
