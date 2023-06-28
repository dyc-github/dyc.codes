import { ReactNode } from "react";

interface ArticleContainerProps {
  title: string;
  children: ReactNode;
}

const ArticleContainer = (props: ArticleContainerProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="container px-4">
        <h1 className="text-5xl font-bold">{props.title}</h1>
        <div className="flex flex-col gap-14 mt-8">{props.children}</div>
      </div>
    </div>
  );
};

export default ArticleContainer;
