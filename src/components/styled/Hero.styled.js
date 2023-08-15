import styled from "styled-components";
import { colors } from "../../js/colors";
import { screen } from "../../js/screen";

const textContentHeight100 = "1063px";
const heroImageNone = "967px";
const heroTextContentCenterAll = "536px";

const HeroStyled = styled.section`
    .hero {
        /* outline: 1px solid green; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        margin: 0 auto;
        max-width: 1800px;
        margin-bottom: 100px;

        @media only screen and (max-width: ${heroImageNone}) {
            grid-template-columns: 1fr;
            margin-top: 5rem;
        }
        @media only screen and (max-width: ${heroTextContentCenterAll}) {
            margin-top: 2rem;
        }
        &__text {
            /* outline: 1px solid red; */
            /* background-color: yellow; */
            display: flex;
            align-items: center;
            justify-content: center;
            &-content {
                /* outline: 1px solid red; */
                display: flex;
                flex-direction: column;
                @media only screen and (max-width: ${textContentHeight100}) {
                    height: 100%;
                }
                @media only screen and (max-width: ${heroTextContentCenterAll}) {
                    align-items: center;
                    text-align: center;
                }
                h1 {
                    margin-bottom: 0.1em;
                    text-align: start;
                }

                &-profession {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 1.8em;
                    @media only screen and (max-width: ${heroTextContentCenterAll}) {
                        align-self: flex-end;
                    }
                    hr {
                        width: 80px;
                        margin: 0;
                        margin-right: 14px;
                        @media only screen and (max-width: 322px) {
                            width: 50px;
                        }
                    }
                    span {
                        font-size: 1.5rem;
                        font-weight: 500;
                        @media (max-width: ${screen.mobileL}) {
                            font-size: 1rem;
                        }
                    }
                }

                &-aboutme {
                    margin-bottom: 4.2em;
                    text-transform: uppercase;
                }

                &-btns {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 8.8em;
                    @media only screen and (max-width: ${textContentHeight100}) {
                        margin-bottom: auto;
                    }
                    @media only screen and (max-width: ${heroImageNone}) {
                        margin-bottom: 1.8em;
                    }
                    @media only screen and (max-width: ${heroTextContentCenterAll}) {
                        flex-direction: column;
                        align-items: center;
                    }

                    &-telegram {
                        display: flex;
                        align-items: center;
                        background-color: ${colors.violet};
                        border: none;
                        cursor: pointer;
                        height: 70px;
                        border-radius: 15px;
                        color: ${colors.white};
                        font-weight: 700;
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
                            color: yellow;
                            outline: none;
                            .small-icon {
                                transform: rotate(45deg);
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
                    }
                }

                &-socials {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    @media only screen and (max-width: ${heroTextContentCenterAll}) {
                        flex-direction: column;
                    }

                    span {
                        color: ${({ theme }) => theme.hero.socialsTextColor};
                    }
                    &-icons {
                        display: flex;
                        gap: 20px;
                    }
                }
            }
        }

        &__img {
            @media only screen and (max-width: ${heroImageNone}) {
                display: none;
            }
            &-content {
                max-width: 700px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                max-width: 700px;
                img {
                    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
                    animation: morphing 10s infinite;
                    &:hover {
                        animation-play-state: paused;
                    }
                }
            }
        }
    }
`;

export default HeroStyled;
