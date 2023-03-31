import styled from "styled-components";

const HeroStyled = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 5%;
  
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
