import styles from "./Work.module.scss";
import { jobInfoData, jobProjectData } from "./jobData";
import { projectData } from "./projectData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div className={`page ${styles.work}`}>
      <section className={`sect`}>
        <h1 className={`sect_title`}>Working Experience</h1>
        <div className={`${styles.container} side`}>
          {jobInfoData.map((item: any) => {
            return (
              <div key={item[1]} className={`flex_row ${styles.job_item}`}>
                <div className={styles.title}>{item[0]}</div>
                <div className={styles.content}>{item[1]}</div>
              </div>
            );
          })}
          <div className={`flex_row ${styles.job_item}`}>
            <div className={styles.title}>Projects</div>
            <div className={`${styles.content} flex_row`}>
              {jobProjectData.map((item: any) => {
                const { name } = item;
                return (
                  <div
                    key={name}
                    className={`${styles.project_item} ${styles.job_project_item} ${styles.flip_card}`}
                  >
                    <div className={`${styles.flip_card_inner} `}>
                      <div className={`${styles.flip_card_front} flex_column`}>
                        <div className={`flex_row ${styles.job_project_title}`}>
                          <h3 className={styles.content}>{name}</h3>
                        </div>
                        <div className="flex_row">
                          <ul className={`${styles.content} flex_row badge_container`}>
                            {item.tools.map((toolItem: any) => {
                              return (
                                <li
                                  key={item.name + toolItem}
                                  className={`badge_style flex_column`}
                                >
                                  {toolItem}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className={`${styles.flip_card_back} flex_column`}>
                        <p className={styles.content}> {item.description}</p>
                        <p className={`${styles.content} flex_column`}>
                          {item.tasks.map((taskItem: any) => {
                            return (
                              <span key={item.name + taskItem}>{taskItem}</span>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={`sect`}>
        <h1 className={`sect_title`}>Side Projects</h1>
        <div className={`${styles.container} ${styles.side}`}>
          {projectData.map((item: any) => {
            const { name, url, repos, tools } = item;
            return (
              <div
                key={item.name}
                className={`flex_column ${styles.project_item}`}
              >
                <h3 className={`${styles.title}`}>{item.name}</h3>
                <ul className={` ${styles.project_item_container} flex_row`}>
                  {item.tools.map((toolItem: any) => {
                    return (
                      <li
                        key={name + toolItem}
                        className={`badge_style flex_column`}
                      >
                        {toolItem}
                      </li>
                    );
                  })}
                </ul>
                <div className={`flex_row ${styles.link_container}`}>
                  <a href={item.url}>
                    <FaExternalLinkAlt size={30} />
                  </a>
                  <a>
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Work;
