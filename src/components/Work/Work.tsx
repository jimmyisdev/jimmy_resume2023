import styles from "./Work.module.scss";
import { jobInfoData, jobProjectData, projectData } from "./workData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { jobInfoDataType, jobProjectItemType, sideProjectItemType } from "../../interface/interface";
const Work = () => {
  return (
    <div className={`page`}>
      <section className={`sect`}>
        <h1 className={`sect_title`}>Working Experience</h1>
        <div className={`${styles.work_sub_container}`}>
          {jobInfoData.map((item: jobInfoDataType) => {
            return (
              <div key={item[1]} className={`flex_row ${styles.job_info_item}`}>
                <div className={styles.title}>{item[0]}</div>
                <div className={styles.content}>{item[1]}</div>
              </div>
            );
          })}
          <div className={`flex_row ${styles.job_info_item}`}>
            <div className={styles.title}>Projects</div>
            <div className={`${styles.content} flex_row`}>
              {jobProjectData.map((item: jobProjectItemType ) => {
                const { name, description, tools } = item;
                return (
                  <div key={name} className={` flip_card`}>
                    <div className={`${styles.project_item} flip_card_inner`}>
                      <div
                        className={`flip_card_front flex_column ${styles.work_item_container_align}`}
                      >
                        <div className={`flex_row ${styles.job_project_title}`}>
                          <h3>{name}</h3>
                        </div>
                        <div className="flex_row">
                          <ul className={`flex_row badge_container`}>
                            {tools.map((toolItem: string) => {
                              return (
                                <li
                                  key={name + toolItem}
                                  className={`badge_style flex_column`}
                                >
                                  <span>{toolItem}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className={`flip_card_back flex_column`}>
                        <p className={styles.content}> {description}</p>
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
        <div className={`${styles.work_sub_container} flex_row`}>
          {projectData.map((item: sideProjectItemType) => {
            const { name, url, repos, tools } = item;
            return (
              <div
                key={name}
                className={`flex_column ${styles.project_item} ${styles.work_item_container_align}`}
              >
                <h3 className={`${styles.title}`}>{name}</h3>
                <ul className={` ${styles.work_item_container_align} flex_row`}>
                  {tools.map((toolItem: any) => {
                    return (
                      <li
                        key={name + toolItem}
                        className={`badge_style flex_column`}
                      >
                        <span>{toolItem}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className={`flex_row ${styles.link_container}`}>
                  <a href={url}>
                    <FaExternalLinkAlt size={30} />
                  </a>
                  {!!repos.frontend && (
                    <a href={repos.frontend}>
                      <FaGithub size={30} />
                    </a>
                  )}
                  {!!repos.backend && (
                    <a href={repos.backend}>
                      <FaGithub size={30} />
                    </a>
                  )}
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
