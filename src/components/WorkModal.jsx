import React, { useContext } from "react";
import { LanguageContext } from "../pages/styled/MainPage";
import WorkModalStyled from "./styled/WorkModal.styled";
import BigLink from "./BigLink";
import TechList from "./TechList";

const WorkModal = ({ hideModal, textWork }) => {
    const textGlobal = useContext(LanguageContext);
    return (
        <WorkModalStyled>
            <div className="modal__content">
                <div className="modal__content-text">
                    <h2>{textWork.name}</h2>
                    <TechList list={textWork.tech} />
                    <div>
                        <a href={textWork.github}>Github</a> |{" "}
                        <a href={textWork.demo}>Demo</a>
                    </div>
                    <p>{textWork.description}</p>
                    <BigLink className="btn-back" onClick={hideModal}>
                        {textGlobal.work.backButton}
                    </BigLink>
                </div>
                <div className="live-preview">
                    <h2>Live Preview</h2>
                    <iframe src={textWork.demo} title={textWork.name}>
                        IFRAME
                    </iframe>
                </div>
            </div>
        </WorkModalStyled>
    );
};

export default WorkModal;
