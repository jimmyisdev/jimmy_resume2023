import styles from "./About.module.scss";
import { educationData, proficiencyData } from "./aboutData";

const About = () => {
  return (
    <div className={`page ${styles.about}`}>
      <section className={`sect ${styles.about_text}`}>
        <h1 className={`sect_title`}>About me</h1>
        <p>
          Hello! My name is Jimmy, and I am a junior web developer with a
          passion for learning and exploring new technologies. I had been
          studied in Taipei, Heidelberg and Kyoto. After completing my
          master&#39;s degree in Germany, I began teaching myself how to code,
          with a particular focus on web development.
        </p>
        <br />
        <p>
          I started my professional career as a frontend developer at a fin-tech
          company in Taipei, where I was responsible for maintaining the
          existing platforms, debugging, and developing new features using
          React.js. Currently, I am expanding my skill set by learning
          Express.js and MongoDB, with the ultimate goal of becoming a
          proficient MERN stack developer.
        </p>
        <br />
        <p>
          Overall, I am enthusiastic about the possibilities that web
          development offers and am always eager to take on new challenges to
          improve my skills and knowledge.
        </p>
      </section>

      <section className={`sect`}>
        <h1 className={`sect_title`}>Education </h1>
        <div className={`${styles.about_container} flex_column`}>
          {educationData.map((item: any) => {
            return (
              <div key={item.title} className={`${styles.about_item} flex_row`}>
                <span className={`${styles.title}`}>{item.title}</span>
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
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
