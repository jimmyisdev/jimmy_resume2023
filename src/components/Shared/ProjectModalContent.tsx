import { LinkItem } from "./LinkItem"
import { ListContainer } from "./ListContainer"
import { ToolContainer } from "./ToolContainer"

export const ProjectModalContent = ({ data }: { data: any }) => {
    const { name, tools, url, description, tasks } = data

    return (
        <div className="flex_column">
            {!!tasks.length &&
                <>
                    <strong>
                        Project tasks :
                    </strong>
                    <ListContainer data={tasks} />
                    <br />
                </>
            }

            {!!description.length &&
                <>
                    <strong >
                        Project description :
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
            {<LinkItem data={data?.repos} link={url} />}
        </div>
    )
}