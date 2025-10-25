import { Locale, Translations } from '@/types/locales';
import { en } from './en';
import { jp } from './jp';

export const translations: Record<Locale, Translations> = {
  en,
  jp,
};

export const defaultLocale: Locale = 'en';

export { en, jp };
