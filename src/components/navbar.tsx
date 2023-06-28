import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/dark-mode-context";
import { ReactComponent as DarkModeSVG } from "../icons/dark-mode.svg";
import { ReactComponent as LightModeSVG } from "../icons/light-mode.svg";
import { ReactComponent as MenuSVG } from "../icons/menu.svg";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row justify-between items-center h-20 px-4 md:px-10">
        <Link className=" text-2xl font-bold" to={"/"}>
          David Choi
        </Link>

        <div className="flex flex-row gap-x-4 items-center">
          {/* fullscreen */}
          <Link className="hidden md:flex" to={"/"}>
            Home
          </Link>
          <Link className="hidden md:flex" to={"/work"}>
            Work
          </Link>
          <Link className="hidden md:flex" to={"/extracurriculars"}>
            Extracurriculars
          </Link>
          <Link className="hidden md:flex" to={"/contacts"}>
            Contacts
          </Link>

          {/* mobile */}
          <button
            className="fill-slate-900 dark:fill-white"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <LightModeSVG className="w-8" />
            ) : (
              <DarkModeSVG className="w-8" />
            )}
          </button>

          <button
            className="fill-slate-900 dark:fill-white md:hidden"
            onClick={() => {
              setMobileMenuIsVisible(!mobileMenuIsVisible);
            }}
          >
            <MenuSVG className="w-8" />
          </button>
        </div>
      </div>
      <div
        className={`absolute top-[100%] bg-slate-200  dark:bg-slate-700 w-full md:hidden  transition-[max-height] overflow-hidden ${
          mobileMenuIsVisible
            ? "max-h-screen duration-500 ease-in"
            : "max-h-0 duration-500 ease-out"
        }`}
      >
        <div className="my-3 flex flex-col">
          <Link className="py-2 px-4" to={"/"}>
            Home
          </Link>
          <Link className="py-2 px-4" to={"/work"}>
            Work
          </Link>
          <Link className="py-2 px-4" to={"/extracurriculars"}>
            Extracurriculars
          </Link>
          <Link className="py-2 px-4" to={"/contacts"}>
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
