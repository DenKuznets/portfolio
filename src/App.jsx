import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { localization, lorem500, themeLight } from "../utils";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import Work from "./components/Work";

export const LanguageContext = createContext(localization.ru);

function App() {
  const [appText, setAppText] = useState(
    // navigator.language === "ru" ? localization.ru : localization.en
    localization.ru
  );
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <LanguageContext.Provider value={appText}>
          <Header />
          <main>
            {/* <section id="hero">
              <Hero />
            </section> */}
            <section id="work1">
              <Work
                index={0}
              />
            </section>
          </main>
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
