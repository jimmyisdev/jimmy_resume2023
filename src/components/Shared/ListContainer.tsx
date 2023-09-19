import styles from "./Shared.module.scss";

export const ListContainer = ({ data }: { data: string[] }) => {
    return (
        <ul className={`flex_column ${styles.list_container}`}>
            {data.map((item) => {
                return <li key={item} className={`${styles.list_item}`}><span >{item}</span></li>
            })}
        </ul>
    )
}
