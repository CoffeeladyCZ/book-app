import PageLayout from "./components/PageLayout";
import { getI18n } from '../../locales/server';
import { Box, Flex, HStack, Heading, Spacer } from '@chakra-ui/react';

import { BookCard } from "./components/BookCard";
import * as Sentry from '@sentry/nextjs';

interface PageProps {
  params: {
    locale: string;
  }
}

const Page: React.FC<PageProps> = async ({ params: { locale }}) => {
  const t = await getI18n();

  return (
    <Sentry.ErrorBoundary>
      <PageLayout params={{locale}}>
        <Flex px={6}>
          <Heading as='h1' size='xl' mb={4}>
            { t('home.title')}
          </Heading>
          <Spacer />
        </Flex>
          <Box px={6}>
            <HStack spacing="24px">
              <BookCard />
            </HStack>
          </Box>
      </PageLayout>
    </Sentry.ErrorBoundary>
  );
}

export default Page;
