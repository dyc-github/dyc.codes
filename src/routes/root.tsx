import { useEffect, useState } from "react";
import { DarkModeContext } from "../context/dark-mode-context";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // we actually want to load default isDarkMode from some local storage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    isDarkMode
      ? (document.body.className = "bg-slate-800")
      : (document.body.className = "");
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode }}
    >
      <div className={isDarkMode ? "dark" : ""}>
        <div className="text-slate-900 dark:text-white">
          <header>
            <Navbar />
          </header>
          <main>
            <Outlet />
          </main>
          <Footer/>
        </div>
      </div>
    </DarkModeContext.Provider>
  );
};

export default Root;
