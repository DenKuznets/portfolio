import styled from "styled-components";
import { colors, fonts, screen } from "../../../utils";



export const WorkStyled = styled.div`
    position: relative;
    padding: 0 1em;
    background-color: ${({ color, theme }) => {
        return theme.work.workThemes[color].bg;
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

            li {
                border: 1px dotted
                    ${({ color, theme }) =>
                        theme.work.workThemes[color].borderColor};
            }

            &-more {
                margin-top: 2em;
                width: fit-content;
                color: ${({ color, theme }) =>
                    theme.work.workThemes[color].more} !important;
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
    }
`;

