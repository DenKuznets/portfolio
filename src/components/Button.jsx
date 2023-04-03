import React from "react";
import { IconContext } from "react-icons";
import { BsArrowUpRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import styled from "styled-components";
import { colors, screen } from "../../utils";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => (bg ? bg : "white")};
  border: none;
  cursor: pointer;
  height: 70px;
  border-radius: 15px;
  color: ${({ bg }) => (bg === colors.violet ? "white" : colors.almostBlack)};
  font-weight: ${({ bg }) => (bg === colors.violet ? 700 : 900)};
  padding: 0 2.5em;
  font-size: 1rem;
  transition: all 0.2s;
  outline: transparent 1px solid;
  white-space: nowrap;

  @media (max-width: ${screen.px480}) {
    font-size: 0.8rem;
  }
  &:hover {
    color: ${({ bg }) => (bg === colors.violet ? "yellow" : ``)};
    outline: ${({ bg }) =>
      bg === colors.violet ? "none" : `1px solid ${colors.almostBlack}`};
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled bg={props.bg}>
      {props.children}
      {props.bg === colors.violet ? (
        <i className="small-icon">
          <IconContext.Provider
            value={{
              size: "1.8em",
            }}
          >
            <div>
              <CiLocationArrow1 />
            </div>
          </IconContext.Provider>
        </i>
      ) : (
        <i className="small-icon">
          <IconContext.Provider
            value={{
              size: "1.2em",
              color: colors.almostBlack,
            }}
          >
            <div>
              <BsArrowUpRight />
            </div>
          </IconContext.Provider>
        </i>
      )}
    </ButtonStyled>
  );
};

export default Button;
