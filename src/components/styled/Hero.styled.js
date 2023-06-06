import styled from "styled-components";
import { screen } from "../../../utils";

const textContentHeight100 = "1063px";
const heroImageNone = "967px";
const heroTextContentCenterAll = "536px";

const HeroStyled = styled.div`
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
            /* background-color: red; */

            &-content {
                max-width: 700px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                max-width: 700px;
                @media only screen and (max-width: ${heroImageNone}) {
                    display: none;
                }
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

    /* @keyframes morphing {
        0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
        }
        25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
        }
        50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
            box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
        }
        75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
        }
    } */
`;

export default HeroStyled;
