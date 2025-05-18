import Image from "next/image";
import styles from "../Intro/Intro.module.scss";
import { VscPassFilled, VscCopy } from "react-icons/vsc";
import { featuresData, toolsData } from "./toolData";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import { useState } from "react";

const Intro = () => {
  const [isCopied, setIsCopied] = useState(false)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Website',
          text: 'Check out this awesome site!',
          url: 'https://yourwebsite.com',
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing not supported on this browser');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false);
      }, 500);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className={`page ${styles.intro}`}>
      <section className="flex_column">
        <div className={styles.profileContainer}>

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
          <div className={styles.actionContainer}>
            <button
              onClick={handleShare}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              <CiShare2 />
            </button>
            <button
              onClick={handleCopyLink}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              {isCopied ? <MdOutlineDone /> : <VscCopy />}
            </button>
          </div>
        </div>
        <ul className={`flex_column ${styles.feature_container}`}>
          <div className={`flex_column ${styles.intro_phrase}`}>
            <h1 className={`sect_title`}>
              Hi! I am Jimmy, a frontend web developer!
            </h1>
          </div>
          {featuresData.map((item: string) => (
            <li className={`flex_row`} key={item}>
              <VscPassFilled />
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </section >
      <section className={`sect`}>
        <div className="flex_column">
          <h1 className={`sect_title`}>I have hands-on experience with </h1>
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
    </div >
  );
};

export default Intro;
