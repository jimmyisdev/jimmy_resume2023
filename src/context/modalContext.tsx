import { FC, createContext, useState, PropsWithChildren } from "react";
import { ModalContextType, PropsType, projectItemType } from "@component/interface/interface";

export const ModalContext = createContext<ModalContextType | null>(null);
const ModalProvider: FC<PropsWithChildren<PropsType>> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState<projectItemType>();
    const [modalType, setModalType] = useState('');
    return (
        <ModalContext.Provider value={{ showModal, setShowModal, modalData, setModalData, modalType, setModalType }}>
            {children}
        </ModalContext.Provider>
    )
};

export default ModalProvider;