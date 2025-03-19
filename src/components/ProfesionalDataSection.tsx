import EducationInfoSection from "./EducationInfoSection";
import WorkExperienceSection from "./WorkExperienceSection";

const ProfesionalDataSection = () => {
  return (
    <section className="my-10">
      <div className="text-center text-3xl my-10 text-slate-500 ">
        <h1>Informacion Profesional</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-30 place-items-center mx-auto sm:w-6xl ">
        <EducationInfoSection />
        <WorkExperienceSection />
      </div>
    </section>
  );
};

export default ProfesionalDataSection;
