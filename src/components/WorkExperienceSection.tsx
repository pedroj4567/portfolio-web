import { workExperiences } from "../data/data";
import TimeLineItem from "./TimeLineItem";

const WorkExperienceSection = () => {
  return (
    <article className="w-full">
      <div className="my-10">
        <h2 className="text-3xl text-slate-600 text-center">
          Experiencia <span className="text-teal-600 font-bold">laboral</span>
        </h2>
      </div>

      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical h-[600px] overflow-y-scroll ">
          {workExperiences.map((work) => {
            const { businessName, caption, date, place, title, end } = work;
            return (
              <TimeLineItem
                key={work.id}
                caption={caption}
                businessName={businessName}
                place={place}
                title={title}
                date={date}
                end={end}
              />
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default WorkExperienceSection;
