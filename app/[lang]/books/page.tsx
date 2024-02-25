import React from 'react';
import NextLink from 'next/link';

import { Box, Button, Flex, HStack, Heading, Link, Spacer } from '@chakra-ui/react';

import { BookCard } from '../components/BookCard';
import PageLayout from '../components/PageLayout';

interface CommonLayoutProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<CommonLayoutProps> = async ({ params: { locale } }) => {

  return (
    <PageLayout params={{locale}}>
      <Flex px={6}>
        <Heading as='h1' size='xl' mb={4}>
          Book App
        </Heading>
        <Spacer />
        <Link as={NextLink} href={`/${locale}`}>
          <Button variant="link" colorScheme="pink">
            Back to homepage
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
