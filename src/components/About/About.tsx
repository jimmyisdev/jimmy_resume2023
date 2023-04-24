import styles from "./About.module.scss";
import { aboutData } from "./aboutData";

const About = () => {
  return (
    <div className={`page ${styles.about}`}>
      <section className={`sect`}>
        <h1>About me</h1>
        <p></p>I am Jimmy born and raised in Taipie. After graduating from Fu
        jen Catholic University. I continued my studies at Heidelberg
        University, Germany.
      </section>

      <section className={`sect`}>
        <h1>Education & Proficiency</h1>
        <div className={`${styles.about_container} flex_column`}>
          {aboutData.map((item: any) => {
            return (
              <div key={item.title} className={`${styles.about_item} flex_row`}>
                <span className={`${styles.title}`}>{item.title}</span>
                <span className={`${styles.content}`}>{item.titleInfo}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
