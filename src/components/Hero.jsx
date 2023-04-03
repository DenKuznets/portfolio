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
  return (
    <HeroStyled className="hero">
      <div className="hero-text">
        <div className="hero-text__content">
          <h1>
            {text.hero.fname}
            <br />
            {text.hero.lname}
          </h1>
          <div className="hero-text__h3-container">
            <hr />
            <h3>{text.hero.profession}</h3>
          </div>
          <p>{text.hero.aboutme}</p>
          <div className="hero-text__buttons-container flex">
            <Button bg={colors.violet}>
              {text.hero.contactme}
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
              {text.header.nav.case}
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
      </div>
      <div className="hero-img">
        <div className="hero-img__content">
          <img src="./images/avatar1.jpg" alt="" />
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
