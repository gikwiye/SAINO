
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages'
import React,{Suspense}from 'react'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import {initReactI18next} from "react-i18next"
import translationsEn from "./Translations/en/translation.json"
import translationsFr from "./Translations/fr/translation.json"

i18next.use(initReactI18next).init({
  resources:{
      en:{translation:translationsEn},
      fr:{translation:translationsFr}
  },
  lng:"en",
  fallbackLng:"en",
  interpolation:{escapeValue:false},
})

function App() {
  return (
    <Suspense>
      <Router>
        <I18nextProvider i18n={i18next}>
          <Home/>
        </I18nextProvider>
      </Router>
    </Suspense>
  );
}

export default App;
