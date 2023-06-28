import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <div className=" max-h-full lg:h-[40rem] flex flex-row flex-wrap container bg-slate-200  dark:bg-slate-700 ">
      <img
        className="w-auto h-full max-h-full"
        src="/images/profile.jpeg"
        alt="profile"
      />

      <div className="flex flex-1 flex-col max-w-fit gap-8 p-10 py-12">
        <h1 className="text-5xl font-bold">Hello, I'm David Yechan Choi.</h1>
        <p className="">
          I’m a <b>B.S. Computer Science Major</b>, class of 2025, studying at
          the <b>University of California, San Diego</b>. Prior to transferring,
          I attended the University of California, Merced as a B.S. Computer
          Science and Engineering Major.
          <br />
          <br />
          I’ve worked as a{" "}
          <b>Software Engineer, Mobile Developer, and Web Developer</b> for
          companies such as{" "}
          <Link to={"/work/article/evernote"} className="text-link">
            Evernote
          </Link>
          ,{" "}
          <Link to={"/work/article/citris"} className="text-link">
            CITRIS
          </Link>
          , and the{" "}
          <Link to={"/work/article/evernote"} className="text-link">
            University of California, Merced
          </Link>
          .
          <br />
          <br />
          Some of the programming languages I've worked with include:
          <br />
          C, C++, Java, JavaScript, Kotlin, Python, and TypeScript.
          <br />
          <br />
          Other technologies I've used are:
          <br />
          CSS, Figma, Firebase, Git, HTML, Jira & Confluence, jQuery, Node.js,
          Photoshop, Premiere Pro, React.js, React Native, and SQL & noSQL
          <br />
          <br />
          <br />
          Feel free to{" "}
          <Link to={"/contacts"} className="text-link">
            contact me
          </Link>{" "}
          for regarding any job positions. You can also find me on{" "}
          <Link to={"https://github.com/dyc-github"} className="text-link">
            Github
          </Link>{" "}
          and{" "}
          <Link
            to={"https://www.linkedin.com/in/dyc-in/"}
            className="text-link"
          >
            LinkedIn
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
