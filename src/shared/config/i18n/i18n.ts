import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backed from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backed)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
