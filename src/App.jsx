import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import { language } from "../utils";

function App() {
  const ru = "ru";
  const en = "en";
  const [lang, setLang] = useState(ru);
  const theme = {
    lang: language[lang],
  };
  useEffect(() => {
    navigator.language === ru ? setLang(ru) : setLang(en);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
