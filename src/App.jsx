import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { localization, themeLight } from "../utils";
import GlobalStyle from "./globalStyles";


function App() {
  const ru = "ru";
  const en = "en";
  const [lang, setLang] = useState(ru);

  useEffect(() => {
    navigator.language === "ru" ? setLang(ru) : setLang(en);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <Header lang={localization[lang]} />
      </ThemeProvider>
    </div>
  );
}

export default App;
