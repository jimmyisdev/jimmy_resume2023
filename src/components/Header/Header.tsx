import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { ThemeContext } from "@component/context/themeContext";
import { ThemeType, ThemeContextType } from "@component/interface/interface";


export default function Header() {
  const pathname = usePathname();
  const { updateTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateTheme(event.target.value as ThemeType);
  };

  return (
    <nav className={`${styles.nav} flex_row`}>
      <ul className="flex_row">
        <li>
          <Link href="/" className={pathname == "/" ? `${styles.linkActive}` : ""}>
            Intro
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname == "/about" ? `${styles.linkActive}` : ""}>
            About
          </Link>
        </li>
        <li>
          <Link href="/work" className={pathname == "/work" ? `${styles.linkActive}` : ""}>
            Work & Projects
          </Link>
        </li>
      </ul>
      <div className={`${styles.contact}`}>
        <select name="toggleTheme" onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <Image alt="Jimmy" height={50} width={50} priority src="/author1.png" />
      </div>
    </nav>
  );
}
