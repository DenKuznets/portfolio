import styled from "styled-components";
import { screen } from "../../../utils";

const textContentHeight100 = "1063px";
const heroImageNone = "967px";
const heroTextContentCenterAll = "536px";

const HeroStyled = styled.div`
    .hero {
        outline: 1px solid green;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        margin: 0 auto;

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
                }
                
                &-h3container {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 1.8em;
                    hr {
                        width: 80px;
                        margin: 0;
                        margin-right: 14px;
                        @media only screen and (max-width: 322px) {
                            width: 50px;
                        }
                    }
                    h3{
                        text-align: start;
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
                    border-radius: 150px 150px 0 0;
                }
            }
        }
    }
`;

export default HeroStyled;
