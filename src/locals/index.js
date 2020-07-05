import Vue from "vue";
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)

//LANGUAGES
import { engTranslation, engDateFormats } from '@l/eng'
import { srbTranslation, srbDateFormats } from '@l/srb'

const messages = {
  eng: engTranslation,
  srb: srbTranslation
}

//DATE FORMATS
const dateTimeFormats = {
  'eng': engDateFormats,
  'srb': srbDateFormats
}


//SETUP
export const i18n = new VueI18n({
  locale: "eng", // set locale
  fallbackLocale: "eng", // fallback option
  messages, // set locale messages
  dateTimeFormats, // date formats
})