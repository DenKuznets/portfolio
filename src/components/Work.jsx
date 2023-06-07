import BigLink from "./BigLink";
import { useRef } from "react";
import { WorkStyled } from "./styled/Work.styled";
import useMediaQuery from "../hooks/useMediaQuery";
import TechList from "./TechList";
import useLocalization from "../hooks/useLocalization";

const Work = (props) => {
    const overlayRef = useRef("");
    const imageRef = useRef("");
    const textGlobal = useLocalization().local;
    const textWork = textGlobal.work.works[props.id];

    const desktop = useMediaQuery("(min-width: 768px)");
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

    function workText() {
        return (
            <div
                className={`work__text ${
                    props.id % 2 !== 0 ? "work__text--right" : ""
                }`}
            >
                <div className="work__text-content">
                    <h3>{textWork.name}</h3>
                    <TechList list={textWork.tech} />
                    <div>
                        <a href={textWork.github}>Github</a> |{" "}
                        <a href={textWork.demo}>Demo</a>
                    </div>

                    <BigLink to={`allworks/${props.id}`} className="work__text-more">
                        {textGlobal.showmore}
                    </BigLink>
                </div>
            </div>
        );
    }

    function workImg() {
        return (
            <div
                className={`work__img ${
                    props.id % 2 !== 0
                        ? "work__img--left"
                        : "work__img--right"
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
                            props.id % 2 !== 0 ? { right: 0 } : { left: 0 }
                        }
                        ref={overlayRef}
                        className="work__img-overlay"
                    ></div>
                    <img
                        ref={imageRef}
                        src={`./images/works-preview/${textWork.img}`}
                        alt=""
                    />
                    <div className="work__img-case-number">
                        {"0" + (props.id + 1)}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <WorkStyled color={props.workColor}>
            <div className="work container">
                {props.id % 2 !== 0 && desktop ? (
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
