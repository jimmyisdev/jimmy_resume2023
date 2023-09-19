import styles from "./Shared.module.scss";

export const ToolContainer = ({ data, projectName }: { data: string[], projectName: string }) => {
    return (
        <ul className={`flex flex_row ${styles.tool_container_item_style}`}>
            {data.map(item => {
                return (
                    <li key={item + projectName} className={`flex_column ${styles.tool_item}`}>
                        <span>{item}</span>
                    </li>
                )
            })}
        </ul>
    )

}