import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { localization } from "../utils";
import GlobalStyle from "./globalStyles";

function App() {
  const ru = "ru";
  const en = "en";
  const [lang, setLang] = useState(ru); 

  useEffect(() => {
    // console.log('system language', navigator.language);
    navigator.language === "ru" ? setLang(ru) : setLang(en);
  }, []);

  return (
    <div className="App">
      <GlobalStyle/>
      <Header lang={localization[lang]} />
    </div>
  );
}

export default App;
