import React from "react";
import { IconContext } from "react-icons";
import { BsArrowUpRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import styled from "styled-components";
import { colors, screen } from "../../utils";

const LinkStyled = styled.a`
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
    text-transform: capitalize;

    @media (max-width: ${screen.px480}) {
        font-size: 0.8rem;
    }
    &:hover {
        color: ${({ bg }) => (bg === colors.violet ? "yellow" : ``)};
        outline: ${({ bg }) =>
            bg === colors.violet ? "none" : `1px solid ${colors.almostBlack}`};
        .small-icon {
            transform: ${({ className }) =>
                className?.includes("btn-back")
                    ? "rotate(-135deg)"
                    : "rotate(45deg)"};
        }
    }

    &:active {
        transform: scale(0.95);
    }

    .small-icon {
        transition: all 0.3s ease;
        div {
            display: flex;
            align-items: center;
        }
        margin-left: 0.6em;
    }
`;

const Link = (props) => {
    return (
        <LinkStyled
            className={props.className}
            onClick={props.onClick}
            bg={props.bg}
            href={props.href}
        >
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
        </LinkStyled>
    );
};

export default Link;
