import { ModalContext } from '@component/context/modalContext';
import { projectItemType } from '@component/interface/interface'
import { useContext } from 'react';


export default function ProjextItem({ data }: { data: projectItemType }) {
    const { name } = data
    const { setShowModal, setModalData, setModalType } = useContext(ModalContext) as any;

    function handleProjectItemModal() {
        setModalType('project')
        setModalData(data)
        setShowModal(true)
    }

    return (
        <div className='project_item flex_column'>
            <h1>{name}</h1>
            <button onClick={handleProjectItemModal}>Details</button>
        </div>
    )
}
