import styles from "./About.module.scss";
import { educationData, introText, proficiencyData } from "./aboutData";

const About = () => {
  return (
    <div className={`page ${styles.about}`}>
      <section className={`sect ${styles.about_text}`}>
        <h1 className={`sect_title`}>About me</h1>
        {introText.map(item => {
          return <>
            <p>
              {item}
            </p>
            <br />
          </>
        })}
      </section>
      <section className={`sect`}>
        <h1 className={`sect_title`}>Education</h1>
        <div className={`${styles.about_container} flex_column`}>
          {educationData.map((item: string) => {
            return (
              <div key={item} className={`${styles.about_item} flex_row`}>
                <span className={`${styles.title}`}>{item}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section className={`sect`}>
        <h1 className={`sect_title`}>Language Proficiency</h1>
        <div className={`${styles.about_container} flex_column`}>
          {proficiencyData.map((item: string) => {
            return (
              <div key={item} className={`${styles.about_item} flex_row`}>
                <span className={`${styles.title}`}>{item}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
