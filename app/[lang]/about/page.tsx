import React from 'react';
import Link from 'next/link';

import { useTranslation } from '../../i18n';

import Navigation from '../components/Navigation';

interface CommonLayoutProps {
  params: {
    lang: string;
  };
}

const Page: React.FC<CommonLayoutProps> = async ({ params: { lang } }) => {
  const { t } = await useTranslation(lang, 'translation');
  return (
    <>
      <Navigation lang={lang} />
      <h1>{t('title')}</h1>
      <Link href={`/${lang}`}>
        {t('back-to-home')}
      </Link>
    </>
  );
};

export default Page;
