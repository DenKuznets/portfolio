import styled from "styled-components";
import { screen } from "../../../utils";

const HeroStyled = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 5%;
  max-width: 800px;
  justify-content: center;
  @media (max-width: ${screen.px768}) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .hero-text {
    max-width: 315px;
    flex: 1;
    h1 {
      font-size: 3rem;
      line-height: 0.9;
      margin-bottom: 0.4em;
    }

    hr {
      width: 3em;
      margin-right: 1em;
    }

    h3 {
      flex: 1;
    }
    p {
      opacity: 0.8;
      margin-bottom: 4em;
    }
  }

  .hero-img {
    flex: 1;
    max-width: 340px;
    display: flex;
    justify-content: center;
    img {
      max-height: 350px;
      border-radius: 70px 10px;
      box-shadow: rgba(0, 0, 0, 0.2) -10px 13px 15px 3px;
    }
  }

  .container-small {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }

  .flex {
    justify-content: space-between;
  }
`;

export default HeroStyled;
