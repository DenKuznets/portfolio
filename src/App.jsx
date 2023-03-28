import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [locale, setLocale] = useState('ru')
  useEffect(() => {
    console.log(navigator.language);
    if (navigator.language === 'ru') {
      
    }
    
  }, [])
  

  return (
    <div className="App">      
     <Header />
    </div>
  )
}

export default App
