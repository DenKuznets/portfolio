import React from "react";
import WorkStyled from "./styled/Work.styled";
import BigLink from "./BigLink";
import TechList from "./TechList";
import useLocalization from "../hooks/useLocalization";
import { useNavigate, useParams } from "react-router";

const Work = () => {
    const textGlobal = useLocalization().local;
    const textWork = textGlobal.work.works[useParams().id];
    const navigate = useNavigate();
    return (
        <WorkStyled>
            <div className="work__content">
                <div className="work__content-text">
                    <h3>{textWork.name}</h3>
                    <TechList list={textWork.tech} />
                    <div>
                        <a href={textWork.github}>Github</a> |{" "}
                        <a href={textWork.demo}>Demo</a>
                    </div>
                    <p>{textWork.description}</p>
                    <BigLink onClick={() => navigate(-1)} className="btn-back">
                        {textGlobal.backButton}
                    </BigLink>
                </div>
                <div className="work__content-image">
                    <a href={textWork.demo}>
                        <img
                            src={`../images/works-preview/${textWork.img}`}
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </WorkStyled>
    );
};

export default Work;
