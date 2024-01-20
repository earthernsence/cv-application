import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";

export const Footer = () => (
  <footer className="
    text-center text-xl bg-slate-600 font-semibold
    w-full p-4 mt-5 bottom-0
    sticky flex flex-row justify-center items-center
  ">
    made by Jace Royer
    <Icon icon={faGithub} link="https://github.com/earthernsence" className="ml-4" />
  </footer>
);

export default Footer;