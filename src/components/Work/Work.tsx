import styles from "./Work.module.scss";
import { workInfoData, projectData } from "./workData";
import {
  workItemType
} from "../../interface/interface";
import ProjextItem from "./ProjextItem";
const Work = () => {
  return (
    <div className={`page`}>
      <section className={`sect`}>
        <h1 className={`sect_title`}>Working Experience</h1>
        <div className="big_container flex_row">
          {!!workInfoData.length && workInfoData.map((item: workItemType) => {
            const { period = '', company = '', title = '', tasks = [], projects = [] } = item
            return <div key={item.company} className={`flex_column ${styles.work_item_container}`}>
              {<div className={`flex_row ${styles.content_container}`}>
                <div className={`${styles.title}`}><span>{`Period`}</span></div>
                <div className={`${styles.content}`}><span>{period}</span></div>
              </div>}
              {<div className={`flex_row ${styles.content_container}`}>
                <div className={`${styles.title}`}><span>{`Company`}</span></div>
                <div className={`${styles.content}`}><span>{company}</span></div>
              </div>}
              {<div className={`flex_row ${styles.content_container}`}>
                <div className={`${styles.title}`}><span >{`Title`}</span></div>
                <div className={`${styles.content}`}><span >{title}</span></div>
              </div>}
              {<div className={`flex_row ${styles.content_container}`}>
                <div className={`${styles.title}`}><span>{`Tasks`}</span></div>
                <div className={`${styles.content} flex_row`}>
                  <ul>
                    {!!tasks.length && tasks.map((taskItem: string) => {
                      return <li key={taskItem}><span>{taskItem}</span></li>
                    })}
                  </ul>
                </div>
              </div>}
              {<div className={`${styles.content_container}`}>
                <div className={`${styles.title}`}><span>{`Projects`}</span></div>
                <div className={`${styles.content}`}>
                  <div className="big_container flex_row">
                    {!!projects.length && projects.map((projectItem) => {
                      return (
                        <ProjextItem data={projectItem} key={projectItem.name} type="side" />
                      )
                    })}
                  </div>
                </div>
              </div>}
            </div>
          })}
        </div>
      </section>
      <section className={`sect`}>
        <h1 className={`sect_title`}>Side Projects</h1>
        <div className="big_container flex_row">
          {!!projectData.length && projectData.map(item => {
            return (
              <ProjextItem data={item} key={item.name} type="side" />
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default Work;


{/* <div className={`${styles.work_sub_container}`}>
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
              {jobProjectData.map((item: jobProjectItemType) => {
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
        </div> */}
