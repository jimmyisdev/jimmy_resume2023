import { projectItemType, reposType } from '@component/interface/interface'
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjextItem({ data, type }: { type: string, data: projectItemType }) {
    const { name, tools, url, description, tasks } = data
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div className='project_item'>
            <div className='head flex_column'>
                <h1>{name}</h1>
                <button onClick={() => setShowDetail(!showDetail)}>{showDetail ? "Hide" : "Show"}</button>
            </div>
            {
                showDetail && (
                    <>
                        {!!tasks.length &&
                            <>
                                <strong >
                                    Project tasks :
                                </strong>
                                <ListContainer data={tasks} />
                                <br />
                            </>
                        }

                        {!!description.length &&
                            <>
                                <strong >
                                    Project decsciption :
                                </strong>
                                <ListContainer data={description} />
                                <br />
                            </>
                        }
                        {!!tools.length &&
                            <>
                                <strong >
                                    Tools :
                                </strong>
                                <ToolContainer data={tools} projectName={name} />
                                <br />
                            </>
                        }
                        {type === "side" && <LinkItem data={data?.repos} link={url} />}
                    </>
                )
            }
        </div>
    )
}

const ListContainer = ({ data }: { data: string[] }) => {
    return (
        <ul className='flex_column list_container'>
            {data.map((item) => {
                return <li key={item} className={`list_item`}><span >{item}</span></li>
            })}
        </ul>
    )
}


const ToolContainer = ({ data, projectName }: { data: string[], projectName: string }) => {
    return (
        <ul className='flex flex_row tool_container_item_style'>
            {data.map(item => {
                return (
                    <li key={item + projectName} className='flex_column tool_item'>
                        <span>{item}</span>
                    </li>
                )
            })}
        </ul>
    )

}

const LinkItem = ({ data, link = '' }: { data: reposType, link: string }) => {
    const { frontend = "", backend = "" } = data
    return (
        <div className='flex flex_row link_item_style'>
            {!!link.length && (
                <a href={link}>
                    <FaExternalLinkAlt size={30} />
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