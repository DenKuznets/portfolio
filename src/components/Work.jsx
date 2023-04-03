import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { LanguageContext } from "../App";
import { colors, screen } from "../../utils";

const textBorderColor = (color) => {
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

const WorkStyled = styled.div`
  position: relative;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  gap: 1em;

  @media (max-width: ${screen.px768}) {
    flex-direction: column;
    padding-top: 2em;
    padding-bottom: 2em;
    gap: 2em;
  }

  a,
  .work-text {
    color: ${({ bg }) => textBorderColor(bg)};
  }
  .work-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h2 {
      margin-bottom: 1em;
    }
    ul {
      display: flex;
      margin-bottom: 1em;
      flex-wrap: wrap;
      li {
        margin-right: 1em;
        border: 1px dotted ${({ bg }) => textBorderColor(bg)};
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
    max-height: 300px;
    overflow: hidden;
    img {
      border: 1px solid ${colors.almostBlack};
      max-width: 500px;
      width: 100%;
      @media (max-width: ${screen.px768}) {
        max-width: unset;
      }
    }
  }
`;

const Work = (props) => {
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

  return (
    <WorkStyled className="work" bg={bg}>
      <div className="work-text">
        <div className="work-text__content">
          <h2>{textWork.name}</h2>
          <ul>{techList}</ul>
          <a href={textWork.github}>Github</a> |{" "}
          <a href={textWork.demo}>Demo</a>
          <Button>{textGlobal.work.showmore}</Button>
        </div>
      </div>
      <div className="work-img">
        <img src={`./images/${textWork.img}`} alt="" />
      </div>
    </WorkStyled>
  );
};

export default Work;
