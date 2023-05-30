import styled from "styled-components";
import { colors, fonts, screen } from "../../../utils";

const modalContentColumn = "900px";

export const WorkStyled = styled.div`
    position: relative;
    padding: 0 1em;
    background-color: ${({ color, theme }) => {
        return theme.work.workThemes[color].bg;
    }};
    .modal {
        position: fixed;
        overflow-y: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 3;
        background-color: ${({ color, theme }) => {
            return theme.work.workThemes[color].bg;
        }};

        &__content {
            /* background-color: red; */
            display: flex;
            gap: 100px;
            padding: 50px;
            height: 100%;
            width: 100%;
            max-width: 1800px;
            margin: 0 auto;
            @media only screen and (max-width: ${modalContentColumn}) {
                flex-direction: column;
                /* padding-bottom: 100px; */
                min-height: 100%;
                height: unset;
            }
            @media only screen and (max-width: 530px) {
                padding: 50px 10px;
            }
        }
        p {
            white-space: pre-line;
            padding-left: 10px;
            margin-top: 30px;
            min-width: 300px;
            color: ${({ color, theme }) =>
                theme.work.workThemes[color].textColor} !important;
            @media only screen and (max-width: ${modalContentColumn}) {
                padding-left: 0;
            }
        }
        iframe {
            background-color: white;
            flex-basis: 1000px;
            min-width: 380px;
            @media only screen and (max-width: ${modalContentColumn}) {
                min-height: 70vh;
            }
            @media only screen and (max-width: 420px) {
                display: none;
            }
        }
    }
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
            color: ${({ color, theme }) =>
                theme.work.workThemes[color].textColor};
            flex: 1;
            display: flex;
            flex-direction: column;
            @media (max-width: ${screen.tablet}) {
                align-items: flex-start;
            }

            a {
                color: ${({ color, theme }) =>
                    theme.work.workThemes[color].textColor};
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
                        ${({ color, theme }) =>
                            theme.work.workThemes[color].borderColor};
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
                background: ${({ color, theme }) =>
                    theme.work.workThemes[color].overlayGradient};
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
        &__more {
            background-color: ${colors.almostBlack};
            /* position: absolute; */
            width: 100%;
            left: 0;
            display: flex;
            justify-content: center;
            padding: 3em 0;
        }
        &__details {
        }
    }
`;
