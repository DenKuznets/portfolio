import React, { useContext } from "react";
import { LanguageContext } from "../pages/styled/MainPage";
import WorkModalStyled from "./styled/WorkModal.styled";
import BigLink from "./BigLink";
import TechList from "./TechList";

const WorkModal = ({ hideModal, textWork }) => {
    const textGlobal = useContext(LanguageContext);
    console.log(textWork);
    return (
        <WorkModalStyled>
            <div className="modal__content">
                <div className="modal__content-text">
                    <h3>{textWork.name}</h3>
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
                    <h3>Live Preview</h3>
                    <iframe src={textWork.demo} title={textWork.name}>
                        IFRAME
                    </iframe>
                </div>
            </div>
        </WorkModalStyled>
    );
};

export default WorkModal;
