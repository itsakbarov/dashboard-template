import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import detector from 'i18next-browser-languagedetector';

import localeEN from './locales/en.json';
import localeRU from './locales/ru.json';
import localeUZ from './locales/uz.json';

const resources = {
    ru: {
        translations: localeRU
    },
    "uz-Latin": {
        translation: localeUZ,
    },
    en: {
        translations: localeEN
    }
}
i18n.use(detector).use(initReactI18next).init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
});

export default i18n;
