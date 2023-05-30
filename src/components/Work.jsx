import Button from "./Button";
import { createContext, useContext, useState } from "react";
import { useRef } from "react";
import { WorkStyled } from "./styled/Work.styled";
import { LanguageContext } from "../pages/styled/MainPage";
import useMediaQuery from "../hooks/useMediaQuery";
import { VscChromeClose } from "react-icons/vsc";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { IconContext } from "react-icons";
export const IndexContext = createContext(0);

const Work = (props) => {
    // console.log(props.workColor);
    const overlayRef = useRef("");
    const imageRef = useRef("");
    const textGlobal = useContext(LanguageContext);
    const textWork = textGlobal.work.works[props.index];
    const techList = textWork.tech.map((obj, index) => (
        <li key={index}>{obj}</li>
    ));
    const desktop = useMediaQuery("(min-width: 768px)");
    const [modalActive, setModalActive] = useState(false);
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
    }

    function hideModal() {
        document.body.style.overflow = "auto";
        setModalActive(false);
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
                    <Button className={modalActive && 'btn-back'} onClick={modalActive ? hideModal : showModal}>
                        {modalActive
                            ? textGlobal.work.backButton
                            : textGlobal.work.showmore}
                    </Button>
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

    function workStyled() {
        return (
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
    }

    return modalActive
        ? createPortal(
              <WorkStyled color={props.workColor}>
                  <div className="modal">
                      <div className="modal__content">
                          {workText()}
                          <iframe
                              src={textWork.demo}
                              title={textWork.name}
                          ></iframe>
                      </div>
                  </div>
              </WorkStyled>,
              document.body
          )
        : workStyled();
};

export default Work;
