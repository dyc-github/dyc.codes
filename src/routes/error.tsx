import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-4 px-4">
      <h1 className="text-5xl font-bold">Something went wrong...</h1>
      <Link to="/" className="text-link">Return back to the home page</Link>
    </div>
  );
};

export default Error;
