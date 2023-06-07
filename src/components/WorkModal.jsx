import React from "react";
import WorkModalStyled from "./styled/WorkModal.styled";
import BigLink from "./BigLink";
import TechList from "./TechList";
import useLocalization from "../hooks/useLocalization";
import { useNavigate, useParams } from "react-router";

const WorkModal = () => {
    const textGlobal = useLocalization().local;
    const textWork = textGlobal.work.works[useParams().id];
    const navigate = useNavigate();
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
                    <BigLink onClick={()=> navigate(-1) } className="btn-back">
                        {textGlobal.backButton}
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
