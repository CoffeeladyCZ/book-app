import React from 'react';
import NextLink from 'next/link';

import { Box, Button, Flex, HStack, Heading, Link, Spacer } from '@chakra-ui/react';
import { getI18n } from '../../../locales/server';
import { setStaticParamsLocale } from 'next-international/server'

import { BookCard } from '../components/BookCard';
import PageLayout from '../components/PageLayout';

interface CommonLayoutProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<CommonLayoutProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale)
  const t = await getI18n();

  return (
    <PageLayout params={{locale}}>
      <Flex px={6}>
        <Heading as='h1' size='xl' mb={4}>
          { t('book.title') }
        </Heading>
        <Spacer />
        <Link as={NextLink} href={`/${locale}`}>
          <Button variant="link" colorScheme="pink">
            { t('book.backToHome') }
          </Button>
        </Link>
      </Flex>
      <Box px={6}>
        <HStack spacing="24px">
          <BookCard />
        </HStack>
      </Box>
    </PageLayout>
  );
};

export default Page;
