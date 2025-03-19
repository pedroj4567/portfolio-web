import EducationInfoSection from "./EducationInfoSection";
import WorkExperienceSection from "./WorkExperienceSection";

const ProfesionalDataSection = () => {
  return (
    <section className="my-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 place-items-center mx-auto sm:w-6xl ">
        <EducationInfoSection />
        <WorkExperienceSection />
      </div>
    </section>
  );
};

export default ProfesionalDataSection;
