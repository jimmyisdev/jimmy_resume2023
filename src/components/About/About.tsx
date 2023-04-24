import styles from "./About.module.scss";
import { educationData, proficiencyData } from "./aboutData";

const About = () => {
  return (
    <div className={`page ${styles.about}`}>
      <section className={`sect ${styles.about_text}`}>
        <h1 className={`sect_title`}>About me</h1>
        <p>
          I am Jimmy, a junior frontend developer. I had been studied in Taipei, Heidelberg and Kyoto. After completing my master in Germany, I was learning coding by myself. And later on, I started my developer career from frontend developer at a fin-tech company in Taipei. My job was mainly maintaing existing platfrom and developing new featues with react.js. Currently I am also learning express.js and MongoDB and aiming to be a MERN stack developer.
        </p>
      </section>

      <section className={`sect`}>
        <h1 className={`sect_title`}>Education </h1>
        <div className={`${styles.about_container} flex_column`}>
          {educationData.map((item: any) => {
            return (
              <div key={item.title} className={`${styles.about_item} flex_row`}>
                <span className={`${styles.title}`}>{item.title}</span>
                {/* <span className={`${styles.content}`}>{item.titleInfo}</span> */}
              </div>
            );
          })}
        </div>
      </section>
      <section className={`sect`}>
        <h1 className={`sect_title`}> Proficiency</h1>
        <div className={`${styles.about_container} flex_column`}>
          {proficiencyData.map((item: any) => {
            return (
              <div key={item.title} className={`${styles.about_item} flex_row`}>
                <span className={`${styles.title}`}>{item.title}</span>
                {/* <span className={`${styles.content}`}>{item.titleInfo}</span> */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
