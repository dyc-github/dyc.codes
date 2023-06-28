import { ReactComponent as GithubSVG } from "../icons/github-logo.svg";
import { ReactComponent as LinkedInSVG } from "../icons/linkedin-logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mb-24 mt-32 gap-8">
      <div className="flex flex-row gap-4">
        <a className="transition-colors fill-slate-900 hover:fill-slate-600 dark:fill-white dark:hover:fill-slate-300" href="https://github.com/dyc-github">
          <GithubSVG className="w-8 h-8 " />
        </a>
        <a href="https://www.linkedin.com/in/dyc-in/">
          <LinkedInSVG className="transition-colors w-8 h-8 fill-slate-900 hover:fill-slate-600 dark:fill-white  dark:hover:fill-slate-300" />
        </a>
      </div>
      <a href="mailto:y.choi.david@gmail.com">y.choi.david@gmail.com</a>
    </div>
  );
};

export default Footer;
