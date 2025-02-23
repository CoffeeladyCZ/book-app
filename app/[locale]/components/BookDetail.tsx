'use client';

import type { GoogleBooksAPIResponse } from '../../../types/global';
import { useQuery } from '@tanstack/react-query';
import { Badge, Box, Grid, GridItem, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import { useI18n } from '../../../locales/client';
interface BookDetailProps {
  initialData: GoogleBooksAPIResponse;
  isbn: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ initialData, isbn }) => {
  const t = useI18n();

  const fetchBookDetail = async (): Promise<GoogleBooksAPIResponse> => {
    const res = await fetch(`/api/books/${isbn}`);
    if (!res.ok) {
      throw new Error('Failed to fetch book details');
    }
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['book-detail', isbn],
    queryFn: fetchBookDetail,
    initialData,
    staleTime: 1000 * 60 * 5, // 5 minutes
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
        <Text color="red.500">{t('error.error')}</Text>
      </Box>
    );

  if (!data || !data.items || data.items.length === 0) {
    return (
      <Box p={6}>
        <Text>{t('error.notFoundBook')}</Text>
      </Box>
    );
  }

  const book = data.items[0].volumeInfo;

  return (
    <Box position="relative" py="6">
      <Box
        bg={'blackAlpha.50'}
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
        <Heading as="h3" size="xl" fontWeight="300" py="6" color="primary.500">
          {book.title}
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(6, 1fr)',
          }}
          templateRows={{
            base: 'auto',
            sm: 'auto',
            md: 'auto',
            lg: 'auto',
          }}
          gap={6}
          columnGap={3}
        >
          <GridItem
            colSpan={{
              base: 1,
              md: 2,
              lg: 2,
            }}
            rowSpan={1}
          >
            <Text fontSize="sm" color="primary.600">
              {t('bookDetail.author')} {book.authors?.join(', ')}
            </Text>
            <Text fontSize="sm" color="primary.600">
              {t('bookDetail.publishedDate')} {book.publishedDate}
            </Text>
            <Text fontSize="sm" color="primary.600">
              {t('bookDetail.publisher')} {book.publisher}
            </Text>
            <Text fontSize="sm" color="primary.600">
              {t('bookDetail.pageCount')} {book.pageCount}
            </Text>
          </GridItem>
          <GridItem rowStart={1} rowSpan={1} colSpan={1} colStart={3}>
            {book.categories?.map((category) => <Badge key={category}>{category}</Badge>)}
          </GridItem>
          <GridItem rowStart={2} rowSpan={1} colSpan={3}>
            <Text fontSize="xl" fontWeight="300" color="primary.500">
              {t('bookDetail.description')}
            </Text>{' '}
            {book.description}
          </GridItem>

          <GridItem
            colStart={{ md: 2, lg: 4 }}
            colSpan={{
              base: 2,
              md: 2,
              lg: 3,
            }}
            rowSpan={3}
          >
            <Box width={{ base: '100%', md: '80%', lg: '60%' }}>
              <Image
                src={book.imageLinks?.thumbnail}
                alt={book.title}
                width="100%"
                height="auto"
                maxH="350px"
                objectFit="contain"
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default BookDetail;
