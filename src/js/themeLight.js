import {colors } from './colors'

export const themeLight = {
    global: {
        pTextColor: "grey",
        aTextColor: "grey",
        aHoverTextColor: colors.almostBlack,
        socialIconContainerBG: "#f6f6f6",
        socialIconContainerColor: colors.almostBlack,
        techList: {
            textColor: colors.almostBlack,
            itemBorder: colors.almostBlack,
        },
        bigLink: {
            textColor: colors.almostBlack,
            hover: colors.almostBlack,
        },
    },
    header: {
        bg: colors.white,
        fontDark: colors.almostBlack,
        fontLight: colors.white,
        burgerHover: colors.violet,
    },
    hero: {
        socialsTextColor: colors.almostBlack,
    },
    work: {
        workThemes: {
            violet: {
                bg: colors.violet,
                textColor: colors.white,
                borderColor: colors.white,
                more: colors.almostBlack,
                overlayGradient:
                    "linear-gradient(90deg, rgba(99, 68, 198, 1) 0%, rgba(82, 96, 115, 1) 100%)",
            },
            yellow: {
                bg: colors.yellow,
                textColor: colors.almostBlack,
                borderColor: colors.almostBlack,
                overlayGradient:
                    "linear-gradient(90deg, rgba(255,196,72,1) 0%, rgba(29,29,0,0.97) 100%)",
            },
            default: {
                bg: colors.white,
                textColor: colors.almostBlack,
                borderColor: colors.almostBlack,
                overlayGradient:
                    "linear-gradient(90deg, rgba(82, 96, 115, 1) 0%, rgba(256, 256, 256, 1) 100%)",
            },
        },
    },
    workModal: {
        bg: colors.white,
        border: colors.almostBlack,
    },
    workSmall: {
        textColor: colors.white,
    },
    allWorks: {
        btnBack: colors.white,
    },
};
