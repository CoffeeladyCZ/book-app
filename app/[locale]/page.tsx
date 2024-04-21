import BookList from "./components/BookList";
import PageLayout from "./components/PageLayout";
import { getI18n, getCurrentLocale } from '../../locales/server';

interface PageProps {
  params: {
    locale: string;
  }
}

const Page = async ({ params: { locale }}: PageProps) => {
  const t = await getI18n();
  const currentLocale = getCurrentLocale();

  return (
    <PageLayout params={{ locale }}>
      <BookList />
    </PageLayout>
  );
}

export default Page;
