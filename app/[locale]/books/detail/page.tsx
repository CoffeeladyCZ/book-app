import { setStaticParamsLocale } from 'next-international/server';
import { getI18n } from '../../../../locales/server';
import PageLayout from '../../components/PageLayout';

interface PageProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return (
    <PageLayout params={{ locale }}>
      <h1>{t('book.title')}</h1>
    </PageLayout>
  );
};

export default Page;
