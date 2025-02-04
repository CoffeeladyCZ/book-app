import React from 'react';
import { setStaticParamsLocale } from 'next-international/server';

import { getI18n } from '../../../../../locales/server';

import PageLayout from '../../../components/PageLayout';
import type { GoogleBooksAPIResponse } from '../../../../../types/global';
import BookDetail from '../../../components/BookDetail';

interface CommonLayoutProps {
  params: {
    locale: string;
    isbn: string;
  };
}

const Page: React.FC<CommonLayoutProps> = async ({ params: { locale, isbn } }) => {
  setStaticParamsLocale(locale);
  const t = await getI18n();

  const fetchData = async () => {
    // Použijeme process.env.VERCEL_URL pro produkci nebo localhost pro vývoj
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const url = `${baseUrl}/api/books/${isbn}`;

    try {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
        },
        next: { revalidate: 3600 }, // Cache na 1 hodinu
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch book details, status: ${res.status}`);
      }

      const data: GoogleBooksAPIResponse = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching book details:', error);
      throw error;
    }
  };

  try {
    const bookDetail = await fetchData();

    if (!bookDetail || !bookDetail.items || bookDetail.items.length === 0) {
      return (
        <PageLayout params={{ locale }}>
          <div>Kniha nebyla nalezena.</div>
        </PageLayout>
      );
    }

    return (
      <PageLayout params={{ locale }}>
        <BookDetail initialData={bookDetail} isbn={isbn} />
      </PageLayout>
    );
  } catch (error) {
    console.error('Error in page component:', error);
    return (
      <PageLayout params={{ locale }}>
        <div>Nepodařilo se načíst detail knihy. Zkuste to prosím později.</div>
      </PageLayout>
    );
  }
};

export default Page;
