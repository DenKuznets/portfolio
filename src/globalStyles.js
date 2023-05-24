import { createGlobalStyle } from "styled-components";
import { colors, screen } from "../utils";
// import vars from "./vars";

const GlobalStyle = createGlobalStyle`

  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  color: ${colors.almostBlack};
  padding-top: 100px;
  font-family: 'Merriweather', serif;
  font-size: 18px;
}


body *::first-letter{
    text-transform: capitalize;
}

main {
  padding: 0 1em;
}

.container {
  padding: 0 1.5em;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Raleway', sans-serif;
}

h1 {
    font-size: 4.5rem;
    line-height: 1.1;
    @media (max-width: ${screen.px480}) {
        font-size: 3rem;
    }
}



h3 {
    font-size: 1.5rem;
    font-weight: 500;
    @media (max-width: ${screen.px480}) {
        font-size: 1rem;
    }
}
p {
    @media (max-width: ${screen.px992}) {
        max-width: 300px;
    }
    
    @media (max-width: ${screen.px480}) {
        font-size: 0.8rem;
    }
}

a{
  color: ${colors.almostBlack};
  text-decoration: none;
  transition: all 0.2s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.small-icon {
  div {
    display: flex;
    align-items: center;
  }
  margin-left: 0.6em;
}

section {

  width: 100%;
  ${"" /* outline: 1px solid green; */}
  margin: 0 auto;
}

`;

export default GlobalStyle;
