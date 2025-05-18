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
          {!!workInfoData.length && [...workInfoData].reverse().map((item: workItemType) => {
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
                        <ProjextItem data={projectItem} key={projectItem.name} />
                      )
                    })}
                  </div>
                </div>
              </div>}
            </div>
          })}
        </div>
      </section>
      <section className={`${styles.content_container}`}>
        <h1 className={`sect_title`}>Side Projects</h1>
        <div className="big_container flex_row">
          {!!projectData.length && projectData.map(item => {
            return (
              <ProjextItem data={item} key={item.name} />
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default Work;

