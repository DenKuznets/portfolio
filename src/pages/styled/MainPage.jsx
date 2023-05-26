import React, { useState, createContext } from "react";
import GlobalStyle from "../../globalStyles";
import { ThemeProvider } from "styled-components";
import Hero from "../../components/Hero";
import Work from "../../components/Work";
import Header from "../../components/Header";
import { localization, themeLight } from "../../../utils";
export const LanguageContext = createContext(localization.ru);

const MainPage = () => {
    const [appText, setAppText] = useState(
        // navigator.language === "ru" ? localization.ru : localization.en
        localization.en
    );
    return (
        <>
            <ThemeProvider theme={themeLight}>
            <GlobalStyle />
                <LanguageContext.Provider value={appText}>
                    {/* <Header /> */}
                    <main>
                        <section id="hero">
                            {/* <Hero /> */}
                        </section>
                        <section style={{ padding: 0 }} id="work">
              <Work index={0} />
              <Work index={1} />
              <Work index={2} />
            </section>
                    </main>
                </LanguageContext.Provider>
            </ThemeProvider>
        </>
    );
};

export default MainPage;
