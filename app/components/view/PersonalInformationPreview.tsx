import { PersonalData } from "../../exampleData";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PersonalInformationPreview = (props: PersonalData) => (
  <div className="break-all text-black">
    <div className="w-full grid grid-cols-[2.5fr_1.5fr] min-h-24 text-left">
      <div>
        <div className="text-5xl inline font-bold text-cyan-700">
          {props.firstName} {props.lastName}
        </div>
        <div className="text-3xl font-normal">
          {props.title}
        </div>
      </div>
      <div className="h-full flex flex-col gap-2">
        <div>
          <FontAwesomeIcon icon={faLocationDot} /> {props.address}
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} /> {props.phoneNumber}
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> {props.email}
        </div>
      </div>
    </div>
  </div>
);

export default PersonalInformationPreview;