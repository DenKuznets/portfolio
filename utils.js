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
    uhd: "2560px",
    laptopL: "1400px",
    laptop: "1024px",
    tablet: "768px",
    mobileL: "425px",
    mobileM: "375px",
    mobileS: "320px",
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
    darkViolet: "#262439",
    yellow: "#FFC448",
    almostBlack: "#11141D",
    orange: "#F26440",
};

export const fonts = {
    merriweather: "'Merriweather', serif",
    raleweay: "'Raleway', sans-serif",
    leagueSpartan: "'League Spartan', sans-serif",
};

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

export const localization = {
    ru: {
        showmore: "Подробнее",
        backButton: "Назад",
        myWorks: "Мои проекты",
        allWorks: "Все проекты",
        header: {
            nav: {
                hero: "Обо мне",
                work: "Примеры работ",
            },
        },
        hero: {
            fname: "Денис",
            lname: "Кузнецов",
            profession: "front-end разработчик",
            aboutme: "верстаю сайты на react и styled-components",
            stack: "СТЭК: JS TS REACT REDUX-TOOLKIT SASS STYLED-COMPONENTS CSS-MODULES",
            contactme: "Связаться",
            socials: "я в соц сетях",
        },
        work: {
            works: [
                {
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "tes.png",
                    github: "https://github.com/DenKuznets/tes.loc",
                    demo: "https://tul-energo-service.ru/",
                    description: `Верстка главной страницы по заказу вебстудии alex-media.ru по макету Figma с соблюдением дедлайна и pixel-perfect попаданием в адаптивные брейкпоинты`,
                },
                 {
                    name: "тестовое задание для web-студии",
                    tech: ["react", "styled-components", "адаптивная верстка"],
                    img: "webstudio.png",
                    github: "https://github.com/DenKuznets/testovoe-alexmedia",
                    demo: "https://denkuznets.github.io/testovoe-alexmedia/",
                    description: `Тестовое задание выполнено по макету Figma, предоставленным заказчикомм. Тех. задание выглядело так: 
                        1) Сделать липкое меню.
                        2) Мобильное и декстпное меню должно в html быть одним блоком. 
                        3) Добавить Анимации по своему усмотрению. Можно использовать сторонние библиотеки , но без jquery.(не обязательно)
                        4) Cделать popup и в форме предусмотреть валидацию, Пока не заполненны все поля кнопка должна быть неактивна.(не обязательно)
                        5) Ховеры на ссылки, по своему усмотрению.
                        6) Мобильная верстка`,
                },
                {
                    name: "drag'n'drop на react",
                    tech: ["react", "redux-toolkit"],
                    img: "dnd.png",
                    github: "https://github.com/DenKuznets/react-dnd",
                    demo: "https://react-dnd-ten.vercel.app/",
                    description: `В рамках тестового задания реализован react dnd. CSS внимание не уделялось, поскольку работа велась в условиях сильного ограничения по времени задания.  
                    ТЗ: 
                    Реализовать простой 2д планировщик.
                        1) Сделать блок со списком объектов на выбор(это могут быть 2д
фотографии столов, стульев, перегородок).
                        2) Сделать доску на которое можно добавлять эти объекты и
перемещать их мышкой. 
                        3) Должна быть возможность сохранения расстановки в
файл(сохранять id объекта и его координаты).
                        4) Также должна быть возможность импорта этого файла с
координатами и отображения сохраненной расстановки.
                        5) Ограничения на стек технологий:JavaScript React Redux Остальное на ваше усмотрение`,
                },
                {
                    name: "портфолио",
                    tech: [
                        "react",
                        "styled-components",
                        "typescript",
                        "react-router",
                    ],
                    img: "portfolio.png",
                    github: "https://github.com/DenKuznets/masha-portfolio",
                    demo: "http://davinchushka.vercel.app/",
                    description: `шаблон портфолио по дизайну figma`,
                },
                
               
                {
                    name: "квиз",
                    tech: ["react", "api", "styled-components"],
                    img: "quizz.png",
                    github: "https://github.com/DenKuznets/quizzical-app",
                    demo: "https://denkuznets.github.io/quizzical-app/",
                    description: `Пример использования API. По макету figma в рамках задания сайта scrimba.com, курс Learn React`,
                },
                {
                    name: "компонент диаграмма расходов",
                    tech: ["react", "typescript", "styled-components"],
                    img: "component.png",
                    github: "https://github.com/DenKuznets/Expenses-chart-component",
                    demo: "https://denkuznets.github.io/Expenses-chart-component/",
                    description: `Основная сложность состояла в том, что бы придумать как реализовать отображение диаграммы. Кроме того, пробовал свои силы в написании компонентов react с использованием typescript. Задание с сайта frontendmentor.io`,
                },
                {
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "tehavto.png",
                    github: "https://github.com/DenKuznets/teh-avto.loc",
                    demo: "https://avtodom-techauto.ru/",
                    description: `Верстка главной страницы по заказу вебстудии alex-media.ru по макету Figma с соблюдением дедлайна и pixel-perfect попаданием в адаптивные брейкпоинты`,
                },
                {
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "bmk.png",
                    github: "https://github.com/DenKuznets/bmk-new.loc",
                    demo: "https://bmk78.ru/",
                    description: `Верстка главной страницы по заказу вебстудии alex-media.ru по макету Figma с соблюдением дедлайна и pixel-perfect попаданием в адаптивные брейкпоинты`,
                },
                {
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "cleaning.png",
                    github: "https://github.com/DenKuznets/cleaning-chistulya.loc",
                    demo: "https://chistylya.ru/",
                    description: `Верстка главной страницы по заказу вебстудии alex-media.ru по макету Figma с соблюдением дедлайна и pixel-perfect попаданием в адаптивные брейкпоинты`,
                },
                {
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "myp.png",
                    github: "https://github.com/DenKuznets/myp-comfort",
                    demo: "https://mup-komfort.ru/",
                    description: `Верстка главной страницы по заказу вебстудии alex-media.ru по макету Figma с соблюдением дедлайна и pixel-perfect попаданием в адаптивные брейкпоинты`,
                },
            ],
        },
    },

    en: {
        showmore: "Case study",
        moreExamples: "More Examples",
        backButton: "Back",
        header: {
            nav: {
                hero: "About me",
                work: "case studies",
            },
        },
        hero: {
            fname: "Denis",
            lname: "Kuznetsov",
            profession: "front-end developer",
            aboutme: "I build things for web with react & styled-components.",
            stack: "Tech Stack: HTML CSS JS REACT SASS STYLED-COMPONENTS BLADE LARAVEL",
            contactme: "say hello",
            socials: "follow me on",
        },
        work: {
            works: [
                {
                    name: "коммерческий сайт",
                    tech: ["laravel", "responsive design", "scss"],
                    img: "tes.png",
                    github: "https://github.com/DenKuznets/tes.loc",
                    demo: "https://tul-energo-service.ru/",
                },
                {
                    name: "web-studio test",
                    tech: ["react", "responsive design", "styled-components"],
                    img: "webstudio.png",
                    github: "https://github.com/DenKuznets/testovoe-alexmedia",
                    demo: "https://denkuznets.github.io/testovoe-alexmedia/",
                },
                {
                    name: "quizz app",
                    tech: ["react", "api", "styled-components"],
                    img: "quizz.png",
                    github: "https://github.com/DenKuznets/quizzical-app",
                    demo: "https://denkuznets.github.io/quizzical-app/",
                },
                {
                    name: "Expenses chart component",
                    tech: ["react", "typescript", "styled-components"],
                    img: "component.png",
                    github: "https://github.com/DenKuznets/Expenses-chart-component",
                    demo: "https://denkuznets.github.io/Expenses-chart-component/",
                },
            ],
        },
    },
};
