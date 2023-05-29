import React from "react";
import styled from "styled-components";
import { colors } from "../../utils";
import {
    SlSocialGithub,
    SlSocialInstagram,
    SlSocialVkontakte,
} from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import Button from "./Button";

const FooterStyled = styled.footer`
    background-color: ${colors.almostBlack};
    color: ${colors.white};
    padding: 2em 0;
    .footer {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        @media only screen and (max-width: 360px) {
            gap: 20px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer">
                <a href="https://t.me/DenKuznets">
                    <div className="social-icon-container">
                        <TbBrandTelegram />
                    </div>
                </a>
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
        </FooterStyled>
    );
};

export default Footer;
