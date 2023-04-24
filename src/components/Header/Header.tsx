import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <nav className={`${styles.nav} flex_row`}>
      <ul className="flex_row">
        <li>
          <Link href="/">Intro</Link>{" "}
        </li>
        <li>
          <Link href="/about">About</Link>{" "}
        </li>
        <li>
          <Link href="/work">Work & Projects</Link>
        </li>
      </ul>
      <div className={`${styles.contact}`}>
        <Image alt="Jimmy" height={50} width={50} priority src="/author1.png" />{" "}
        {/* <span>hire.jimmy.dev@gmail.com</span> */}
      </div>
    </nav>
  );
}
