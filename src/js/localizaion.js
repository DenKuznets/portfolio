import { CATEGORIES } from "./categories";

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
            stack: "СТЭК: react, ts, mui, styled-components, redux, rest, graphql (apollo-client), jest, react-testing-library, storybook",
            contactme: "Связаться",
            socials: "я в соц сетях",
        },
        work: {
            categories: {
                [CATEGORIES.TEST]: "ТЕСТОВЫЕ ЗАДАНИЯ",
                [CATEGORIES.LANDING]: "ЛЭНДИНГИ",
                [CATEGORIES.LEARN]: "УЧЕБНЫЕ ПРОЕКТЫ",
            },
            works: [
                {
                    id: 1,
                    category: CATEGORIES.LEARN,
                    name: "ROCK PAPER SCISSORS",
                    tech: ["react", "mui", "ts", "unit testing"],
                    img: "rpc.png",
                    github: "https://github.com/DenKuznets/rock-paper-scissors",
                    demo: "https://rock-paper-scissors-kappa-tawny.vercel.app/",
                    description: `Игра "Камень Ножницы Бумага" по дизайну https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH`,
                },
                {
                    id: 2,
                    category: CATEGORIES.LANDING,
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "tes.png",
                    github: "https://github.com/DenKuznets/tes.loc",
                    demo: "https://tul-energo-service.ru/",
                    description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`,
                },
                {
                    id: 3,
                    category: CATEGORIES.TEST,
                    name: "тестовое задание",
                    tech: [
                        "react",
                        "styled-components",
                        "адаптивная верстка",
                        "axios",
                    ],
                    img: "test1.png",
                    github: "https://github.com/DenKuznets/dls-test",
                    demo: "https://dls-test.vercel.app/",
                    description: `Тестовое задание по макету Figma и ТЗ: 
                        1) Горизонтальное меню - sticky, исчезает после 200px прокрутки
                        2) Мобильное меню - плавное скрытие/открытие
                        3) Подменю - только CSS
                        4) Получение данных fetch()/axios
                        5) Отображение списка постов - flex
                        6) Поиск постов - по заголовкам и тексту
                        7) Полная информация о посте по клику на пост - modal window     
                        `,
                },
                {
                    id: 4,
                    category: CATEGORIES.TEST,
                    name: "тестовое задание для web-студии",
                    tech: ["react", "styled-components", "адаптивная верстка"],
                    img: "webstudio.png",
                    github: "https://github.com/DenKuznets/testovoe-alexmedia",
                    demo: "https://denkuznets.github.io/testovoe-alexmedia/",
                    description: `Тестовое задание по макету Figma и ТЗ: 
                        1) Сделать липкое меню.
                        2) Мобильное и декстпное меню должно в html быть одним блоком. 
                        3) Добавить Анимации по своему усмотрению. Можно использовать сторонние библиотеки , но без jquery.(не обязательно)
                        4) Cделать popup и в форме предусмотреть валидацию, Пока не заполненны все поля кнопка должна быть неактивна.(не обязательно)
                        5) Ховеры на ссылки, по своему усмотрению.
                        6) Мобильная верстка`,
                },

                {
                    id: 5,
                    category: CATEGORIES.LEARN,
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
                    id: 6,
                    category: CATEGORIES.LEARN,
                    name: "квиз",
                    tech: ["react", "api", "styled-components"],
                    img: "quizz.png",
                    github: "https://github.com/DenKuznets/quizzical-app",
                    demo: "https://denkuznets.github.io/quizzical-app/",
                    description: `Пример использования API. По макету figma в рамках задания сайта scrimba.com, курс Learn React`,
                },
                {
                    id: 7,
                    category: CATEGORIES.LEARN,
                    name: "компонент диаграмма расходов",
                    tech: ["react", "typescript", "styled-components"],
                    img: "component.png",
                    github: "https://github.com/DenKuznets/Expenses-chart-component",
                    demo: "https://denkuznets.github.io/Expenses-chart-component/",
                    description: `Основная сложность состояла в том, что бы придумать как реализовать отображение диаграммы. Кроме того, пробовал свои силы в написании компонентов react с использованием typescript. Задание с сайта frontendmentor.io`,
                },
                {
                    id: 8,
                    category: CATEGORIES.LANDING,
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "tehavto.png",
                    github: "https://github.com/DenKuznets/teh-avto.loc",
                    demo: "https://avtodom-techauto.ru/",
                    description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`,
                },
                {
                    id: 9,
                    category: CATEGORIES.LANDING,
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "bmk.png",
                    github: "https://github.com/DenKuznets/bmk-new.loc",
                    demo: "https://bmk78.ru/",
                    description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`,
                },
                {
                    id: 10,
                    category: CATEGORIES.LANDING,
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "cleaning.png",
                    github: "https://github.com/DenKuznets/cleaning-chistulya.loc",
                    demo: "https://chistylya.ru/",
                    description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`,
                },
                {
                    id: 11,
                    category: CATEGORIES.LANDING,
                    name: "коммерческий сайт",
                    tech: ["html", "scss", "javascript", "адаптивная верстка"],
                    img: "myp.png",
                    github: "https://github.com/DenKuznets/myp-comfort",
                    demo: "https://mup-komfort.ru/",
                    description: `Верстка лэндинга по заказу web-студии alex-media.ru по макету Figma с соблюдением дедлайна, pixel-perfect попаданием в адаптивные брейкпоинты. В сотрудничестве с дизайнером и backend-разработчиком (php, laravel, blade)`,
                },
                {
                    id: 12,
                    category: CATEGORIES.LEARN,
                    name: "мое портфолио",
                    tech: ["react", "styled-components", "js"],
                    img: "myportfolio.png",
                    github: "https://github.com/DenKuznets/portfolio",
                    demo: "https://denkuznets.vercel.app/",
                    description: `Этот сайт портфолио я разработал сам, вдохновляясь примерами таких работ как https://stefantopalovicdev.vercel.app/ , https://caferati.me/portfolio , https://brittanychiang.com/ и http://riccardozanutta.com/ . 
                    За основу дизайна использовал этот шаблон https://themeforest.net/item/orido-personal-portfolio-website-figma-template/screenshots/37527613?index=1`,
                },

                {
                    id: 13,
                    category: CATEGORIES.TEST,
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
