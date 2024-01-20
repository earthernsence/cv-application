import { EducationData } from "../../exampleData";

export const EducationInformationPreview = (props: EducationData) => (
  <li id={props.id}>
    <div className="flex justify-between mb-5 first:mt-5">
      <div className="text-black font-bold text-lg">{props.degree}</div>
      <div className="text-black text-lg">
        <span className="font-bold">{props.school} ({props.location})</span> | {props.start} - {props.end}
      </div>
    </div>
  </li>
);

export default EducationInformationPreview;