import styled from "styled-components";
import { screen } from "../../utils";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

const HeaderStyled = styled.header`
  display: flex;
  padding: 1em 3em;
  min-height: 80px;
  nav {
    display: flex;
    align-items: center;
    ul {
      @media (max-width: ${screen.px768}) {
        display: none;
      }
      display: flex;
      li {
        margin-right: 20px;
      }
    }
  }

  .nav-burger-menu {
    display: none;
    transition: all 0.2s;
    cursor: pointer;
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

const Header = (props) => {
  const navText = props.lang.header.nav;
  const listElements = [];
  for (const [key, value] of Object.entries(navText)) {
    listElements.push(
      <li key={key}>
        <a href={`#${key}`}>{value}</a>
      </li>
    );
  }

  return (
    <HeaderStyled>
      <div className="logo">
        <img src="./images/logo.png" alt="" />
        <div className="logo__logo-text">ｄｅｎ . ｋｕｚｎｅｔｓ</div>
      </div>
      <nav>
        <ul>{listElements}</ul>
        <IconContext.Provider
          value={{ size: "1.5em", className: "nav-burger-menu" }}
        >
          <div>
            <RxHamburgerMenu />
          </div>
        </IconContext.Provider>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
