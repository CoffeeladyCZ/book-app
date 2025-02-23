'use client';

import { GridItem, Grid, Heading, Box, Skeleton } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import type { PopularBooksResponse, PopularBooksItem } from '../../../../types/global';

import PopularBookItem from './PopularBookItem';

interface PopularBookProps {
  bgColor?: string;
}

const PopularBook: React.FC<PopularBookProps> = ({ bgColor }) => {
  const fetchData = async () => {
    const listId = 704;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${apiUrl}/api/popular-books?list_id=${listId}`);
    const data: PopularBooksResponse = await res.json();
    return data;
  };

  const { isLoading, data: books } = useQuery({
    queryKey: ['popular-books'],
    queryFn: fetchData,
  });

  if (isLoading)
    return (
      <div>
        <Skeleton height="20px" />
      </div>
    );

  return (
    <Box position="relative" py="6">
      <Box
        bg={bgColor || 'primary.100'}
        position="absolute"
        top="50"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        width="90%"
        height="80%"
        zIndex={-1}
        py="10"
      />
      <Box py="6" px="10" zIndex={1}>
        <Heading as="h3" size="xl" color="primary.500" fontWeight="300" py="6">
          Most popular books
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 2fr)', lg: 'repeat(5, 2fr)' }}
          gap={6}
          columnGap={4}
        >
          {books &&
            books.books.map((book: PopularBooksItem) => (
              <GridItem key={book.id} colSpan={{ base: 1 }} className="myCustomAlignSelf">
                <PopularBookItem book={book} />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PopularBook;
