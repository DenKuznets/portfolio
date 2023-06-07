import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useState } from "react";
import HeaderStyled from "./styled/Header.styled";
import useLocalization from "../hooks/useLocalization";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const listElements = [];
    const textGlobal = useLocalization().local;
    

    for (const [key, value] of Object.entries(textGlobal.header.nav)) {
        listElements.push(
            <li key={key}>
                <a onClick={() => setShowMenu(!showMenu)} href={`#${key}`}>
                    {value}
                </a>
            </li>
        );
    }

    return (
        <HeaderStyled>
            <div className="header">
                <div className="header__logo">
                    <a href="#">
                        <img src="./images/logo.png" alt="" />
                        <div className="header__logo-text">
                            ｄｅｎ . ｋｕｚｎｅｔｓ
                        </div>
                    </a>
                </div>
                <nav>
                    <ul className={showMenu ? "nav__menu--open" : ""}>
                        {listElements}
                    </ul>
                    <IconContext.Provider
                        value={{
                            size: "1.5em",
                            className: `nav__menu-burger ${
                                showMenu ? "nav__menu-burger--open" : ""
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
            </div>
        </HeaderStyled>
    );
};

export default Header;
