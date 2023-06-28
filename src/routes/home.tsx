import AboutCard from "../components/about-card";
import QuickLinkCard from "../components/quick-link-card";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-16">
        <AboutCard/>
        <div className="flex flex-row flex-wrap gap-16 px-4 justify-center items-center container h-fit">
          <QuickLinkCard text="Work Experience" path="/work" imageFile="evernote-banner.svg"/>
          <QuickLinkCard text="Extracurriculars" path="/extracurriculars" imageFile="hack-merced-officers.JPG"/>
          <QuickLinkCard text="Contacts" path="/contacts" imageFile="contacts.jpg"/>
        </div>
    </div>
  );
};

export default Home;
