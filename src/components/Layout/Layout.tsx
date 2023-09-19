import { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThemeContext } from "@component/context/themeContext";
import { PropsType, ThemeContextType } from "@component/interface/interface";
import Modal from "../Modal/Modal";
import { ModalContext } from "@component/context/modalContext";
import styles from "./Layout.module.scss";


export default function Layout({ children }: PropsType) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { showModal } = useContext(ModalContext) as any;
  return (
    <div className={showModal && `${styles.modal_open}`}>
      {showModal && <Modal />}
      <div className={`${styles.layout} ${theme === "light" ? "light" : "dark"}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div >
    </div>
  );
}
