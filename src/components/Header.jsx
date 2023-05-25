import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useState, useContext } from "react";
import HeaderStyled from "./styled/Header.styled";
import { LanguageContext } from "../pages/styled/MainPage";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const listElements = [];
  const textContext = useContext(LanguageContext);
  
  for (const [key, value] of Object.entries(textContext.header.nav)) {
    listElements.push(
      <li key={key}>
        <a href={`#${key}`}>{value}</a>
      </li>
    );
  }

  return (
      <HeaderStyled>
          <div className="header__logo">
              <img src="./images/logo.png" alt="" />
              <div className="header__logo-text">ｄｅｎ . ｋｕｚｎｅｔｓ</div>
          </div>
          <nav>
              <ul className={showMenu ? "menu-open" : ""}>{listElements}</ul>
              <IconContext.Provider
                  value={{
                      size: "1.5em",
                      className: `nav__burger-menu ${
                          showMenu ? "nav__burger-menu--open" : ""
                      }`,
                  }}
              >
                  <div
                      onClick={() => {
                          setShowMenu(!showMenu);
                      }}
                  >
                      <RxHamburgerMenu />
                  </div>
              </IconContext.Provider>
          </nav>
      </HeaderStyled>
  );
};

export default Header;
