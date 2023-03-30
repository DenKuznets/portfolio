import styled from "styled-components";
import { screen } from "../../../utils";

const HeaderStyled = styled.header`
  display: flex;
  padding: 1em 3em;
  min-height: 80px;
  nav {
    display: flex;
    align-items: center;
    ul {
      transition: all 0.4s;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.header.bg};
      @media (max-width: ${screen.px768}) {
        position: fixed;
        width: 100%;
        flex-direction: column;
        top: 0;
        left: 0;
        min-height: 0;
        max-height: 0;
        overflow: hidden;
        &.menu-open {
          min-height: 100vh;
        }
        a {
          opacity: 1;
        }
      }
      li {
        margin-right: 20px;
      }
    }
  }

  .nav-burger-menu {
    position: relative;
    display: none;
    z-index: 999;
    transition: all 0.4s;
    cursor: pointer;
    &.open {
      transform: rotate(90deg);
    }
    @media (max-width: ${screen.px768}) {
      display: block;
    }

    &:hover {
      color: ${({ theme }) => theme.header.burgerHover};
      scale: 1.05;
    }
  }
  .logo {
    margin-right: auto;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-transform: lowercase;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 3em;
      margin-right: 1em;
    }
  }

  .logo__logo-text {
    font-size: 1.5rem;
    @media (max-width: ${screen.px480}) {
      font-size: 1rem;
    }
  }
`;

export default HeaderStyled;