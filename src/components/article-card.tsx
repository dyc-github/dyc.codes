import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface ArticleCardProps {
  children: ReactNode;
  title: string;
  imageFile: string;
  markdownFile: string;
}

const ArticleCard = (props: ArticleCardProps) => {
  const path = useLocation().pathname;
  return (
    <Link
      to={`${path}/article/${props.markdownFile.replace(/\.[^/.]+$/, "")}`}
      className="flex flex-col w-full h-fit lg:flex-row lg:h-80 bg-slate-200  dark:bg-slate-700"
    >
      <img
        className="aspect-square object-cover lg:h-full"
        alt={props.imageFile}
        src={`images/${props.imageFile}`}
      />
      <div className="flex flex-col my-8 px-4 overflow-auto">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        {props.children}
      </div>
    </Link>
  );
};

export default ArticleCard;
