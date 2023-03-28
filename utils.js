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
  screen1400: "1400px",
  screen1200: "1200px",
  screen992: "992px",
  screen768: "768px",
  screen576: "576px",
  screen480: "480px",
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
  }
}

export const language = {
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