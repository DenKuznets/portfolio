import styled from "styled-components";
import { screen } from "../../../utils";

const HeroStyled = styled.div`
    $heroBtnsColumn: "580px";
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    /* margin: 5rem auto 0; */
    margin: 0 auto;
    .hero__text {
        outline: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        &-content {
            outline: 1px solid red;
            h1{
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
            }

            &-socials{
                p{
                    color: {};
                }
            }
        }
    }
    .hero__img {
        &-content {
            max-width: 700px;
            img {
                border-radius: 150px 150px 0 0;
            }
        }
    }
`;

export default HeroStyled;
