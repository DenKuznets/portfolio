import React, { useState, createContext } from "react";

import Hero from "../../components/Hero";
import Work from "../../components/Work";
import Header from "../../components/Header";
import { colors, localization, themeLight } from "../../../utils";
import Footer from "../../components/Footer";
import BigLink from "../../components/BigLink";
import AllWorks from "../../components/AllWorks";
import { Link } from "react-router-dom";
export const LanguageContext = createContext(localization.ru);

const MainPage = () => {
    const [appText, setAppText] = useState(
        // navigator.language === "ru" ? localization.ru : localization.en
        localization.ru
    );

    return (
        <>
            <LanguageContext.Provider value={appText}>
                <Header />
                <main>
                    <section id="hero">
                        <Hero />
                    </section>
                    <section style={{ padding: 0 }} id="work">
                        <h2
                            style={{
                                textAlign: "center",
                                padding: "1em 0",
                                backgroundColor: colors.violet,
                                color: colors.white,
                            }}
                        >
                            {appText.header.nav.work}
                        </h2>
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
                            <BigLink to="allworks">
                                {appText.work.moreExamples}
                            </BigLink>
                        </div>
                    </section>
                </main>
                <Footer />
            </LanguageContext.Provider>
        </>
    );
};

export default MainPage;
