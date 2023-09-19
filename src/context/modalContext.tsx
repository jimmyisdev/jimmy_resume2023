import { FC, createContext, useState, PropsWithChildren } from "react";
import { PropsType } from "@component/interface/interface";

export const ModalContext = createContext<any | null>(null);
const ModalProvider: FC<PropsWithChildren<PropsType>> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [modalType, setModalType] = useState("");
    return (
        <ModalContext.Provider value={{ showModal, setShowModal, modalData, setModalData, modalType, setModalType }}>
            {children}
        </ModalContext.Provider>
    )
};

export default ModalProvider;