import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { LanguageContext } from "../App";
import { colors, screen } from "../../utils";
import { useRef } from "react";

const textAndBorderColor = (color) => {
  switch (color) {
    case colors.violet:
    case colors.orange:
      return colors.white;
    case colors.white:
      return colors.almostBlack;
    default:
      break;
  }
};

const gradientColor = (color) => {
  switch (color) {
    case colors.violet:
      return "linear-gradient(90deg, rgba(99, 68, 198, 1) 0%, rgba(82, 96, 115, 1) 100%)";
    case colors.orange:
      return "linear-gradient(90deg, rgba(242,100,64, 1) 0%, rgba(82,96,115,1) 100%)";
    default:
      return "linear-gradient(90deg, rgba(82, 96, 115, 1) 0%, rgba(256, 256, 256, 1) 100%)";
  }
};

const WorkStyled = styled.div`
  position: relative;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  gap: 1em;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (max-width: ${screen.px768}) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2em;
    padding-bottom: 2em;
    gap: 2em;
  }

  .work-text {
    color: ${({ bg }) => textAndBorderColor(bg)};
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: ${screen.px768}) {
      align-items: flex-start;
    }

    a {
      color: ${({ bg }) => textAndBorderColor(bg)};
    }
    h2 {
      margin-bottom: 1em;
    }
    ul {
      display: flex;
      margin-bottom: 1em;
      flex-wrap: wrap;
      li {
        margin-right: 1em;
        border: 1px dotted ${({ bg }) => textAndBorderColor(bg)};
        padding: 0.5em 1em;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1em;
      }
    }
    button {
      margin-top: 2em;
    }
  }

  .work-img {
    flex: 1;
    height: 450px;
  }

  .work-img__content {
    position: relative;
    overflow: hidden;
    width: 100%;
    cursor: pointer;

    img {
      border: 1px solid ${colors.almostBlack};
      width: 100%;
      height: 450px;
      object-fit: cover;
      @media (max-width: ${screen.px768}) {
        max-width: unset;
        height: auto;
      }
    }
  }

  .overlay {
    z-index: 1;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.35s ease-in;
    opacity: 0.8;
    background: ${({ bg }) => gradientColor(bg)};
  }

  /* left-right swap positions */
  .translate-right {
    transform: translate(50%);
    position: absolute;
    width: 45%;
    margin-left: 4em;
    align-items: flex-start;

    @media (max-width: ${screen.px768}) {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      transform: none;
      position: relative;
      width: 100%;
      text-align: end;
      .work-text__content {
        button {
          margin-left: auto;
        }
        ul {
          justify-content: flex-end;
        }
        li {
          margin-right: 0;
          margin-left: 1em;
        }
      }
    }
  }

  .translate-left {
    position: absolute;
    width: 45%;
    transform: translate(-55%);
    @media (max-width: ${screen.px768}) {
      transform: none;
      position: relative;
      width: 100%;
    }
  }

  .case-number {
    position: absolute;
    top: 0;
    z-index: 5;
    color: white;
    font-size: 3rem;
    font-family: "Raleway", sans-serif;
  }
`;

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
