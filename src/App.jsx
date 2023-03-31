import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { localization, lorem500, themeLight } from "../utils";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";

export const LanguageContext = createContext(localization.ru);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <LanguageContext.Provider
          value={
            navigator.language === "ru" ? localization.ru : localization.en
          }
        >
          {/* <Header /> */}
          <main>{/* {lorem500} */}
            <section id="hero">
              <Hero />
          </section>
          </main>
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
