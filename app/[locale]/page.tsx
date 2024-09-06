import NextLink from 'next/link';
import PageLayout from "./components/PageLayout";
import { getI18n, getCurrentLocale } from '../../locales/server';
import { Box, Button, Flex, HStack, Heading, Link, Spacer } from '@chakra-ui/react';

import { BookCard } from "./components/BookCard";

interface PageProps {
  params: {
    locale: string;
  }
}

const Page = async ({ params: { locale }}: PageProps) => {
  const t = await getI18n();
  const currentLocale = getCurrentLocale();

  return (
    <PageLayout params={{locale}}>
      <Flex px={6}>
        <Heading as='h1' size='xl' mb={4}>
          { t('home.title')}
        </Heading>
        <Spacer />
        <Link as={NextLink} href={`/${locale}`}>
          <Button variant="link" color="accent.orange">
            { t('home.backToHome') }
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
}

export default Page;
