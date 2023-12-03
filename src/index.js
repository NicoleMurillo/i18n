import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import "./styles.css";

const language = navigator.language || navigator.userLanguage;
const isSpanish = language.toLowerCase().includes('es');

const headerBackgroundColor = isSpanish ? 'light' : 'dark';

ReactDOM.render(
  <IntlProvider locale={isSpanish ? "es-ES" : "en-US"} messages={isSpanish ? localeEsMessages : localeEnMessages}>
    <JobsList headerBackgroundColor={headerBackgroundColor} />
  </IntlProvider>, document.getElementById("root")
);
