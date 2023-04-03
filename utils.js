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
  darkViolet: "#262439",
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
  },
};

export const localization = {
  ru: {
    header: {
      nav: {
        home: "главная",
        case: "Примеры работ",
      },
    },
    hero: {
      fname: "денис",
      lname: "кузнецов",
      profession: "front-end разработчик",
      aboutme: "верстаю сайты на react и styled-components",
      contactme: "Связаться",
    },
  },
  en: {
    header: {
      nav: {
        home: "home",
        case: "case studies",
      },
    },
    hero: {
      fname: "denis",
      lname: "kuznetsov",
      profession: "front-end developer",
      aboutme: "I build things for web with react & styled-components.",
      contactme: "say hello",
    },
  },
};

export const lorem500 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur dolore doloribus cumque architecto ipsa voluptatibus, earum temporibus ex quod. Assumenda unde ut corporis obcaecati soluta modi earum quia qui nesciunt officia quasi quibusdam molestiae provident et accusantium laboriosam veritatis tempora atque incidunt cum debitis saepe, sequi repellat! Nobis minima perspiciatis dolores fugiat debitis temporibus officiis consequuntur deleniti totam asperiores reprehenderit velit, magnam consequatur incidunt odio harum neque illum alias commodi exercitationem cupiditate. Libero minus quas, ratione eveniet ab sunt eos, commodi recusandae magnam voluptates in earum dolore nesciunt non labore voluptatem porro sit laborum autem soluta minima atque itaque deserunt accusamus! Magnam, soluta optio mollitia ipsam nesciunt maiores tempore amet corporis sint consequatur maxime doloribus voluptates dolore pariatur dicta asperiores ut at consequuntur harum eius dolor aliquam error accusantium! Molestiae voluptatem vero sit vitae inventore suscipit doloremque perferendis impedit. Fugiat, amet dignissimos sapiente quas cumque ipsam nulla et ipsum nisi dolor minus repellendus ratione. Repudiandae doloribus, veritatis fuga illum, ea eveniet ipsa culpa totam impedit, corrupti ab minus voluptatum quo error quasi blanditiis. Sint ratione, repellendus natus itaque doloremque quidem amet ipsam nihil corrupti maiores atque laboriosam quod ea libero, officiis tempora nisi corporis odit? Assumenda, doloribus quos? Tempore blanditiis accusamus temporibus magni commodi deleniti! Quo, voluptate velit? Neque eligendi repellat odit reiciendis ex et dicta est quo architecto, vitae, voluptatibus delectus dolorum, maxime ad mollitia facilis quidem provident enim cumque voluptate! Odit unde cupiditate magnam suscipit ut atque praesentium, sit laudantium est, voluptatem necessitatibus autem veniam eaque saepe repudiandae excepturi cum sapiente explicabo obcaecati eveniet. Mollitia nisi excepturi assumenda non neque, sunt, error quia ab ut, ad consequuntur. At, maiores explicabo. Eveniet aperiam blanditiis temporibus provident molestiae repellat perspiciatis eaque corporis, fuga hic quae. Nulla fugiat quas labore corporis necessitatibus dolores atque qui deleniti non magnam perferendis reprehenderit vero illo, incidunt, quisquam quo omnis recusandae dicta velit aliquid maxime tempore dolore harum eaque? Illo ipsam, beatae aliquam explicabo eveniet laboriosam quasi consectetur? Possimus facilis magni eius accusamus autem a temporibus officia vel, labore sed nisi in ea iure explicabo ab dolores velit earum, necessitatibus suscipit error quo sint fuga corrupti odio. Quaerat aperiam suscipit deleniti maiores, repudiandae praesentium fuga tenetur. Distinctio aut rem nam quibusdam et consequuntur rerum, cum deserunt hic magnam alias cupiditate doloremque. Quam voluptates porro delectus error voluptatum quis, tempore ab minima animi? Cupiditate atque id nam quos, totam architecto dolor, illum ipsum voluptas veritatis dolore. Porro vel quam rem voluptates sapiente adipisci pariatur eveniet cupiditate! Obcaecati, facere mollitia. Fugit ab aut labore, deleniti nihil nulla sequi non velit in voluptatum doloribus debitis maxime distinctio architecto atque autem odit dolor quidem amet qui repellat eligendi a? Provident harum ad perferendis hic doloremque exercitationem vitae nemo obcaecati necessitatibus. Recusandae facilis assumenda commodi provident, blanditiis porro doloremque accusantium? Reiciendis amet aperiam delectus ipsa animi ex explicabo quasi nemo! Maiores impedit fugit tempora accusamus eius fugiat qui magnam quidem, totam voluptatem similique tenetur id sed nihil laboriosam saepe nobis, unde maxime reprehenderit obcaecati autem doloremque explicabo? Dolorem, dolor?";