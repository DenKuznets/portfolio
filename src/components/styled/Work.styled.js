import styled from "styled-components";
import { colors, fonts, screen } from "../../../utils";

const textAndBorderColor = (themeColor, theme) => {
    switch (themeColor) {
        case "violet":
            return colors.white;
        case "yellow":
            return colors.almostBlack;
        default:
            return theme.work.defaultTextColor;
    }
};

const WorkStyled = styled.div`
    position: relative;
    padding: 0 1em;
    /* background-color: ${({ bg }) => bg}; */
    background-color: ${({ themeColor, theme }) => {
        switch (themeColor) {
            case "violet":
                return colors.violet;
            case "yellow":
                return colors.yellow;
            default:
                return theme.work.defaultBG;
        }
    }};
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
            color: ${({ themeColor, theme }) =>
                textAndBorderColor(themeColor, theme)};
            flex: 1;
            display: flex;
            flex-direction: column;
            @media (max-width: ${screen.tablet}) {
                align-items: flex-start;
            }

            a {
                color: ${({ themeColor, theme }) =>
                    textAndBorderColor(themeColor, theme)};
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
                    border: 1px dotted
                        ${({ themeColor, theme }) =>
                            textAndBorderColor(themeColor, theme)};
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
            position: relative;

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
                /* z-index: 1; */
                width: 0;
                height: 100%;
                position: absolute;
                top: 0;
                transition: all 0.35s ease-in;
                opacity: 0.8;
                background: ${({ themeColor, theme }) => {
                    switch (themeColor) {
                        case "violet":
                            return "linear-gradient(90deg, rgba(99, 68, 198, 1) 0%, rgba(82, 96, 115, 1) 100%)";
                        case "yellow":
                            return "linear-gradient(90deg, rgba(255,196,72,1) 0%, rgba(29,29,0,0.97) 100%)";
                        default:
                            return theme.work.defaultGradient;
                    }
                }};
            }

            &-case-number {
                position: absolute;
                min-height: 0;
                max-height: 0;
                overflow: hidden;
                top: -25px;
                left: 25px;
                color: white;
                font-family: ${fonts.leagueSpartan};
                font-weight: 800;
                font-size: 10rem;
                transition: all 0.3s ease;
                opacity: 0.7;
                @media only screen and (max-width: ${screen.mobileM}) {
                    font-size: 6rem;
                    top: 0;
                }
            }
        }
    }
`;

export default WorkStyled;
