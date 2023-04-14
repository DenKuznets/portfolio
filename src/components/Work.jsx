import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { LanguageContext } from "../App";
import { colors, screen } from "../../utils";
import { useRef } from "react";
import WorkStyled from "./styled/Work.styled";

const Work = (props) => {
  const overlayRef = useRef("");
  const imageRef = useRef("");
  const textGlobal = useContext(LanguageContext);
  const textWork = textGlobal.work.works[props.index];
  const techList = textWork.tech.map((obj, index) => (
    <li key={index}>{obj}</li>
  ));
  let bg = "";
  switch (props.index) {
    case 0:
      bg = colors.violet;
      break;

    case 2:
      bg = colors.orange;
      break;

    default:
      bg = colors.white;
      break;
  }

  function handleMouseEnter(e) {
    overlayRef.current.style.width = imageRef.current.clientWidth + 2 + "px";
  }

  function handleMouseLeave(e) {
    overlayRef.current.style.width = "0";
  }

  return (
    <WorkStyled className="work" bg={bg}>
      <div
        className={`work-text ${props.index % 2 !== 0 && "translate-right"}`}
      >
        <div className="work-text__content">
          <h2>{textWork.name}</h2>
          <ul>{techList}</ul>
          <a href={textWork.github}>Github</a> |{" "}
          <a href={textWork.demo}>Demo</a>
          <Button>{textGlobal.work.showmore}</Button>
        </div>
      </div>
      <div className={`work-img ${props.index % 2 !== 0 && "translate-left"}`}>
        <div
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          className="work-img__content"
        >
          {/* оверлей нечетной карточки появляется справа налево */}
          <div
            style={props.index % 2 !== 0 ? { right: 0 } : { left: 0 }}
            ref={overlayRef}
            className="overlay"
          ></div>
          <img ref={imageRef} src={`./images/${textWork.img}`} alt="" />
          <div className="case-number">{ "0" + (props.index + 1) }</div>
        </div>
      </div>
    </WorkStyled>
  );
};

export default Work;
