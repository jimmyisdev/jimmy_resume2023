import Image from "next/image";
import styles from "../Intro/Intro.module.scss";
import { VscPassFilled } from "react-icons/vsc";
import { featuresData, toolsData } from "./toolData";

const Intro = () => {
  return (
    <div className={`page ${styles.intro}`}>
      <section className="flex_column">
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
        <ul className={`flex_column ${styles.feature_container}`}>
          <div className={`flex_column ${styles.intro_phrase}`}>
            <h1 className={`sect_title`}>
              Hi! This is Jimmy, a web developer!
            </h1>
          </div>
          {featuresData.map((item: string) => (
            <li className={`flex_row`} key={item}>
              <VscPassFilled />
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className={`sect`}>
        <div className="flex_column">
          <h1 className={`sect_title`}>I have experience with these stuffs</h1>
        </div>
        <ul className={`${styles.tool_container} flex_row`}>
          {toolsData.map((item: string) => {
            return (
              <li key={item} className={`flex_column badge_style`}>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Intro;
