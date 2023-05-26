import styled from "styled-components";
import { colors, screen } from "../../../utils";

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
        case colors.yellow:
            return "linear-gradient(90deg, rgba(255,196,72,1) 0%, rgba(29,29,0,0.97) 100%)";
        default:
            return "linear-gradient(90deg, rgba(82, 96, 115, 1) 0%, rgba(256, 256, 256, 1) 100%)";
    }
};

const WorkStyled = styled.div`
    position: relative;
    padding: 0 1em;
    background-color: ${({ bg }) => bg};
    .work {
        /* outline: 1px solid black; */
        max-width: 1200px;
        min-height: 500px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        margin: 0 auto;

        @media (max-width: ${screen.tablet}) {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 2em;
            padding-bottom: 2em;
            gap: 2em;
        }
        &__text {
            color: ${({ bg }) => textAndBorderColor(bg)};
            flex: 1;
            display: flex;
            flex-direction: column;
            @media (max-width: ${screen.tablet}) {
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
        &__img {
            flex: 1;
            height: 450px;

            &-content {
                position: relative;
                overflow: hidden;
                width: 100%;
                cursor: pointer;

                img {
                    border: 1px solid ${colors.almostBlack};
                    width: 100%;
                    height: 450px;
                    object-fit: cover;
                    @media (max-width: ${screen.tablet}) {
                        max-width: unset;
                        height: auto;
                    }
                }
            }
            &-overlay {
                z-index: 1;
                width: 0;
                height: 100%;
                position: absolute;
                top: 0;
                transition: all 0.35s ease-in;
                opacity: 0.8;
                background: ${({ bg }) => gradientColor(bg)};
            }

            &-case-number {
                position: absolute;
                min-height: 0;
                max-height: 0;
                overflow: hidden;
                top: 0;
                left: 20px;
                z-index: 5;
                color: white;
                font-size: 3rem;
                font-family: "Raleway", sans-serif;
                transition: all 0.3s ease;
            }
        }
    }
`;

export default WorkStyled;
