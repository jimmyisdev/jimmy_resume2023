import { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThemeContext } from "@component/context/context";
import { PropsType, ThemeContextType } from "@component/interface/interface";

export default function Layout({ children }: PropsType) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
