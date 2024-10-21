import PageLayout from './components/PageLayout';
import { Box, Flex, HStack, Heading, Spacer } from '@chakra-ui/react';

import { PopularBook } from './components/popular-book/PopularBook';
import * as Sentry from '@sentry/nextjs';

interface PageProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { locale } }) => {
  return (
    <Sentry.ErrorBoundary>
      <PageLayout params={{ locale }}>
        <Flex px={6}>
          <Spacer />
        </Flex>
        <Box px={6}>
          <HStack spacing="24px">
            <PopularBook bgColor="primary.100" />
          </HStack>
        </Box>
      </PageLayout>
    </Sentry.ErrorBoundary>
  );
};

export default Page;
