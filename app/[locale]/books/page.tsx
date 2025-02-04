import React from 'react';
import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { setStaticParamsLocale } from 'next-international/server';

import { getI18n } from '../../../locales/server';
import { mockData } from '../../../mockData';

import PageLayout from '../components/PageLayout';
import BookSection from '../components/BookSection';

interface CommonLayoutProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<CommonLayoutProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return (
    <PageLayout params={{ locale }}>
      <Grid
        templateColumns={{ base: 'repeat(3, 100px)', md: 'repeat(9, 1fr)', lg: 'repeat(12, 1fr)' }}
        templateRows={{
          base: '40px 40px repeat(10, 320px)',
          sm: '40px 40px repeat(10, 170px)',
          md: '40px repeat(11, 1fr)',
        }}
        py="6"
        px="10"
        gap={6}
      >
        <GridItem pl="2" rowSpan={1} colSpan={{ base: 3, md: 8, lg: 11 }}>
          <Heading as="h1" size="xl" fontWeight="500" mb={4}>
            {t('navigation.books')}
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 9, lg: 12, '2xl': 10 }} rowSpan={{ base: 4, md: 3 }}>
          <BookSection params={{ locale }} books={mockData} title="readBooks" />
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 9, lg: 12, '2xl': 10 }} rowSpan={{ base: 4, md: 3 }}>
          <BookSection params={{ locale }} books={mockData} title="currentlyReading" />
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 9, lg: 12, '2xl': 10 }} rowSpan={{ base: 4, md: 3 }}>
          <BookSection params={{ locale }} books={mockData} title="wantRead" />
        </GridItem>
      </Grid>
    </PageLayout>
  );
};

export default Page;
