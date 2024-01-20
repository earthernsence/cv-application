import { CVData } from "../../exampleData";
import EducationInformationPreview from "./EducationInformationPreview";
import ExperienceInformationPreview from "./ExperienceInformationPreview";
import PersonalInformationPreview from "./PersonalInformationPreview";

export const Preview = (props: CVData) => (
  <section className="w-full h-auto min-h-[3/4]
                      list-none border-2 border-solid rounded border-slate-600 p-5 shadow-gray-900 shadow-lg bg-white">
    <PersonalInformationPreview
      firstName={props.firstName}
      lastName={props.lastName}
      email={props.email}
      phoneNumber={props.phoneNumber}
      address={props.address}
      title={props.title}
    />
    <div className="text-2xl text-black text-left font-extrabold mt-4">Education</div>
    {
      props.education.map(edu => (
        <EducationInformationPreview
          key={edu.id}
          id={edu.id}
          degree={edu.degree}
          school={edu.school}
          start={edu.start}
          end={edu.end}
          location={edu.location}
        />
      ))
    }
    <div className="text-2xl text-black text-left font-extrabold mt-4">Experience</div>
    {
      props.work.map(exp => (
        <ExperienceInformationPreview
          key={exp.id}
          id={exp.id}
          position={exp.position}
          company={exp.company}
          start={exp.start}
          end={exp.end}
          description={exp.description}
          location={exp.location}
        />
      ))
    }
  </section>
);