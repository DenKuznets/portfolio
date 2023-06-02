import Link from "./Link";
import { useContext, useState } from "react";
import { useRef } from "react";
import { WorkStyled } from "./styled/Work.styled";
import { LanguageContext } from "../pages/styled/MainPage";
import useMediaQuery from "../hooks/useMediaQuery";
import { createPortal } from "react-dom";

const Work = (props) => {
    const overlayRef = useRef("");
    const imageRef = useRef("");
    const textGlobal = useContext(LanguageContext);
    const textWork = textGlobal.work.works[props.index];
    const techList = textWork.tech.map((obj, index) => (
        <li key={index}>{obj}</li>
    ));
    const desktop = useMediaQuery("(min-width: 768px)");
    const [modalActive, setModalActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    let caseNumberTimeout;

    function handleMouseEnter(e) {
        overlayRef.current.style.width =
            imageRef.current.clientWidth + 2 + "px";
        //показать номер карточки после появления оверлея
        caseNumberTimeout = setTimeout(() => {
            e.target
                .closest(".work__img")
                .querySelector(".work__img-case-number").style.maxHeight =
                "300px";
        }, 350);
    }

    function handleMouseLeave(e) {
        overlayRef.current.style.width = "0";
        // отменить появление номера карточки если мышь убрана слишком быстро
        clearTimeout(caseNumberTimeout);
        e.target
            .closest(".work__img")
            .querySelector(".work__img-case-number").style.maxHeight = "0px";
    }

    function showModal() {
        document.body.style.overflow = "hidden";
        setModalActive(true);
        setScrollY(window.scrollY);
    }

    function hideModal() {
        document.body.style.overflow = "auto";
        setModalActive(false);
        // вернуть положение страницы до открытия портала. Без setTimeout не работает. Снимаем плавную прокрутку с документа, что бы возврат положения был незаметен для пользователя. Затем возвращаем ее назад.
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = "auto";
            window.scrollTo(0, scrollY);
            document.documentElement.style.scrollBehavior = "smooth";
        }, 1);
    }

    function workText() {
        return (
            <div
                className={`work__text ${
                    props.index % 2 !== 0 ? "work__text--right" : ""
                }`}
            >
                <div className="work__text-content">
                    <h2>{textWork.name}</h2>
                    <ul>{techList}</ul>
                    <a href={textWork.github}>Github</a> |{" "}
                    <a href={textWork.demo}>Demo</a>
                    {modalActive && <p>{textWork.description}</p>}
                    <Link
                        className={`work__text-more ${modalActive ? "btn-back" : ""}`}
                        onClick={modalActive ? hideModal : showModal}
                    >
                        {modalActive
                            ? textGlobal.work.backButton
                            : textGlobal.work.showmore}
                    </Link>
                </div>
            </div>
        );
    }

    function workImg() {
        return (
            <div
                className={`work__img ${
                    props.index % 2 !== 0
                        ? "work__img--left"
                        : "work__img--right"
                }`}
                onClick={() => showModal()}
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

    return modalActive ? (
        createPortal(
            <WorkStyled color={props.workColor}>
                <div className="modal">
                    <div className="modal__content">
                        {workText()}
                        <div className="live-preview">
                            <h2>Live Preview</h2>
                            <iframe src={textWork.demo} title={textWork.name}>
                                IFRAME
                            </iframe>
                        </div>
                    </div>
                </div>
            </WorkStyled>,
            document.body
        )
    ) : (
        <WorkStyled color={props.workColor}>
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
