import React, { useState, createContext } from "react";
import GlobalStyle from "../../globalStyles";
import { ThemeProvider } from "styled-components";
import Hero from "../../components/Hero";
import Work from "../../components/Work";
import Header from "../../components/Header";
import { colors, localization, themeLight } from "../../../utils";
import Footer from "../../components/Footer";
import Link from "../../components/Link";
export const LanguageContext = createContext(localization.ru);

const MainPage = () => {
    const [appText, setAppText] = useState(
        // navigator.language === "ru" ? localization.ru : localization.en
        localization.ru
    );

    return (
        <>
            <ThemeProvider theme={themeLight}>
                <GlobalStyle />
                <LanguageContext.Provider value={appText}>
                    <Header />
                    <main>
                        {/* <section id="hero"><Hero /></section> */}
                        <section style={{ padding: 0 }} id="work">
                            <Work index={0} workColor="violet" />
                            <Work index={1} workColor="default" />
                            <Work index={2} workColor="yellow" />
                            {/* <div
                                style={{
                                    backgroundColor: `${colors.white}`,
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "2em 0",
                                }}
                            >
                                <a href="">
                                    <Link>{appText.work.moreExamples}</Link>
                                </a>
                            </div> */}
                        </section>
                    </main>
                    <Footer />
                </LanguageContext.Provider>
            </ThemeProvider>
        </>
    );
};

export default MainPage;
