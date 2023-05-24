import styled from "styled-components";
import { screen } from "../../../utils";

const HeroStyled = styled.div`
    $heroBtnsColumn: "580px";
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    /* margin: 5rem auto 0; */
    margin: 0 auto;
    .hero__text{
        outline: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        &-content {
            outline: 1px solid red;
        }
    }
    .hero__img{
        &-content {
            max-width: 700px;
            img{
                border-radius: 150px 150px 0 0;
            }
        }
    }
`;

export default HeroStyled;
