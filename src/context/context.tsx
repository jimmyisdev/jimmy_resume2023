import { Props, Theme, ThemeContextType } from "@component/interface/interface";
import { FC, createContext, useState,PropsWithChildren } from "react";

export const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeProvider: FC<PropsWithChildren<Props>>  = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>("light");
  return (
    <ThemeContext.Provider value={{ theme: themeMode, updateTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
