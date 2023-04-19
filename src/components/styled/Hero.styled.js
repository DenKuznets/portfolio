import styled from "styled-components";
import { screen } from "../../../utils";

const px580 = '580px';

const HeroStyled = styled.div`
  display: flex;
  margin: 5rem auto 0;
  gap: 5%;
  min-height: 800px;

  @media (max-width: 1065px) {
    flex-direction: column;
    gap: 50px;
  }

  .hero-text,
  .hero-img {
    flex: 1;
    outline: 1px solid red;
  }

  .hero-text {
    display: flex;
    /* flex: 1; */
    justify-content: flex-end;
    @media (max-width: 1065px) {
      align-items: center;
      justify-content: center;
    }
  }

  .hero-text__content {
    /* outline: 1px solid black; */
    height: 100%;
    padding-top: 7em;
    display: flex;
    flex-direction: column;

    @media (max-width: ${px580}) {
      align-items: center;
      padding-top: 0;
    }

    h1 {
      font-size: 4.5rem;
      line-height: 1.1;
      margin-bottom: 0.4em;
      text-transform: capitalize;
      @media (max-width: ${screen.px480}) {
        font-size: 3rem;
      }
    }

    hr {
      width: 3em;
      margin-right: 1em;
    }

    h3 {
      font-size: 1.5rem;
      flex: 1;
      font-weight: 500;
      @media (max-width: ${screen.px480}) {
        font-size: 1rem;
      }
    }
    p {
      opacity: 0.8;
      margin-bottom: 4em;
      max-width: 300px;

      @media (max-width: ${screen.px992}) {
        max-width: 300px;
      }

      @media only screen and (max-width: ${px580}) {
        margin-bottom: 1em;
      }
      @media (max-width: ${screen.px480}) {
        font-size: 0.8rem;
      }
    }
    button {
      /* text-transform: capitalize; */
    }
  }

  .hero-text__buttons-container {
    @media only screen and (max-width: ${px580}) {
      flex-direction: column-reverse;
    }
  }

  .hero-text__showcase-btn {
    @media only screen and (max-width: ${px580}) {
      margin-bottom: 2em;
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
        border-radius: 5px 5px 40px 40px;
      }
    }
  }

  .hero-text__h3-container {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }

  .hero-text__buttons-container {
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
