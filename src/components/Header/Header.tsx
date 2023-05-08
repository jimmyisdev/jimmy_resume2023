import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styles from "./Header.module.scss";
import { ThemeContext } from "@component/context/context";
import { ThemeType, ThemeContextType } from "@component/interface/interface";

export default function Header() {
  const { updateTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateTheme(event.target.value as ThemeType);
  };

  return (
    <nav className={`${styles.nav} flex_row`}>
      <ul className="flex_row">
        <li>
          <Link href="/">Intro</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/work">Work & Projects</Link>
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
