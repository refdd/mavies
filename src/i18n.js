import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const ar_home = require("./locales/ar/common.json");
const en_home = require("./locales/en/common.json");

const availableLanguages = ["ar", "en"]; // List of available languages

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  false: false,
  whitelist: availableLanguages,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ar: {
      common: ar_home,
    },
    en: {
      common: en_home,
    },
  },
});

export default i18n;
