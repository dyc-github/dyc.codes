import { Link } from "react-router-dom";

interface QuickLinkCardProps {
  text: string;
  path: string;
  imageFile: string;
}

const QuickLinkCard = (props: QuickLinkCardProps) => {
  return (
    <Link
      to={props.path}
      className="relative flex justify-center items-center h-full font-bold underline aspect-[5/6] overflow-hidden md:h-96 "
    >
      <div className="absolute h-full w-full flex justify-center items-center bg-slate-200 dark:bg-slate-700 transition-colors !bg-opacity-80 hover:!bg-opacity-60">
        <p className="text-2xl">{props.text}</p>
      </div>
      <img
        className="h-full w-full object-cover object-center"
        alt={props.imageFile}
        src={`images/${props.imageFile}`}
      />
    </Link>
  );
};

export default QuickLinkCard;
