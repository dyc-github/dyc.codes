import ArticleCard from "../components/article-card";

const Extracurriculars = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="container px-4">
        <h1 className="text-5xl font-bold">Extracurriculars</h1>
        <div className="flex flex-col gap-14 mt-8">
          <ArticleCard
            title="Hack Merced"
            imageFile="hack-merced-logo.svg"
            markdownFile="hackmerced.md"
          >
            <p>
              <b>Role:</b> Club Officer
            </p>
            <p>
              <b>Dates:</b> Aug 2022 - May 2023
            </p>
            <p>
              <b>Technologies:</b> React Native, Firebase, React.js, Javascript,
              HTML, CSS
            </p>
            <br />
            <p>
              I served as an officer for Hack Merced, the largest Hackathon in
              the San Joaquin Valley. My achievements included creating and
              maintaining the HackMerced website, creating and leading workshops
              on Firebase and React Native, and organizing Hack Merced VIII.
            </p>
          </ArticleCard>

          <ArticleCard
            title="Roomie"
            imageFile="roomie-logo.svg"
            markdownFile="roomie.md"
          >
            <p>
              <b>Role:</b> Lead Engineer and Project Manager
            </p>
            <p>
              <b>Dates:</b> Dec 2022 - Present
            </p>
            <p>
              <b>Technologies:</b> React Native, Javascript, Firebase
            </p>
            <br />
            <p>
              Roomie was a personal project developed by me and three of my
              roommates, aimed at improving co-living experiences. The app
              combines shared todo lists, shared calendars, messaging, and
              peer-to-peer transactions. Built with React Native and integrated
              with Firebase Authentication and Firestore, the onboarding and
              messaging functionalities are fully functional. Roomie was a an
              enjoyable and educational endeavor.
            </p>
          </ArticleCard>
        </div>
      </div>
    </div>
  );
};

export default Extracurriculars;
