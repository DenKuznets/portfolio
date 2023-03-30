//прекратить скролл окна в фоне
export function preventScroll() {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
}

//возобновить скролл окна в фоне
export function resumeScroll() {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "";
  }
}

export function isVisible(elem) {
  let top = elem.getBoundingClientRect().top;
  let bottom = elem.getBoundingClientRect().bottom;
  if (bottom > 0 && top < window.innerHeight) {
    return true;
  }
  return false;
}

export const screen = {
  px1400: "1400px",
  px1200: "1200px",
  px992: "992px",
  px768: "768px",
  px576: "576px",
  px480: "480px",
};

export const maskPattern = [
  "+",
  "7",
  " ",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export const colors = {
  white: "#fff",
  violet: "#6344C6",
  darkViolet: '#262439',
  yellow: "#FFC448",
  almostBlack: "#11141D",
  orange: "#F26440",
};

export const themeLight = {
  header: {
    bg: colors.white,
    fontDark: colors.almostBlack,
    fontLight: colors.white,
    burgerHover: colors.violet,
  }
}

export const localization = {
  ru: {
    header: {
      nav: {        
        home: 'главная',
        case: 'примеры работ',
      }
    }
  },
  en: {
    header: {
      nav: {
        home: 'home',
        case: 'case studies',
      }
    }
  }
}