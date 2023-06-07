import HeroStyled from "./styled/Hero.styled";
import BigLink from "./BigLink";
import {
    SlSocialVkontakte,
    SlSocialInstagram,
    SlSocialGithub,
} from "react-icons/sl";
import { IconContext } from "react-icons";
import { CiLocationArrow1 } from "react-icons/ci";
import useLocalization from "../hooks/useLocalization";

const Hero = () => {
    const textGlobal = useLocalization().local;
    return (
        <HeroStyled id="hero">
            <div className="container hero">
                <div className="hero__text">
                    <div className="hero__text-content">
                        <h1>
                            {textGlobal.hero.fname} {textGlobal.hero.lname}
                        </h1>
                        <div className="hero__text-content-profession">
                            <hr />
                            <span>{textGlobal.hero.profession}</span>
                        </div>
                        <p className="hero__text-content-aboutme">
                            {textGlobal.hero.stack}
                        </p>

                        <div className="hero__text-content-btns">
                            <a
                                className="hero__text-content-btns-telegram"
                                href="https://t.me/DenKuznets"
                            >
                                {textGlobal.hero.contactme}
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
                            </a>

                            <BigLink
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                                to="allworks"
                            >
                                {textGlobal.myWorks}
                            </BigLink>
                        </div>
                        <div className="hero__text-content-socials">
                            <span>{textGlobal.hero.socials}:</span>
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
