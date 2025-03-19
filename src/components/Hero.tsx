import Avatar from "./Avatar";
import ContactInformation from "./ContactInformation";
import PillTab from "./PillTab";
import { Letter, Phone, UbicationPoint } from "./icons";

const Hero = () => {
  return (
    <section className="h-1/2 py-5">
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

      <div className="flex flex-col sm:flex-row items-center justify-evenly mt-8">
        <ContactInformation
          information={"pedroj4567@gmail.com"}
          label={"Correo"}
        >
          <Letter />
        </ContactInformation>
        <ContactInformation
          information={"(+57) 350-331-4211"}
          label={"Telefono"}
        >
          <Phone />
        </ContactInformation>{" "}
        <ContactInformation
          information={"Cúcuta, Colombia"}
          label={"Ubicacion"}
        >
          <UbicationPoint />
        </ContactInformation>
      </div>
    </section>
  );
};

export default Hero;
