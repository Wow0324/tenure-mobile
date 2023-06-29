import { I18n } from "i18n-js";
import * as Localization from "expo-localization";

import en from "./translations/en.json";

// Set the key-value pairs for the different languages you want to support.

const translations = {
  en: en,
};
const i18n = new I18n(translations);

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;

// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.

// Set the locale once at the beginning of your app.

i18n.locale = Localization.locale;

i18n.defaultLocale = "en";

export default i18n;
