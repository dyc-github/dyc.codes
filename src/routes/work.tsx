import ArticleCard from "../components/article-card";
import ArticleContainer from "../components/article-card-container";

const Work = () => {
  return (
    <ArticleContainer title="Work Experience">
      <ArticleCard
        title="Evernote"
        imageFile="evernote-banner.svg"
        markdownFile="evernote.md"
      >
        <p>
          <b>Role:</b> Software Engineering Intern
        </p>
        <p>
          <b>Dates:</b> May 2022 - Aug 2022
        </p>
        <p>
          <b>Technologies:</b> React Native, TypeScript, Kotlin
        </p>
        <br />
        <p>
          As a Software Engineering Intern at Evernote, I had the opportunity to
          develop valuable skills in navigating a professional environment,
          attention to detail, and creating impactful software. In this article,
          I will share my experience and discuss the tasks I worked on, which
          involved implementing an offline toggle, resolving header issues on
          iOS, and redesigning the sharing functionality for the Evernote App.
        </p>
      </ArticleCard>

      <ArticleCard
        title="Center for Information Technology Research in the Interest of Society (CITRIS)"
        imageFile="citris.webp"
        markdownFile="citris.md"
      >
        <p>
          <b>Role:</b> Web Developer Intern
        </p>
        <p>
          <b>Dates:</b> Dec 2022 - May 2023
        </p>
        <p>
          <b>Technologies:</b> React.js, Javascript, jQuery, HTML, CSS
        </p>
        <br />
        <p>
          During my internship at CITRIS and the Banatao Institute, I
          contributed to impactful projects and honed my web development skills.
          I maintained the UC Merced CITRIS website by creating new pages and
          enhancing the user experience. Additionally, I led the development of
          the F3 website, utilizing React.js to inform the public about the
          Fresno-Merced Future of Food Innovation Initiative.
        </p>
      </ArticleCard>
    </ArticleContainer>
  );
};

export default Work;
