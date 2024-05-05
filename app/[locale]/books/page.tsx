import React from 'react';
import NextLink from 'next/link';

import { Button,  Grid, GridItem, Heading, Link } from '@chakra-ui/react';

import { getI18n } from '../../../locales/server';
import { setStaticParamsLocale } from 'next-international/server'

import PageLayout from '../components/PageLayout';
import BookSection from '../components/BookSection';

interface CommonLayoutProps {
  params: {
    locale: string;
  };
}

const mockData = [
  {
    title: 'The Great Gatsby',
    description: 'The Great',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'The Catcher in the Rye',
    description: 'The Catcher',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    author: 'J.D. Salinger',
  },
  {
    title: 'To Kill a Mockingbird',
    description: 'To Kill',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    author: 'Harper Lee',
  },
  {
    title: 'The Great Gatsby2',
    description: 'The Great',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'The Catcher in the Rye2',
    description: 'The Catcher',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    author: 'J.D. Salinger',
  },
  {
    title: 'To Kill a Mockingbird2',
    description: 'To Kill',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    author: 'Harper Lee',
  }
]

const Page: React.FC<CommonLayoutProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale)
  const t = await getI18n();

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
          <Heading as='h1' size='xl' mb={4}>
            { t('book.title') }
          </Heading>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1, lg: 1 }}
          rowSpan={{ base: 1 }}
        >
          <Link as={NextLink} href={`/${locale}`}>
            <Button variant="link" colorScheme="pink">
              { t('book.backToHome') }
            </Button>
          </Link>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 9, lg: 12, '2xl': 10 }}
          rowSpan={{ base: 4, md: 3 }}
        >
          <BookSection books={mockData} title={ t('bookCard.read') } />
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 9, lg: 12, '2xl': 10 }}
          rowSpan={{ base: 4, md: 3 }}
        >
          <BookSection books={mockData} title={ t('bookCard.currentlyReading') } />
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 9, lg: 12, '2xl': 10 }}
          rowSpan={{ base: 4, md: 3 }}
        >
          <BookSection books={mockData} title={ t('bookCard.wantRead') } />
        </GridItem>
      </Grid>
    </PageLayout>
  );
};

export default Page;
