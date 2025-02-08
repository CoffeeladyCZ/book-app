'use client';

import type { GoogleBooksAPIResponse } from '../../../types/global';
import { useQuery } from '@tanstack/react-query';
import { Box, Grid, Heading, Skeleton, Text } from '@chakra-ui/react';

interface BookDetailProps {
  initialData: GoogleBooksAPIResponse;
  isbn: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ initialData, isbn }) => {
  const fetchBookDetail = async (): Promise<GoogleBooksAPIResponse> => {
    const res = await fetch(`${window.location.origin}/api/books/${isbn}`);
    if (!res.ok) {
      throw new Error('Failed to fetch book details');
    }
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['book-detail', isbn],
    queryFn: fetchBookDetail,
    initialData,
  });

  if (isLoading)
    return (
      <Box p={6}>
        <Skeleton height="200px" />
      </Box>
    );

  if (error)
    return (
      <Box p={6}>
        <Text color="red.500">Chyba při načítání dat</Text>
      </Box>
    );

  if (!data || !data.items || data.items.length === 0) {
    return (
      <Box p={6}>
        <Text>Kniha nebyla nalezena</Text>
      </Box>
    );
  }

  const book = data.items[0].volumeInfo;

  return (
    <Box position="relative" py="6">
      <Box
        bg={'primary.100'}
        position="absolute"
        top="50"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        width="80%"
        height="80%"
        zIndex={-1}
        py="10"
      />
      <Box py="6" px="10" zIndex={1}>
        <Heading as="h3" size="xl" fontWeight="300" py="6">
          {book.title}
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 2fr)', lg: 'repeat(5, 2fr)' }}
          gap={6}
          columnGap={4}
        >
          <Text>Autor: {book.authors?.join(', ')}</Text>
          <Text>Rok vydání: {book.publishedDate}</Text>
        </Grid>
      </Box>
    </Box>
  );
};

export default BookDetail;
