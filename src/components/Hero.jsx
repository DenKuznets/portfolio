import React from "react";
import { useContext } from "react";
import HeroStyled from "./styled/Hero.styled";
import Link from "./BigLink";
import { colors } from "../../utils";
import { BsArrowUpRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { LanguageContext } from "../pages/styled/MainPage";
import {
    SlSocialVkontakte,
    SlSocialInstagram,
    SlSocialGithub,
} from "react-icons/sl";
import { IconContext } from "react-icons";

const Hero = () => {
    const text = useContext(LanguageContext);
    return (
        <HeroStyled>
            <div className="container hero">
                <div className="hero__text">
                    <div className="hero__text-content">
                        <h1>
                            {text.hero.fname}
                            {/* <br /> */} {text.hero.lname}
                        </h1>
                        <div className="hero__text-content-h3container">
                            <hr />
                            <h3>{text.hero.profession}</h3>
                        </div>
                        <p className="hero__text-content-aboutme">
                            {/* {text.hero.aboutme} */}
                            {/* <br /> */}
                            {text.hero.stack}
                        </p>

                        <div className="hero__text-content-btns">
                            <Link
                                href="https://t.me/DenKuznets"
                                bg={colors.violet}
                            >
                                {text.hero.contactme}
                            </Link>

                            <Link href="#work">{text.header.nav.work}</Link>
                        </div>
                        <div className="hero__text-content-socials">
                            <span>{text.hero.socials}:</span>
                            <div className="hero__text-content-socials-icons">
                                <a href="https://vk.com/id6059069">
                                    <div className="social-icon-container">
                                        <SlSocialVkontakte />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/denis_kyznecov/">
                                    <div className="social-icon-container">
                                        <SlSocialInstagram />
                                    </div>
                                </a>
                                <a href="https://github.com/DenKuznets">
                                    <div className="social-icon-container">
                                        <SlSocialGithub />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__img">
                    <div className="hero__img-content">
                        <img src="./images/avatar-violet-bg.png" alt="" />
                    </div>
                </div>
            </div>
        </HeroStyled>
    );
};

export default Hero;
