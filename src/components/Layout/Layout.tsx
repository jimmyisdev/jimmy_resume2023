import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "@component/context/context";
import { Props, ThemeContextType } from "@component/interface/interface";

export default function Layout({ children }: Props) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
