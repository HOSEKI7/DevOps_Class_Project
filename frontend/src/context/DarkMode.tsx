import { createContext, useState } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

type DarkModeContextProviderProps = {
  children: React.ReactNode;
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

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
