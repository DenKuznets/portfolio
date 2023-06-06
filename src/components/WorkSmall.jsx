import React, { useContext } from "react";
import styled from "styled-components";
import TechList from "./TechList";
import { LanguageContext } from "../pages/styled/MainPage";
import BigLink from "./BigLink";

const WorkSmallStyled = styled.div`
    position: relative;
    max-width: 100%;
    height: 500px;
    border-radius: 4px;
    overflow: hidden;
    color: ${({ theme }) => theme.workSmall.textColor};
    &:hover {
        button {
            transform: translateX(-50%) scale(1);
        }
    }

    cursor: pointer;
    .img-container {
        position: relative;
        height: 100%;
        .overlay {
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.7);
        }
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    h4 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: grey;
        width: 100%;
        padding: 1em;
    }

    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) scale(0);
        z-index: 1;
        transition: all 0.3s ease;
        width: 100%;
        /* border: none; */
        border: 1px solid white;
        background-color: transparent;
        color: white;
        padding: 1em;
        text-align: start;
        cursor: pointer;
        @media only screen and (max-width: 469px) {
            display: none;
        }
    }

    ul {
        margin-left: 1em;
        margin-bottom: 1em;
        position: absolute;
        bottom: 0;
        left: 0;
        li {
            border-color: inherit;
            color: inherit;
        }
    }
`;

const WorkSmall = ({ work, onClick }) => {
    const textGlobal = useContext(LanguageContext);
    return (
        <WorkSmallStyled onClick={onClick}>
            <h4>{work.name}</h4>
            <div className="img-container">
                <div className="overlay"></div>
                <img src={`./images/${work.img}`} alt="" />
            </div>
            <button>{textGlobal.work.showmore}</button>
            <TechList list={work.tech} />
        </WorkSmallStyled>
    );
};

export default WorkSmall;
