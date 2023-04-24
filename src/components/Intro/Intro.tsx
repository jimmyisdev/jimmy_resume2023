import Image from "next/image";
import styles from "../Intro/Intro.module.scss";
import { toolsData } from "./toolData";

const Intro = () => {
  return (
    <div className={`page ${styles.intro}`}>
      <section className="flex_column">
        <div>
          <h1>Hi! This is Jimmy, a web developer!</h1>
        </div>
        <div className={`flex_column ${styles.main_img}`}>
          <Image
            className={styles.logo}
            src="/author2.png"
            alt="Jimmy"
            width={120}
            height={156}
            priority
          />
        </div>
      </section>

      <section className={`sect`}>
        <div className="flex_column">
          <h1>I have experience with these stuffs</h1>
        </div>
        <div className={`${styles.tool_container} flex_row`}>
          {toolsData.map((item: string) => {
            return (
              <div key={item} className={`${styles.tool_item} flex_column`}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section className={`sect`}>
        <ul className="flex_column">
          <li>
            <h3>Self-taught & independent</h3>
          </li>
          <li>
            <h3>Can work & learn in English</h3>
          </li>
          <li>
            <h3>Write clean code with explanatory comments</h3>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Intro;
