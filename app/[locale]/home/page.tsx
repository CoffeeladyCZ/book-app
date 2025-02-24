import PageLayout from '../components/PageLayout';
import { getI18n } from '../../../locales/server';
import { Box, Flex, HStack, Heading, Spacer } from '@chakra-ui/react';

import PopularBook from '../components/popular-book/PopularBook';

interface PageProps {
  params: {
    locale: string;
  };
}
const Page = async ({ params: { locale } }: PageProps) => {
  const t = await getI18n();

  return (
    <PageLayout params={{ locale }}>
      <Flex px={6}>
        <Heading as="h1" size="xl" mb={4}>
          {t('home.title')}
        </Heading>
        <Spacer />
      </Flex>
      <Box px={6}>
        <HStack spacing="24px">
          <PopularBook bgColor="primary.100" />
        </HStack>
      </Box>
    </PageLayout>
  );
};

export default Page;
