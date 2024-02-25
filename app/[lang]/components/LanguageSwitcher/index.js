import { useTranslation } from '../../../i18n';

import LanguageSwitcherBase from './LanguageSwitcherBase';

const LanguageSwitcher = async ({ lang }) => {
  const { t } = await useTranslation(lang, 'translation');
  return (<LanguageSwitcherBase t={t} lang={lang} />);
}

export default LanguageSwitcher;
