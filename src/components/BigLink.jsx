import React from "react";
import { IconContext } from "react-icons";
import { BsArrowUpRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import styled from "styled-components";
import { colors, screen } from "../../utils";
import { Link } from "react-router-dom";

const BigLinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    /* background-color: ${({ bg }) => (bg ? bg : "white")}; */
    border: none;
    cursor: pointer;
    height: 70px;
    border-radius: 15px;
    color: ${({ theme }) => theme.global.bigLink.textColor};
    font-weight: 900;
    padding: 0 2.5em;
    font-size: 1rem;
    transition: all 0.2s;
    outline: transparent 1px solid;
    white-space: nowrap;
    text-transform: capitalize;
    width: fit-content;

    @media (max-width: ${screen.px480}) {
        font-size: 0.8rem;
    }
    &:hover {
        outline: 1px solid ${({ theme }) => theme.global.bigLink.hover};
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

const BigLink = (props) => {
    return (
        <BigLinkStyled
            className={props.className}
            onClick={props.onClick}
            to={props.to}
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
        </BigLinkStyled>
    );
};

export default BigLink;
