import { ReactComponent as GithubSVG } from "../icons/github-logo.svg";
import { ReactComponent as LinkedInSVG } from "../icons/linkedin-logo.svg";

const documentID = "1Y0vMwMw9NNlVZC1ed_qEQHJA0iXvc1BK"

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-[80vh]">
      <div className="container flex flex-col gap-8 px-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Email</h2>
          <a href="mailto:y.choi.david@gmail.com">y.choi.david@gmail.com</a>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Social Media</h2>
          <div className="flex flex-row flex-wrap gap-16">
            <a href="https://github.com/dyc-github" className="flex flex-row gap-2 items-center fill-slate-900  dark:fill-white">
              <GithubSVG className="w-10 h-10"/>
              <p className="underline font-normal">github.com/dyc-github</p>
            </a>
            <a href="https://www.linkedin.com/in/dyc-in/" className="flex flex-row gap-2 items-center fill-slate-900  dark:fill-white">
              <LinkedInSVG className="w-10 h-10"/>
              <p className="underline font-normal">linkedin.com/dyc-in</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Resume</h2>
          <iframe title="resume" className=" aspect-[3/4] lg:aspect-[3/2]" src={`https://drive.google.com/u/0/uc?id=${documentID}`}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
