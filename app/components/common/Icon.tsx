import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const Icon = (props: { icon: IconDefinition, link?: string, className?: string }) => (
  <a
    href={props.link}
    target="_blank"
    className={`text-black opacity-50 cursor-pointer
              transition-all duration-200 ease-in-out
              hover:opacity-100 hover:scale-110
              flex items-center object-cover gap-2
              ${props.className}`}
  >
    <FontAwesomeIcon
      icon={props.icon}
      width={50}
      height={50}
      className="w-12 h-12"
    />
  </a>
);

export default Icon;