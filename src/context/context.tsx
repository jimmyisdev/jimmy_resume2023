import {PropsType, ThemeContextType, ThemeType } from "@component/interface/interface";
import { FC, createContext, useState,PropsWithChildren } from "react";

export const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeProvider: FC<PropsWithChildren<PropsType>>  = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeType>("light");
  return (
    <ThemeContext.Provider value={{ theme: themeMode, updateTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
