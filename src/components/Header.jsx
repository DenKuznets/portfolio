import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useState } from "react";
import HeaderStyled from "./styled/Header.styled";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
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
        <ul className={showMenu ? "menu-open" : ""}>{listElements}</ul>
        <IconContext.Provider
          value={{
            size: "1.5em",
            className: `nav-burger-menu ${showMenu ? "open" : ""}`,
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
