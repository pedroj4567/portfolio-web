import Avatar from "./Avatar";
import ContactInformation from "./ContactInformation";
import PillTab from "./PillTab";
import { Letter, UbicationPoint } from "./icons";

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

        <div className="mt-4 sm:mb-5">
          <p className="w-full flex items-center sm:justify-center  text-sm flex-col md:flex-row gap-8">
            <PillTab text={"Backend Developer"} primary={true} />
          </p>
        </div>
      </div>

      <div className="flex flex-col  px-12  sm:justify-around lg:flex-row sm:items-center">
        <ContactInformation
          information={"pedroj4567@gmail.com"}
          label={"Correo"}
        >
          <Letter />
        </ContactInformation>
        <ContactInformation
          information={"linkedin.com/pedroacostadev"}
          label={"Linkedin"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="25"
            height="25"
            fill="#009482"
            className="size-6 text-teal-600"
            viewBox="0 0 512.000000 512.000000"
          >
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
              <path d="M452 5100 c-109 -29 -187 -74 -272 -160 -87 -86 -131 -163 -160 -276 -20 -76 -20 -118 -20 -2104 0 -1986 0 -2028 20 -2104 29 -113 73 -190 160 -276 86 -87 163 -131 276 -160 76 -20 118 -20 2104 -20 1986 0 2028 0 2104 20 113 29 190 73 276 160 87 86 131 163 160 276 20 76 20 118 20 2104 0 1986 0 2028 -20 2104 -29 113 -73 190 -160 276 -86 87 -163 131 -276 160 -76 20 -117 20 -2108 19 -1967 0 -2033 -1 -2104 -19z m4171 -409 c21 -13 50 -42 65 -64 l27 -41 0 -2025 0 -2026 -24 -38 c-13 -21 -42 -50 -64 -65 l-41 -27 -2026 0 -2026 0 -41 27 c-22 15 -51 44 -64 65 l-24 38 -3 2004 c-1 1390 1 2015 8 2043 13 47 77 114 122 127 21 6 793 9 2043 8 l2010 -2 38 -24z" />
              <path d="M1152 4265 c-74 -21 -131 -56 -189 -118 -90 -95 -127 -217 -106 -342 15 -86 46 -149 106 -212 90 -95 203 -140 327 -130 100 8 172 40 244 107 138 130 174 321 90 487 -38 75 -136 165 -211 193 -75 28 -190 35 -261 15z" />
              <path d="M3240 3179 c-194 -28 -392 -143 -485 -282 l-35 -52 0 153 0 152 -340 0 -340 0 0 -1130 0 -1130 339 0 340 0 4 653 c4 709 4 707 62 831 72 152 213 226 406 213 136 -9 227 -68 279 -182 52 -112 53 -123 57 -842 l4 -673 345 0 345 0 -4 768 c-3 499 -9 790 -16 832 -75 438 -259 634 -646 690 -81 11 -236 11 -315 -1z" />
              <path d="M900 2020 l0 -1130 350 0 350 0 0 1130 0 1130 -350 0 -350 0 0 -1130z" />
            </g>
          </svg>
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
