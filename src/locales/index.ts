import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import ptbr from './pt-br.json';
import enus from './en-us.json';

const resources = {
    'pt-BR': ptbr,
    'en-US': enus
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;