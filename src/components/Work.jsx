import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { colors, screen } from "../../utils";
import { useRef } from "react";
import WorkStyled from "./styled/Work.styled";
import { LanguageContext } from "../pages/styled/MainPage";
import useMediaQuery from "../hooks/useMediaQuery";

const Work = (props) => {
    const overlayRef = useRef("");
    const imageRef = useRef("");
    const textGlobal = useContext(LanguageContext);
    const textWork = textGlobal.work.works[props.index];
    const techList = textWork.tech.map((obj, index) => (
        <li key={index}>{obj}</li>
    ));
    const desktop = useMediaQuery("(min-width: 768px)");
    let caseNumberTimeout;

    let bg = "";
    switch (props.index) {
        case 0:
            bg = colors.violet;
            break;

        case 2:
            bg = colors.yellow;
            break;

        default:
            bg = colors.white;
            break;
    }

    function handleMouseEnter(e) {
        overlayRef.current.style.width =
            imageRef.current.clientWidth + 2 + "px";
        //показать номер карточки после появления оверлея
        caseNumberTimeout = setTimeout(() => {
            e.target
                .closest(".work__img")
                .querySelector(".work__img-case-number").style.maxHeight =
                "300px";
        }, 300);
    }

    function handleMouseLeave(e) {
        overlayRef.current.style.width = "0";
        // отменить появление номера карточки если мышь убрана слишком быстро
        clearTimeout(caseNumberTimeout);
        e.target
            .closest(".work__img")
            .querySelector(".work__img-case-number").style.maxHeight = "0px";
    }

    function workText() {
        return (
            <div
                className={`work__text ${
                    props.index % 2 !== 0 ? "work__right" : ""
                }`}
            >
                <div className="work__text-content">
                    <h2>{textWork.name}</h2>
                    <ul>{techList}</ul>
                    <a href={textWork.github}>Github</a> |{" "}
                    <a href={textWork.demo}>Demo</a>
                    <Button>{textGlobal.work.showmore}</Button>
                </div>
            </div>
        );
    }

    function workImg() {
        return (
            <div
                className={`work__img ${
                    props.index % 2 !== 0 ? "work__left" : ""
                }`}
            >
                <div
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onMouseLeave={(e) => handleMouseLeave(e)}
                    className="work__img-content"
                >
                    {/* оверлей нечетной карточки появляется справа налево */}
                    <div
                        style={
                            props.index % 2 !== 0 ? { right: 0 } : { left: 0 }
                        }
                        ref={overlayRef}
                        className="work__img-overlay"
                    ></div>
                    <img
                        ref={imageRef}
                        src={`./images/${textWork.img}`}
                        alt=""
                    />
                    <div className="work__img-case-number">
                        {"0" + (props.index + 1)}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <WorkStyled bg={bg}>
            <div className="work container">
                {props.index % 2 !== 0 && desktop ? (
                    <>
                        {workImg()}
                        {workText()}
                    </>
                ) : (
                    <>
                        {workText()}
                        {workImg()}
                    </>
                )}
            </div>
        </WorkStyled>
    );
};

export default Work;
