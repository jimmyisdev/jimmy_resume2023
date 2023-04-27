import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@component/context/context";
import { PropsType, ThemeContextType } from "@component/interface/interface";

export default function Layout({ children }: PropsType) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
