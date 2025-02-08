import React from 'react';
import { Grid, GridItem, Heading } from '@chakra-ui/react';

import { getI18n } from '../../../../locales/server';
import { setStaticParamsLocale } from 'next-international/server'

import PageLayout from '../../components/PageLayout';
import BookSectionList from '../../components/BookSectionList';
import { mockData } from '../../../../mockData';
import { kebabToCamelCase } from '../../../../utils/params';

interface CommonLayoutProps {
  params: {
    locale: string;
    section: string
  };
}

type bookCardSection = 'currentlyReading' | 'readBooks' | 'wantRead';

const Page: React.FC<CommonLayoutProps> = async ({ params: { locale, section } }) => {
  setStaticParamsLocale(locale)
  const t = await getI18n();

  const transformedSection = kebabToCamelCase(section) as bookCardSection;

  return (
    <PageLayout params={{locale}}>
      <Grid
        templateColumns={{ base: 'repeat(3, 100px)', md: 'repeat(9, 1fr)', lg: 'repeat(12, 1fr)' }}
        templateRows={{ base: '40px 40px repeat(10, 320px)', sm: '40px 40px repeat(10, 170px)', md: '40px repeat(11, 1fr)' }}
        py="6"
        px="10"
        gap={6}
      >
        <GridItem
          pl="2"
          rowSpan={1}
          colSpan={{ base: 3, md: 8, lg: 11 }}
        >
          <Heading as='h1' size='xl' fontWeight='500' mb={4}>
            {t(`bookCard.${transformedSection}`) || transformedSection}
          </Heading>
        </GridItem>
    
        <GridItem
          colSpan={{ base: 3, md: 9, lg: 12, '2xl': 10 }}
          rowSpan={{ base: 4, md: 3 }}
        >
          <BookSectionList books={mockData} />
        </GridItem>
      </Grid>
    </PageLayout>
  );
};

export default Page;
