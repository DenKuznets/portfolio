import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { LanguageContext } from "../App";

const WorkStyled = styled.div`
  position: relative;
  
`;

const Work = (props) => {
  const textGlobal = useContext(LanguageContext);
  const textWork = textGlobal.work.works[props.index];
  const techList = textWork.tech.map((obj, index) => (
    <li key={index}>{obj}</li>
  ));
  return (
    <WorkStyled img={textWork.img}>
      <img src={`./images/${textWork.img}`} alt="" />
      <h2>{textWork.name}</h2>
      <ul>{techList}</ul>
      <a href={textWork.github}>Github</a> | <a href={textWork.demo}>Demo</a>
      <Button>{textGlobal.work.showmore}</Button>
    </WorkStyled>
  );
};

export default Work;
