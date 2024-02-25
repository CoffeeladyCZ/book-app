'use client'

import LanguageSwitcherBase from './LanguageSwitcherBase';
import { useTranslation } from '../../../i18n/client';

export const Footer = ({ lang }) => {
  const { t } = useTranslation(lang, 'translation', {});
  return (<LanguageSwitcherBase t={t} lang={lang} />);
}