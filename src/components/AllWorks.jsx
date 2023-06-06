import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../pages/styled/MainPage";
import WorkSmall from "./WorkSmall";
import BigLink from "./BigLink";
import WorkModal from "./WorkModal";

const AllWorksStyled = styled.div`
    padding-top: 1em;
    margin: 0 auto;
    padding-bottom: 3em;
    h2 {
        text-align: center;
        margin-bottom: 1em;
    }
    .allworks__grid {
        /* background-color: red; */
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(2, 1fr);
    }

    .btn-back {
        width: fit-content;
    }
`;

const AllWorks = ({ backToMain }) => {
    const textGlobal = useContext(LanguageContext);
    const [modalActive, setModalActive] = useState(false);
    const [textWork, setTextWork] = useState("");
    const [scrollY, setScrollY] = useState(0);

    function showModal(work) {
        document.body.style.overflow = "hidden";
        setModalActive(true);
        setTextWork(work);
        setScrollY(window.scrollY);
    }

    function hideModal() {
        document.body.style.overflow = "auto";
        setModalActive(false);
        // вернуть положение страницы до открытия портала. Без setTimeout не работает. Снимаем плавную прокрутку с документа, что бы возврат положения был незаметен для пользователя. Затем возвращаем ее назад.
        document.documentElement.style.scrollBehavior = "auto";
        setTimeout(() => {
            window.scrollTo(0, scrollY);
            document.documentElement.style.scrollBehavior = "smooth";
        }, 1);
    }

    const works = textGlobal.work.works.map((work, index) => (
        <WorkSmall onClick={() => showModal(work)} key={index} work={work} />
    ));

    return modalActive ? (
        <WorkModal hideModal={hideModal} textWork={textWork} />
    ) : (
        <AllWorksStyled>
            <BigLink className="btn-back" onClick={backToMain}>
                {textGlobal.work.backButton}
            </BigLink>
            <h2>{textGlobal.work.myWorks}</h2>
            <div className="allworks__grid">{works}</div>
        </AllWorksStyled>
    );
};

export default AllWorks;
