import styled from "styled-components";
import { screen } from "../../../utils";

const HeroStyled = styled.div`
    $heroBtnsColumn: "580px";
    display: flex;
    /* margin: 5rem auto 0; */
    gap: 5%;
    min-height: 800px;
    max-width: 1320px;
    align-items: center;
    @media (max-width: 1065px) {
        flex-direction: column;
        gap: 50px;
        margin-top: 0;
    }

    .hero__text {
        display: flex;
        /* flex: 1; */
        justify-content: flex-end;
        @media (max-width: 1065px) {
            align-items: center;
            justify-content: center;
        }
        &-content {
            /* outline: 1px solid black; */
            height: 100%;
            /* padding-top: 7em; */
            display: flex;
            flex-direction: column;

            @media (max-width: $heroBtnsColumn) {
                align-items: center;
                padding-top: 0;
            }

			&-h3container{
				display: flex;
				align-items: center;
				margin-bottom: 2em;
			}

            &-btns {
                display: flex;
                @media only screen and (max-width: $heroBtnsColumn) {
                    flex-direction: column-reverse;
                }
            }
        }
        hr {
            width: 3em;
            margin-right: 1em;
        }
    }   

    .hero-img {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: ${screen.px992}) {
            align-items: center;
            justify-content: center;
        }
    }

    .hero-img__content {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        img {
            z-index: -1;
            height: auto;
            width: 600px;
            max-width: 100%;
            border-radius: 70px 10px;
            box-shadow: rgba(0, 0, 0, 0.2) -10px 13px 15px 3px;
            @media (max-width: ${screen.px992}) {
                position: relative;
                z-index: 1;
                border-radius: 5px;
            }
        }
    }

    .hero__text-h3-container {
        display: flex;
        align-items: center;
        margin-bottom: 2em;
    }

    .hero__text-buttons-container {
        justify-content: flex-start;
        gap: 10px;
        @media (max-width: ${screen.px480}) {
            width: 100%;
            position: relative;
            z-index: 1;
            border-radius: 5px 5px 40px 40px;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export default HeroStyled;
