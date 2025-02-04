import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { Navigation } from './Navigation';

interface PageLayoutProps {
  params: {
    locale: string;
  };
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ params: { locale }, children }) => {
  return (
    <Box position="relative" h="100vh" px={12}>
      <Navigation locale={locale} />
      {children}
    </Box>
  );
};

export default PageLayout;
