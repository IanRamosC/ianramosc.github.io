import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const languages = {en, es, pt};

const getContent = (lang) => languages[lang];

const getLanguage = () => localStorage.getItem('lang') || "en";

const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);

  return getContent(lang);
}

export default { setLanguage, getLanguage, getContent };
