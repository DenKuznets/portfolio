import React from "react";
import { LanguageContext } from "../App";
import { useContext } from "react";
import HeroStyled from "./styled/Hero.styled";
import Button from "./Button";
import { colors } from "../../utils";
import { BsArrowUpRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import {
    SlSocialVkontakte,
    SlSocialInstagram,
    SlSocialGithub,
} from "react-icons/sl";
import { IconContext } from "react-icons";
const Hero = () => {
    const text = useContext(LanguageContext);
    return (
        <HeroStyled className="hero">
            <div className="hero__text">
                <div className="hero__text-content">
                    <h1>
                        {text.hero.fname}
						{/* <br /> */}
						{" "}
                        {text.hero.lname}
                    </h1>
                    <div className="hero__text-content-h3container">
                        <hr />
                        <h3>{text.hero.profession}</h3>
                    </div>
                    <p>{text.hero.aboutme}</p>
                    <div className="hero__text-content-btns">
                        <Button bg={colors.violet}>
                            {text.hero.contactme}
                        </Button>
                        <Button>{text.header.nav.case}</Button>
                    </div>
                    <div className="hero__text-content-socials">
                        <p>
                            {text.hero.socials}
                            <SlSocialVkontakte />
                            <SlSocialInstagram />
                            <SlSocialGithub />
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero__img">
                <div className="hero__img-content">
                    <img src="./images/avatar-violet-bg.png" alt="" />
                </div>
            </div>
        </HeroStyled>
    );
};

export default Hero;
