import ReactMarkdown from "react-markdown";
import { Link, useLoaderData, useParams } from "react-router-dom";

const getPageTitle = (pageURL:string|undefined)=>{
  switch(pageURL){
    case "work":
      return "Work Experience"
    case "extracurriculars":
      return "Extracurriculars"
    default:
      return ""
  }
}


const Article = () => {
  const {parentPage} = useParams();
   const markdown = useLoaderData() as string

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <Link to={"../.."} relative="path" className="flex flex-row px-4 md:px-10 items-center self-start text-slate-500 dark:text-slate-400">&lt; {getPageTitle(parentPage)}</Link>
        <ReactMarkdown className="container px-4 md:px-0 prose  dark:prose-invert">
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Article;
