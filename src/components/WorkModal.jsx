import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LanguageContext } from "../pages/styled/MainPage";

const modalContentColumn = "900px";

const WorkModalStyled = styled.div`
    position: fixed;
    overflow-y: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    background-color: inherit;

    .modal__content {
        /* background-color: red; */
        display: flex;
        gap: 100px;
        padding: 50px;
        height: 100%;
        width: 100%;
        max-width: 1800px;
        margin: 0 auto;
        @media only screen and (max-width: ${modalContentColumn}) {
            flex-direction: column;
            /* padding-bottom: 100px; */
            min-height: 100%;
            height: unset;
        }
        @media only screen and (max-width: 530px) {
            padding: 50px 10px;
        }
    }
    p {
        white-space: pre-line;
        padding-left: 10px;
        margin-top: 30px;
        min-width: 300px;
        color: inherit;
        @media only screen and (max-width: ${modalContentColumn}) {
            padding-left: 0;
        }
    }
    .live-preview {
        background-color: white;
        flex-basis: 1000px;
        min-width: 380px;
        background-color: transparent;
        @media only screen and (max-width: ${modalContentColumn}) {
            min-height: 70vh;
        }
        @media only screen and (max-width: 420px) {
            display: none;
        }
        h2 {
            text-align: center;
            margin-bottom: 10px;
            color: inherit;
        }
        iframe {
            width: 100%;
            height: 100%;
        }
    }
`;

const WorkModal = ({ hideModal, children, textWork }) => {
    const textGlobal = useContext(LanguageContext);
    return (
        <WorkModalStyled>
            <div className="modal__content">
                <div className="modal__content-text">
                    {children}
                    <p>{textWork.description}</p>
                    <Link className="btn-back" onClick={hideModal}>
                        {textGlobal.work.backButton}
                    </Link>
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
