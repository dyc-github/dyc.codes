import { createContext } from "react";
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultDarkModeContext: DarkModeContextType = {
  isDarkMode: true,
  toggleDarkMode: () => {},
};

const DarkModeContext = createContext<DarkModeContextType>(
  defaultDarkModeContext
);

export type { DarkModeContextType };
export { DarkModeContext };
