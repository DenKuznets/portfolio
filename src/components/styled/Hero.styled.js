import styled from "styled-components";
import { screen } from "../../../utils";

const heroColumn = "1165px";

const HeroStyled = styled.div`
    /* margin: 5rem auto 0; */
    /* margin: 0 auto; */
    .hero {
        outline: 1px solid green;
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* gap: 150px; */
        margin: 0 auto;
        @media only screen and (max-width: ${heroColumn}) {
            /* grid-template-columns: 1fr; */
            /* gap: 40px; */
        }
        &__text {
            /* outline: 1px solid red; */
            display: flex;
            align-items: center;
            justify-content: center;
            @media only screen and (max-width: ${heroColumn}) {
                align-items: flex-end;
            }
            /* background-color: yellow; */
            &-content {
                /* outline: 1px solid red; */
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
                    }
                }
                &-aboutme {
                    margin-bottom: 4.2em;
                    /* max-width: 300px; */
                }
                &-btns {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 8.8em;
                }

                &-socials {
                    display: flex;
                    align-items: center;
                    gap: 20px;
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
                min-height: 800px;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                max-width: 700px;
                @media only screen and (max-width: ${heroColumn}) {
                    /* display: none; */
                    min-height: unset;
                }
                img {
                    border-radius: 150px 150px 0 0;
                }
            }
        }
    }
`;

export default HeroStyled;
