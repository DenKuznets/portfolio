import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { localization, themeLight } from "../utils";
import GlobalStyle from "./globalStyles";

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
          <Header />
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
