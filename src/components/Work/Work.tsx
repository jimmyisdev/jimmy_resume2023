import styles from "./Work.module.scss";
import { jobInfoData, jobProjectData } from "./jobData";
import { projectData } from "./projectData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div className={`flex-row page ${styles.work}`}>
      <section className={`sect`}>
        <h1>Working Experience</h1>
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
                return (
                  <div
                    key={item.name}
                    className={`${styles.project_item} ${styles.job_project_item}`}
                  >
                    <div className="flex_row">
                      <p className={styles.content}>{item.name}</p>
                    </div>
                    <div className="flex_row">
                      <p className={styles.content}> {item.description}</p>
                    </div>
                    <div className="flex_row">
                      <p className={styles.content}>
                        {item.tools.map((toolItem: any) => {
                          return (
                            <span key={item.name + toolItem}>{toolItem}</span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={`sect`}>
        <h1>Side Projects</h1>
        <div className={`${styles.container} ${styles.side}`}>
          {projectData.map((item: any) => {
            const { name, url, repos, tools } = item;
            return (
              <div
                key={item.name}
                className={`flex_column ${styles.project_item}`}
              >
                <div>{item.name}</div>
                <div className={`flex_row`}>
                  {item.tools.map((toolItem: any) => {
                    return (
                      <span
                        key={name + toolItem}
                        className={`${styles.tool_item}`}
                      >
                        {toolItem}
                      </span>
                    );
                  })}
                </div>
                <div className={`flex_row`}>
                  <a href={item.url}>
                    <FaExternalLinkAlt />
                  </a>
                  <FaGithub />
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
