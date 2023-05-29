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
        defaultBG: colors.white,
        defaultTextColor: colors.almostBlack,
        defaultGradient:
            "linear-gradient(90deg, rgba(82, 96, 115, 1) 0%, rgba(256, 256, 256, 1) 100%)",
    },
};

export const localization = {
    ru: {
        header: {
            nav: {
                home: "главная",
                work: "Примеры работ",
            },
        },
        hero: {
            fname: "Денис",
            lname: "Кузнецов",
            profession: "front-end разработчик",
            aboutme: "верстаю сайты на react и styled-components",
            stack: "СТЭК: HTML CSS JS REACT SASS BLADE LARAVEL",
            contactme: "Связаться",
            socials: "я в соц сетях",
        },
        work: {
            works: [
                {
                    name: "тестовое задание для web-студии",
                    tech: ["react", "styled-components", "адаптивная верстка"],
                    img: "webstudio.png",
                    github: "https://github.com/DenKuznets/testovoe-alexmedia",
                    demo: "https://denkuznets.github.io/testovoe-alexmedia/",
                },
                {
                    name: "квиз",
                    tech: ["react", "api", "styled-components"],
                    img: "quizz.png",
                    github: "https://github.com/DenKuznets/quizzical-app",
                    demo: "https://denkuznets.github.io/quizzical-app/",
                },
                {
                    name: "компонент диаграмма расходов",
                    tech: ["react", "typescript", "styled-components"],
                    img: "component.png",
                    github: "https://github.com/DenKuznets/Expenses-chart-component",
                    demo: "https://denkuznets.github.io/Expenses-chart-component/",
                },
            ],
            showmore: "Подробнее",
        },
    },
    en: {
        header: {
            nav: {
                home: "home",
                work: "case studies",
            },
        },
        hero: {
            fname: "Denis",
            lname: "Kuznetsov",
            profession: "front-end developer",
            aboutme: "I build things for web with react & styled-components.",
            stack: "Tech Stack: HTML CSS JS REACT SASS BLADE LARAVEL",
            contactme: "say hello",
            socials: "follow me on",
        },
        work: {
            works: [
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
            showmore: "Case study",
        },
    },
};

export const lorem500 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur dolore doloribus cumque architecto ipsa voluptatibus, earum temporibus ex quod. Assumenda unde ut corporis obcaecati soluta modi earum quia qui nesciunt officia quasi quibusdam molestiae provident et accusantium laboriosam veritatis tempora atque incidunt cum debitis saepe, sequi repellat! Nobis minima perspiciatis dolores fugiat debitis temporibus officiis consequuntur deleniti totam asperiores reprehenderit velit, magnam consequatur incidunt odio harum neque illum alias commodi exercitationem cupiditate. Libero minus quas, ratione eveniet ab sunt eos, commodi recusandae magnam voluptates in earum dolore nesciunt non labore voluptatem porro sit laborum autem soluta minima atque itaque deserunt accusamus! Magnam, soluta optio mollitia ipsam nesciunt maiores tempore amet corporis sint consequatur maxime doloribus voluptates dolore pariatur dicta asperiores ut at consequuntur harum eius dolor aliquam error accusantium! Molestiae voluptatem vero sit vitae inventore suscipit doloremque perferendis impedit. Fugiat, amet dignissimos sapiente quas cumque ipsam nulla et ipsum nisi dolor minus repellendus ratione. Repudiandae doloribus, veritatis fuga illum, ea eveniet ipsa culpa totam impedit, corrupti ab minus voluptatum quo error quasi blanditiis. Sint ratione, repellendus natus itaque doloremque quidem amet ipsam nihil corrupti maiores atque laboriosam quod ea libero, officiis tempora nisi corporis odit? Assumenda, doloribus quos? Tempore blanditiis accusamus temporibus magni commodi deleniti! Quo, voluptate velit? Neque eligendi repellat odit reiciendis ex et dicta est quo architecto, vitae, voluptatibus delectus dolorum, maxime ad mollitia facilis quidem provident enim cumque voluptate! Odit unde cupiditate magnam suscipit ut atque praesentium, sit laudantium est, voluptatem necessitatibus autem veniam eaque saepe repudiandae excepturi cum sapiente explicabo obcaecati eveniet. Mollitia nisi excepturi assumenda non neque, sunt, error quia ab ut, ad consequuntur. At, maiores explicabo. Eveniet aperiam blanditiis temporibus provident molestiae repellat perspiciatis eaque corporis, fuga hic quae. Nulla fugiat quas labore corporis necessitatibus dolores atque qui deleniti non magnam perferendis reprehenderit vero illo, incidunt, quisquam quo omnis recusandae dicta velit aliquid maxime tempore dolore harum eaque? Illo ipsam, beatae aliquam explicabo eveniet laboriosam quasi consectetur? Possimus facilis magni eius accusamus autem a temporibus officia vel, labore sed nisi in ea iure explicabo ab dolores velit earum, necessitatibus suscipit error quo sint fuga corrupti odio. Quaerat aperiam suscipit deleniti maiores, repudiandae praesentium fuga tenetur. Distinctio aut rem nam quibusdam et consequuntur rerum, cum deserunt hic magnam alias cupiditate doloremque. Quam voluptates porro delectus error voluptatum quis, tempore ab minima animi? Cupiditate atque id nam quos, totam architecto dolor, illum ipsum voluptas veritatis dolore. Porro vel quam rem voluptates sapiente adipisci pariatur eveniet cupiditate! Obcaecati, facere mollitia. Fugit ab aut labore, deleniti nihil nulla sequi non velit in voluptatum doloribus debitis maxime distinctio architecto atque autem odit dolor quidem amet qui repellat eligendi a? Provident harum ad perferendis hic doloremque exercitationem vitae nemo obcaecati necessitatibus. Recusandae facilis assumenda commodi provident, blanditiis porro doloremque accusantium? Reiciendis amet aperiam delectus ipsa animi ex explicabo quasi nemo! Maiores impedit fugit tempora accusamus eius fugiat qui magnam quidem, totam voluptatem similique tenetur id sed nihil laboriosam saepe nobis, unde maxime reprehenderit obcaecati autem doloremque explicabo? Dolorem, dolor?";
