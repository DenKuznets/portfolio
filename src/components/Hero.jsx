import React from "react";
import { LanguageContext } from "../App";
import { useContext } from "react";
import HeroStyled from "./styled/Hero.styled";
import Button from "./Button";
import { colors } from "../../utils";
import { BsArrowUpRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { IconContext } from "react-icons";
const Hero = () => {
  const text = useContext(LanguageContext);
  // console.log(text);
  return (
    <HeroStyled className="hero">
      <div className="hero-text">
        <h1>Denis Kuznetsov</h1>
        <div className="container-small">
          <hr />
          <h3>Front-end developer</h3>
        </div>
        <p>I build things for web with react & styled-components.</p>
        <div className="flex">
          <Button bg={colors.violet}>
            Say Hello
            <i className="small-icon">
              <IconContext.Provider
                value={{
                  size: "1.8em",
                }}
              >
                <div>
                  <CiLocationArrow1 />
                </div>
              </IconContext.Provider>
            </i>
          </Button>
          <Button>
            My Works
            <i className="small-icon">
              <IconContext.Provider
                value={{
                  size: "1.2em",
                  color: colors.almostBlack,
                }}
              >
                <div>
                  <BsArrowUpRight />
                </div>
              </IconContext.Provider>
            </i>
          </Button>
        </div>
      </div>
      <div className="hero-img">
        <img src="./images/avatar.jpg" alt="" />
      </div>
    </HeroStyled>
  );
};

export default Hero;
