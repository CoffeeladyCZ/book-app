import BookList from "./components/BookList";
import PageLayout from "./components/PageLayout";

interface PageProps {
  params: {
    locale: string;
  }
}

const Page = async ({ params: { locale }}: PageProps) => {
  return (
    <PageLayout params={{ locale }}>
      <BookList />
    </PageLayout>
  );
}

export default Page;
