import styles from "./Shared.module.scss";
import { reposType } from "@component/interface/interface"
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

export const LinkItem = ({ data, link = '', videoUrl = '' }: { data: reposType, link: string, videoUrl?: string }) => {
    const { frontend = "", backend = "" } = data
    return (
        <div className={`flex flex_row ${styles.link_item_style}`}>
            {!!link.length && (
                <a href={link}>
                    <FaExternalLinkAlt size={30} />
                </a>
            )}
            {!!videoUrl.length && (
                <a href={videoUrl}>
                    <FaYoutube size={30} />
                </a>
            )}
            {!!frontend.length && (
                <a href={frontend}>
                    <FaGithub size={30} />
                </a>
            )}
            {!!backend.length && (
                <a href={backend}>
                    <FaGithub size={30} />
                </a>
            )}
        </div>
    )
}