import React, { useContext } from "react";
import styles from "./Modal.module.scss";
import { ModalContext } from "@component/context/modalContext";
import { ProjectModalContent } from "../Shared/ProjectModalContent";

function Modal() {
    const { setShowModal, modalData, modalType } = useContext(ModalContext) as any;

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                    <button onClick={() => setShowModal(false)} >
                        X
                    </button>
                </div>
                <div className={styles.title}>
                    <h1>{modalData.name}</h1>
                </div>
                <div className={styles.body}>
                    {modalType === "project" && <ProjectModalContent data={modalData} />}
                </div>
            </div>
        </div>
    );
}

export default Modal;
