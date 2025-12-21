import { useState } from "react";
import type { ReactNode } from "react";
import { DarkModeContext } from "./darkModeContext";

type DarkModeContextProviderProps = {
  children: ReactNode;
};

const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
