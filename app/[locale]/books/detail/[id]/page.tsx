import { setStaticParamsLocale } from "next-international/server";

import { getI18n } from "../../../../../locales/server";
import PageLayout from "../../../components/PageLayout";
import { BookDetail } from "../../../components/BookDetail";

interface PageProps {
  params: {
    locale: string;
    id: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { locale, id }}) => {
  setStaticParamsLocale(locale)
  const t = await getI18n();

  return (
    <PageLayout params={{ locale }}>
      <BookDetail name={id} />
    </PageLayout>
  );
};

export default Page;