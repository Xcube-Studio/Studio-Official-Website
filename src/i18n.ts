import { createI18n } from 'vue-i18n';

import zh from './locales/zh.json';
import ru from './locales/ru.json';
import uk from './locales/uk.json';
import en from './locales/en.json';

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh,
    ru,
    uk,
    en
  }
});

export default i18n;