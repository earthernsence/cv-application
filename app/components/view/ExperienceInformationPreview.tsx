import { JobData } from "../../exampleData";

export const ExperienceInformationPreview = (props: JobData) => (
  <section className="break-all">
    <li key={props.id}>
      <div className="mt-5 flex justify-between mb-2">
        <div className="text-black font-bold text-lg">{props.position}</div>
        <div className="text-black text-lg">
          <span className="font-bold">{props.company} ({props.location})</span> | {props.start} - {props.end}
        </div>
      </div>
      <div className="text-black text-left">{props.description}</div>
    </li>
  </section>
);

export default ExperienceInformationPreview;