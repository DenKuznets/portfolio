import styled from "styled-components";
import { screen } from "../../../utils";

const HeaderStyled = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    min-height: 80px;
    background-color: ${({ theme }) => theme.header.bg};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 13px;

    .header {
        margin: auto;
        max-width: 1800px;
        display: flex;
        padding: 1em;
        @media (max-width: ${screen.mobileL}) {
            padding: 1em;
        }
        &__logo {
            margin-right: auto;
            font-weight: bold;
            a {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: inherit;
            }
            img {
                width: 3em;
                margin-right: 1em;
            }
            &-text {
                font-size: 1.5rem;
                &::first-letter {
                    text-transform: lowercase;
                }
                @media (max-width: ${screen.mobileL}) {
                    font-size: 1rem;
                }
            }
        }

        nav {
            display: flex;
            align-items: center;
            ul {
                transition: all 0.4s;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${({ theme }) => theme.header.bg};
                @media (max-width: ${screen.tablet}) {
                    position: fixed;
                    width: 100%;
                    flex-direction: column;
                    top: 0;
                    left: 0;
                    min-height: 0;
                    max-height: 0;
                    overflow: hidden;
                    &.nav__menu--open {
                        min-height: 100vh;
                        padding: 0;
                    }
                    a {
                        opacity: 1;
                    }
                }
                li {
                    margin-right: 70px;
                    @media (max-width: ${screen.tablet}) {
                        margin-right: 0;
                        margin-bottom: 1em;
                        font-size: 2rem;
                    }
                }
            }
        }

        .nav__menu-burger {
            position: relative;
            display: none;
            z-index: 999;
            transition: all 0.4s;
            cursor: pointer;
            &--open {
                transform: rotate(90deg);
            }
            @media (max-width: ${screen.tablet}) {
                display: block;
            }

            &:hover {
                color: ${({ theme }) => theme.header.burgerHover};
                scale: 1.05;
            }
        }
    }
`;

export default HeaderStyled;
