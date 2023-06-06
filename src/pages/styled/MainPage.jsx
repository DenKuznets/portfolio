import React, { useState, createContext } from "react";
import GlobalStyle from "../../globalStyles";
import { ThemeProvider } from "styled-components";
import Hero from "../../components/Hero";
import Work from "../../components/Work";
import Header from "../../components/Header";
import { colors, localization, themeLight } from "../../../utils";
import Footer from "../../components/Footer";
import BigLink from "../../components/BigLink";
import AllWorks from "../../components/AllWorks";
export const LanguageContext = createContext(localization.ru);

const MainPage = () => {
    const [appText, setAppText] = useState(
        // navigator.language === "ru" ? localization.ru : localization.en
        localization.ru
    );
    const [showAllWorks, setShowAllWorks] = useState(true);

    const handleClick = () => {
        setShowAllWorks(true);
        document.documentElement.style.scrollBehavior = "auto";
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.style.scrollBehavior = "smooth";
        }, 1);
    };

    return (
        <>
            <ThemeProvider theme={themeLight}>
                <GlobalStyle />
                <LanguageContext.Provider value={appText}>
                    {showAllWorks ? (
                        <section id="allworks">
                            <AllWorks
                                backToMain={() => setShowAllWorks(false)}
                            />
                        </section>
                    ) : (
                        <>
                            <Header />
                            <main>
                                <section id="hero">
                                    <Hero />
                                </section>
                                <section style={{ padding: 0 }} id="work">
                                    <Work index={0} workColor="violet" />
                                    <Work index={1} workColor="default" />
                                    <Work index={2} workColor="yellow" />
                                    <div
                                        style={{
                                            backgroundColor: `${colors.white}`,
                                            display: "flex",
                                            justifyContent: "center",
                                            padding: "2em 0",
                                        }}
                                    >
                                        <BigLink onClick={() => handleClick()}>
                                            {appText.work.moreExamples}
                                        </BigLink>
                                    </div>
                                </section>
                            </main>
                            <Footer />
                        </>
                    )}
                </LanguageContext.Provider>
            </ThemeProvider>
        </>
    );
};

export default MainPage;
