import { SiNextdotjs, SiSass } from "react-icons/si";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`flex_column ${styles.footer}`}>
      <span className={`flex_row`}>Contact: hire.jimmy.dev@gamil.com</span>
      <span className={`flex_row`}>
        This site is built with &nbsp; <SiNextdotjs size={30} />
        &nbsp; &&nbsp; <SiSass size={30} />
      </span>
    </footer>
  );
}
